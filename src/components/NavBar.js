import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
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
    <nav className="nav">
      <h1 className="app-name">
        Budget Bae
        <Link className="acct-balance" to="/transactions">
          <button className="acct-balance">
            {numBalance > 1000 ? (
              <p style={{ color: "green" }}>${numBalance}</p>
            ) : (
              <p style={{ color: "white" }}>${numBalance}</p>
            )}
          </button>
        </Link>
      </h1>
      <Link to="/">
        <button className="nav-items">Home</button>
      </Link>
      <Link to="/transactions">
        <button className="nav-items">View Budget</button>
      </Link>
      <Link to="/transactions/new">
        <button className="nav-items">New Budget</button>
      </Link>
    </nav>
  );
}

export default NavBar;
