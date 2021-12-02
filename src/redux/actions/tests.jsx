import {
  GET_TESTING_USER_API,
  GET_TESTS_API,
  POST_GATB,
  POST_HOL,
  POST_USK,
  PUT_GATB,
  PUT_HOL,
  PUT_USK,
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
  let hol = JSON.parse(localStorage.getItem("hol"));
  console.log(hol);
  let answer = [
    {
      index: index,
      name: name.name,
    },
  ];

  if (hol) {
    hol.holAnswers.push(answer[0]);
  } else if (!hol) {
    hol = {
      holAnswers: [
        {
          index: index,
          name: name.name,
        },
      ],
    };
  }
  localStorage.setItem("hol", JSON.stringify(hol));

  return async (dispatch) => {
    await axios.post(POST_HOL, answer, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: PUT_HOL,
      payload: {
        hol: JSON.parse(localStorage.getItem("hol")),
      },
    });
  };
}

export function post_usk_choise(index, code, token) {
  let usk = JSON.parse(localStorage.getItem("usk"));
  console.log(usk);
  let answer = [
    {
      index: index,
      code: code,
    },
  ];
  if (usk) {
    usk.uskAnswers.push(answer[0]);
  } else if (!usk) {
    usk = {
      uskAnswers: [
        {
          index: index,
          code: code,
        },
      ],
    };
  }
  localStorage.setItem("usk", JSON.stringify(usk));

  return async (dispatch) => {
    await axios.post(POST_USK, answer, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: PUT_USK,
      payload: {
        usk: JSON.parse(localStorage.getItem("usk")),
      },
    });
  };
}

export function post_gatb_choise(scores, token) {
  let gatb = JSON.parse(localStorage.getItem("gatb"));
  console.log(scores);
  let answer = {
    result: scores,
  };

  if (gatb) {
    gatb.gatbAnswers.push(answer);
  } else if (!gatb) {
    gatb = {
      gatbAnswers: [
        {
          result: scores,
        },
      ],
    };
  }
  localStorage.setItem("gatb", JSON.stringify(gatb));

  return async (dispatch) => {
    await axios.post(POST_GATB, answer, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: PUT_GATB,
      payload: {
        gatb: JSON.parse(localStorage.getItem("gatb")),
      },
    });
  };
}
