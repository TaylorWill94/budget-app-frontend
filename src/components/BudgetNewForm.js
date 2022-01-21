import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BudgetNewForm() {
  const URL = process.env.REACT_APP_API_URL;
  let navigate = useNavigate();

  const [newBudget, setNewBudget] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  // useEffect(() => {
  //   // console.log
  //   axios
  //     .post(`${URL}/transactions`)
  //     .then((response) => console.log(response.data));
  // }, []);

  const handleChange = (event) => {
    setNewBudget({ ...newBudget, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/transactions`, newBudget).then(() => navigate("/transactions"));
  };

  return (
    <div className="new-budget">
      <h1>New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">
          Item Name
        </label>
        <input
          id="item_name"
          type="text"
          value={newBudget.item_name}
          onChange={handleChange}
          placeholder="Please enter item"
          required
        />
        <br />
        <label htmlFor="category">
          Category
        </label>
        <input
          id="category"
          type="text"
          value={newBudget.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <br />
        <label htmlFor="date">
          Date
        </label>
        <input
          id="date"
          type="text"
          value={newBudget.date}
          onChange={handleChange}
          placeholder="Date"
        />
        <br />
        <label htmlFor="amount">
          Amount
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={newBudget.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
         <br />
        <label htmlFor="from">
          From
        </label>
        <input
          id="from"
          type="text"
          value={newBudget.from}
          onChange={handleChange}
          placeholder="Date"
        />
        <br />
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
}

export default BudgetNewForm;
