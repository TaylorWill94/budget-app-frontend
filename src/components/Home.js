import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome To Budget Bae</h1>
      <h2>
        Budget Bae allows you to organize and track all your expenses in one
        place.
      </h2>
      <h2>Connect with Budget Bae today!</h2>
      <Link to="/transactions">
        <button className="nav-items begin">Let's begin!</button>
      </Link>
    </div>
  );
};

export default Home;
