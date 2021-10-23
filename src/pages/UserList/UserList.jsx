import React from "react";
import UserItem from "../../components/UserItem/UserItem";
import { connect } from "react-redux";
import { sortByName, sortBySalary } from "../../redux/user/userActions";

class UserList extends React.Component {
  render() {
    console.log(`render ${this.props.users}`);
    return (
      <div className="my-4 mx-4 d-flex flex-column align-items-start">
        {this.props.users.map((user, index) => {
          return <UserItem user={user} key={index} index={index} />;
        })}
        <button
          type="button"
          className="mx-2 my-2 btn btn-primary btn-sm"
          onClick={() => this.props.sortByName()}
        >
          Sorteaza dupa nume
        </button>
        <button
          type="button"
          className="mx-2 btn btn-primary btn-sm"
          onClick={() => this.props.sortBySalary()}
        >
          Sorteaza dupa salariu
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    isByName: state.sortByName,
    isBySalary: state.sortBySalary,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sortByName: () => dispatch(sortByName()),
    sortBySalary: () => dispatch(sortBySalary()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
