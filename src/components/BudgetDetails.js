import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function BudgetDetails() {
  const URL = process.env.REACT_APP_API_URL;
  const [budget, setBudget] = useState([]);
  const navigate = useNavigate();
  let { index } = useParams();


  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => setBudget(response.data));
  }, []);

  const handleDelete = () => {
    axios.delete(`${URL}/transactions/${index}`)
    .then(() => navigate('/transactions'))
  };

  return (
    <section className="budget-details">
      <h1 className="budget-details-header">Transaction Details</h1>
      <p className="budget-info">Date: {budget.date}</p>
      <p className="budget-info">Item: {budget.item_name}</p>
      <p className="budget-info">Amount: ${budget.amount}</p>
      <p className="budget-info">From: {budget.from}</p>
      <p className="budget-info">Category: {budget.category}</p>
      <div>
          <Link to='/transactions'>
              <button className="back-details-btn">Back</button>
          </Link>
      </div>
      <div>
          <Link to={`/transactions/${index}/edit`}>
              <button className="edit-details-btn">Edit</button>
          </Link>
      </div>
      <div>
        <button className="delete-budget-btn" onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
}

export default BudgetDetails;
