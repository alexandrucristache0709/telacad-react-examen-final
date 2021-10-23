import { UserConstants } from "./userConstants";

export function addUser(user) {
  return {
    type: UserConstants.ADD_USER,
    payload: user,
  };
}

export function addSurname(surname) {
  return {
    type: UserConstants.ADD_SURNAME,
    payload: surname,
  };
}

export function addForename(forename) {
  return {
    type: UserConstants.ADD_FORENAME,
    payload: forename,
  };
}

export function addJob(job) {
  return {
    type: UserConstants.ADD_JOB,
    payload: job,
  };
}

export function addSalary(salary) {
  return {
    type: UserConstants.ADD_SALARY,
    payload: salary,
  };
}

export function addHireDate(hireDate) {
  return {
    type: UserConstants.ADD_HIRE_DATE,
    payload: hireDate,
  };
}

export function sortByName() {
  return {
    type: UserConstants.SORT_BY_NAME,
  };
}

export function sortBySalary() {
  return {
    type: UserConstants.SORT_BY_SALARY,
  };
}
