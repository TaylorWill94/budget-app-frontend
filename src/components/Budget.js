import { Link } from "react-router-dom";

function Budget({ budget, index }) {
  return (
    <tr className="budget">
      <td>{budget.date}</td>
      <td>
        <Link className="budget-item-link" to={`/transactions/${index}`}>
          {budget.item_name}
        </Link>
      </td>
      <td>{budget.category}</td>
      <td>${budget.amount}</td>
      <td>
        <br />
        <Link to={`/transactions/${index}/edit`}>
          <button className="edit-budget-btn">Edit</button>
        </Link>
      </td>
    </tr>
  );
}

export default Budget;
