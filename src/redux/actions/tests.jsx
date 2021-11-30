import {
  GET_DATA_FROM_LOCALSORAGE,
  GET_TESTING_USER_API,
  GET_TESTS,
  GET_TESTS_API,
  POST_HOL,
} from "../helpers";

import axios from "axios";

export function get_testing_user(token) {
  return async (dispatch) => {
    let res = await axios.get(GET_TESTING_USER_API, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res.data[0].testing_user);
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

export function post_choise(index, name, token) {
  console.log(name);
  let ans = {
    index: index,
    name: name.name,
  };
  console.log(ans);
  return async (dispatch) => {
    let res = await axios.post(POST_HOL, ans, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    // const response = await fetch(POST_HOL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(ans),
    // });
    // console.log(response);
  };
}
