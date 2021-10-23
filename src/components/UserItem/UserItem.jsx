import React from "react";

function UserItem(props) {
  const { surname, forename, job, salary, hireDate } = props.user;

  return (
    <div className="ml-2 d-flex flex-column align-items-start">
      <p className="mb-2 text-center font-weight-bold">
        Utilizatorul: {props.index + 1}
      </p>
      <p className="mb-2 text-center">Surname: {surname}</p>
      <p className="mb-2 text-center">Forename: {forename}</p>
      <p className="mb-2 text-center">Job: {job}</p>
      <p className="mb-2 text-center">Salary: {salary}</p>
      <p className="mb-2 text-centers">Hire Date: {hireDate}</p>
    </div>
  );
}

export default UserItem;
