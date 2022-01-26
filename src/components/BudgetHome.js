import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Budget from "./Budget";

function BudgetHome() {
  const URL = process.env.REACT_APP_API_URL;
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((response) => setBudgets(response.data));
  }, [URL]);

  let bankTotal = 2000;

  let total = budgets.map((budget) => budget.amount);
  // console.log(total);
  let amount = total.reduce((prev, curr) => Number(prev) + Number(curr), 0);
  // console.log(amount);
  let currentBalance = bankTotal - amount;
  let numBalance = currentBalance.toFixed(2);

  return (
    <div className="budget-index">
      <h2 className="budget-home-intro">View your budget in one place.</h2>
      <h1 className="bank-total">
        Bank Starting Balance: ${bankTotal.toFixed(2)}
        <br />
        Budget Total: ${amount.toFixed(2)}
        <br />
        Current Balance:{" "}
        {numBalance > 1000 ? (
          <p style={{ color: "green" }}>${numBalance}</p>
        ) : (
          <p style={{ color: "white" }}>${numBalance}</p>
        )}
        <br />
        <Link to="/categories">
          <button className="nav-items">food</button>
        </Link>
        <Link to="/clothing">
          <button className="nav-items">clothing</button>
        </Link>
        <Link to="/misc">
          <button className="nav-items">misc</button>
        </Link>
      </h1>
      <table>
        <tbody>
          {budgets.map((budget, index) => {
            return <Budget key={index} budget={budget} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BudgetHome;
