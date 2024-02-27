import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h100vh align-center">
      <ul>
        <li>
          <Link to={"/use-state"}>Use State</Link>
        </li>
        <li>
          <Link to={"/todos"}>Use Effect and Use ref</Link>
        </li>
        <li>
          <Link to={"/user-form"}>Use Reducer</Link>
        </li>
        <li>
          <Link to={"/use-ref"}>Use ref</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
