import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Clothing() {
  const URL = process.env.REACT_APP_API_URL;
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((response) => setClothing(response.data));
  }, [URL]);

  let clothingCategory = clothing.map((clothes, index) => {
    if (clothes.category === "clothing") {
      return (
        <tr key={index}>
          <td>{clothes.date}</td>
          <td>
            <Link className="budget-item-link" to={`/transactions/${index}`}>
              {clothes.item_name}
            </Link>
          </td>
        </tr>
      );
    }
    return null;
  });

  return (
    <div className="food-budget">
      <h1 className="food-header">Clothing</h1>
      <table className="budget-index">
        <tbody>{clothingCategory}</tbody>
      </table>
    </div>
  );
}

export default Clothing;
