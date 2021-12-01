import {
  GET_TESTING_USER_API,
  GET_TESTS,
  GET_TESTS_API,
  POST_GATB,
  POST_HOL,
  POST_USK,
} from "../helpers";

import axios from "axios";

export function get_testing_user(token) {
  return async (dispatch) => {
    let res = await axios.get(GET_TESTING_USER_API, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
  };
}

export function get_tests(token) {
  return async (dispatch) => {
    let res = await axios.get(GET_TESTS_API, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
  };
}

export function post_hol_choise(index, name, token) {
  console.log(name);
  let answer = [
    {
      index: index,
      name: name.name,
    },
  ];
  console.log(answer);
  return async (dispatch) => {
    let res = await axios.post(POST_HOL, answer, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  };
}

export function post_usk_choise(index, code, token) {
  console.log(index);
  let answer = [
    {
      index: index,
      code: code,
    },
  ];
  console.log(answer);
  return async (dispatch) => {
    let res = await axios.post(POST_USK, answer, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  };
}

export function post_gatb_choise(scores, token) {
  console.log(scores);
  let answer = {
    result: scores,
  };
  return async (dispatch) => {
    let res = await axios.post(POST_GATB, answer, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  };
}
