import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories({ index }) {
  const URL = process.env.REACT_APP_API_URL;
  const [budgetTypes, setBudgetTypes] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((response) => setBudgetTypes(response.data));
  }, [URL]);

  let category = budgetTypes.map((budget, index) => {
    if (budget.category === "food") {
      return (
        <tr key={index}>
          <td>{budget.date}</td>
          <td>
            <Link
              className="budget-item-link"
              to={`/transactions/${index}`}
            >
              {budget.item_name}
            </Link>
          </td>
        </tr>
      )
    }
  })

//   let category = budgetTypes.map((budget, index) => {
//     if (budget.category === "food") {
//       return (
//         <p key={index}>
//           {budget.date} : {budget.item_name}
//         </p>
//       );
//     }
//   });

  return (
    <section>
     <h1>What's Cooking</h1>
      <table className="budget-index">
        <tbody>
         {category}
        </tbody>
      </table>
    </section>
  );
}

export default Categories;
