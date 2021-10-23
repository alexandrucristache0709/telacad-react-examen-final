import { UserConstants } from "./userConstants";

const initialState = {
  currentUser: {
    surname: "",
    forename: "",
    job: "",
    salary: 0,
    hireDate: null,
  },
  users: [],
  sortByName: false,
  sortBySalary: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserConstants.ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UserConstants.ADD_SURNAME:
      return {
        ...state,
        currentUser: { ...state.currentUser, surname: action.payload },
      };
    case UserConstants.ADD_FORENAME:
      return {
        ...state,
        currentUser: { ...state.currentUser, forename: action.payload },
      };
    case UserConstants.ADD_JOB:
      return {
        ...state,
        currentUser: { ...state.currentUser, job: action.payload },
      };
    case UserConstants.ADD_SALARY:
      return {
        ...state,
        currentUser: { ...state.currentUser, salary: action.payload },
      };
    case UserConstants.ADD_HIRE_DATE:
      return {
        ...state,
        currentUser: { ...state.currentUser, hireDate: action.payload },
      };
    case UserConstants.SORT_BY_NAME:
      return {
        ...state,
        users: state.users.sort((u1, u2) =>
          u1.surname.localeCompare(u2.surname)
        ),
        sortByName: true,
        sortBySalary: false,
      };
    case UserConstants.SORT_BY_SALARY:
      return {
        ...state,
        users: state.users.sort((u1, u2) => u1.salary - u2.salary),
        sortByName: false,
        sortBySalary: true,
      };
    default:
      return state;
  }
}
