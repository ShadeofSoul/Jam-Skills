import {
  AUTH_API_LOGIN,
  AUTH_USER,
  AUTH_ERROR,
  AUTH_API_REG,
} from "../helpers";

export function loginUser(userData) {
  return async (dispatch) => {
    const response = await fetch(AUTH_API_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      let res = await response.json();

      localStorage.setItem("token", res.token);

      dispatch({
        type: AUTH_USER,
        payload: {
          success: true,
          user: {
            email: userData.email,
            _password: userData.password,
            token: res.token,
          },
        },
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          errorMessage: "Не правильный логин или пароль",
        },
      });
    }
  };
}

export const registerUser = (newUser) => {
  console.log(newUser);
  return async (dispatch) => {
    const response = await fetch(AUTH_API_REG, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      alert("Запрос не удался");
      return;
    } else {
      alert("Регистрация прошла успешно");
    }
  };
};
