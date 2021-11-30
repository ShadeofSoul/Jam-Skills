export const AUTH_API_LOGIN = "https://api.jamskills.ml/api/testingusers/login";
export const AUTH_API_REG =
  "https://api.jamskills.ml/api/testingusers/registration";

export const GET_TESTING_USER_API =
  "https://api.jamskills.ml/api/testingusers/setquizzes";

export const GET_TESTS_API =
  "https://api.jamskills.ml/api/testingusers/setquizzes/2";

export const POST_HOL =
  "https://api.jamskills.ml/api/testingusers/setquizzes/1/hol/answers";

export const ACTIONS = {
  GET_TESTS: "GET_TESTS",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_LOADING: "AUTH_LOADING",
  AUTH_ERROR: "AUTH_ERROR",
  CLEAR_AUTH_STATE: "CLEAR_AUTH_STATE",
  AUTH_LOGOUT: "AUTH_LOGOUT",
};

export const GET_TESTS = `/GET_TESTS`;
export const AUTH_USER = "AUTH/AUTH_USER";
export const AUTH_ERROR = "AUTH/AUTH_ERROR";
export const REGISTER_USER = "AUTH/REGISTER_USER";
export const RESTORE_TOKEN = "AUTH/RESTORE_TOKEN";
export const LOGOUT_USER = "AUTH/LOGOUT_USER";
export const GET_DATA_FROM_LOCALSORAGE = "AUTH/GET_DATA_FROM_LOCALSORAGE";
export const GET_DATA_ABOUT_USER_AND_PARTNER =
  "AUTH/GET_DATA_ABOUT_USER_AND_PARTNER";
export const GET_DOCS_TABLE = "PROFILE/GET_DOCS_TABLE";
export const GET_MY_INDEX_TABLE = "PROFILE/GET_MY_INDEX_TABLE";
export const UPDATE_USER_PHOTO = "PROFILE/UPDATE_USER_PHOTO";
