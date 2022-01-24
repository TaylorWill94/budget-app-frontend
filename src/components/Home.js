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
      <br />
      <br />
      <h2>What people are saying about Budget Bae</h2>
      <br />
      <section>
        <article className="budget-review">
          I love Budget Bae! It's easy to navigate and keeps me on track with my
          goals!
          <p>- Michael Scott</p>
        </article>
        <br />
        <article className="budget-review">
        Budget Bae has saved my life
          <p>- Pam Beasly</p>
        </article>
        <br />
        <article className="budget-review">
        Budget Bae has really kept me in check with my finances!
          <p>- Steve Smith</p>
        </article>
      </section>
    </div>
  );
};

export default Home;
