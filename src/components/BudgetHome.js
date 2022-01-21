import axios from "axios";
import { useState, useEffect } from "react";
import Budget from "./Budget";

function BudgetHome() {
  const URL = process.env.REACT_APP_API_URL;
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((response) => setBudgets(response.data));
  }, [URL]);

  return (
    <div className="budget-index">
      <h1 className="bank-total">
        Bank Account Total:
        {/* // Trying to add all budget amounts together to get a total */}
        {/* {budgets.map(budget => { 
            return <p>{budget.amount}</p>
          })} */}
        {/* {budgets.map((budget, index) => {
          let num = 0;
         if (budget.amount > 1000) {
           num += budget.amount
           return <p style={{color: "green"}} key={index}>{num}</p>
         } else {
           return <p key={index}>{budget.amount}</p>
         }
        })} */}
      </h1>
      {/* {budgets.map((budget, index) => {
          let num = 0;
         if (budget.amount > 100) {
           num += budget.amount
           return <p style={{color: "green"}} key={index}>{num}</p>
         }
        })} */}
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
