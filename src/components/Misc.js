import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Misc() {
  const URL = process.env.REACT_APP_API_URL;
  const [misc, setMisc] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/transactions`).then((response) => setMisc(response.data));
  }, [URL]);

  let miscCategory = misc.map((mis, index) => {
    if (mis.category === "misc") {
      return (
        <tr key={index}>
          <td>{mis.date}</td>
          <td>
            <Link className="budget-item-link" to={`/transactions/${index}`}>
              {mis.item_name}
            </Link>
          </td>
        </tr>
      );
    }
    return null;
  });

  return (
    <div className="food-budget">
      <h1 className="food-header">Misc</h1>
      <table className="budget-index">
        <tbody>{miscCategory}</tbody>
      </table>
    </div>
  );
}

export default Misc;
