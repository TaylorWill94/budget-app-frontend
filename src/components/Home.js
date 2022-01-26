import { Link } from "react-router-dom";
import budget from './budget.png';
import preview from './preview.png';

const Home = () => {
  return (
    <div className="home">
      <br />
      <h1 className="home-header">Welcome To Budget Bae</h1>
      <br />
      <p className="home-desc">
        Budget Bae allows you to organize and track all your expenses in one
        place.
      </p>
      <br />
      <br />
      <Link to="/transactions/new">
        <button className="nav-items begin">Let's begin!</button>
      </Link>
      <br />
      <br />
      <br />
     <img className="budget-logo" src={budget} width='200' alt={budget} />
      <br />
      <br />
      <h2 className="budget-review-header">What people are saying about Budget Bae ✨</h2>
      <br />
      <hr />
      <br />
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
        <br />
        <br />
        <br />
        <h2 className="budget-review-header">Grow with Budget Bae ✨</h2>
        <br />
        <hr />
        <br />
        <p className="home-desc">
          Keep track of your finances while staying within budget.
        </p>
        <br />
        <img src={preview} width='250' alt={preview} />
      </section>
    </div>
  );
};

export default Home;
