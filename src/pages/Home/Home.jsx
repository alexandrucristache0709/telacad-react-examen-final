import React from "react";
import { Link } from "react-router-dom";
import UserAddForm from "../../components/UserAddForm/UserAddForm";

function Home() {
  return (
    <div>
      <UserAddForm />
      <Link to="/people">
        <button type="button" className="ml-2 btn btn-outline-primary">
          Persoane
        </button>
      </Link>
    </div>
  );
}

export default Home;
