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

  // let transaction = budgets.map((budget, index) => {
  //   let num = 0;
  //  if (budget.amount > 1000) {
  //    num += budget.amount
  //    return <p style={{color: "green"}} key={index}>{num}</p>
  //  } else {
  //    return <p key={index}>{budget.amount}</p>
  //  }
  // })

  let total = budgets.map((budget) => budget.amount);
  // console.log(total);
  let amount = total.reduce((prev, curr) => prev + curr, 0);
  console.log(amount);


  return (
    <div className="budget-index">
      <h2 className="budget-home-intro">View your budget in one place.</h2>
      <h1 className="bank-total">
        Bank Account Total: ${amount.toFixed(2)}
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
