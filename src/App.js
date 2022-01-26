import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BudgetHome from "./components/BudgetHome";
import BudgetDetails from "./components/BudgetDetails";
import BudgetNewForm from "./components/BudgetNewForm";
import BudgetEditForm from "./components/BudgetEditForm";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Clothing from "./components/Clothing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<BudgetHome />} />
        <Route path="/transactions/:index" element={<BudgetDetails />} />
        <Route path="/transactions/new" element={<BudgetNewForm />} />
        <Route path="/transactions/:index/edit" element={<BudgetEditForm />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/clothing" element={<Clothing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
