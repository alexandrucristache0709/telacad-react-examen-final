import React from "react";
import { connect } from "react-redux";
import {
  addUser,
  addSurname,
  addForename,
  addSalary,
  addJob,
  addHireDate,
} from "../../redux/user/userActions";

class UserAddForm extends React.Component {
  submitAddForm(event) {
    event.preventDefault();
    this.props.submitAddUser(this.props.user);
  }

  render() {
    return (
      <form
        className="d-flex flex-column align-items-start m-2"
        onSubmit={(event) => this.submitAddForm(event)}
      >
        <h2>Adauga utilizatori:</h2>
        <label htmlFor="surname">Nume:</label>
        <input
          type="text"
          name="surname"
          onChange={(event) => this.props.updateSurname(event.target.value)}
        />
        <label htmlFor="forename">Prenume:</label>
        <input
          type="text"
          name="forename"
          onChange={(event) => this.props.updateForename(event.target.value)}
        />
        <label htmlFor="job">Meserie:</label>
        <input
          type="text"
          name="job"
          onChange={(event) => this.props.updateJob(event.target.value)}
        />
        <label htmlFor="salary">Salariu:</label>
        <input
          type="number"
          name="salary"
          onChange={(event) => this.props.updateSalary(event.target.value)}
        />
        <label htmlFor="hire-date">Data Angajarii:</label>
        <input
          type="date"
          name="hire-date"
          onChange={(event) => this.props.updateHireDate(event.target.value)}
        />
        <input
          className="mt-2 btn btn-outline-primary"
          type="submit"
          value="Introdu utilizatorul"
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitAddUser: (payload) => dispatch(addUser(payload)),
    updateSurname: (payload) => dispatch(addSurname(payload)),
    updateForename: (payload) => dispatch(addForename(payload)),
    updateJob: (payload) => dispatch(addJob(payload)),
    updateSalary: (payload) => dispatch(addSalary(payload)),
    updateHireDate: (payload) => dispatch(addHireDate(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddForm);
