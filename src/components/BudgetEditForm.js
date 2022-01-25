import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";



function BudgetEditForm() {
  let { index } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [editBudget, setEditBudget] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleText = (event) => {
    setEditBudget({ ...editBudget, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => setEditBudget(response.data));
    //   console.log(setEditBudget)
  }, [URL, index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/transactions/${index}`, editBudget)
      .then(() => navigate(`/transactions/${index}`));
  };

  return (
    <div className="edit-budget">
      <h1 className="budget-edit-form-header">Edit</h1>
      <form className="budget-edit-form" onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item name:</label>
        <input
          id="item_name"
          type="text"
          value={editBudget.item_name}
          onChange={handleText}
          placeholder="Name of item"
          required
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={editBudget.amount}
          onChange={handleText}
          placeholder="Amount"
          required
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          value={editBudget.date}
          onChange={handleText}
          placeholder="Date"
          required
        />
        <br />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={editBudget.from}
          onChange={handleText}
          placeholder="From"
          required
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={editBudget.category}
          onChange={handleText}
          placeholder="Category"
          required
        />
        <br />
        <input className="edit-submit-btn" type="submit" />
      <Link to={`/transactions`}>
        <button className="back-btn">Back</button>
      </Link>
      </form>
    </div>
  );
}

export default BudgetEditForm;
