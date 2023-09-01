const HOME_URL: string = "/";
const COURSES_URL: string = "/courses";
const MY_COURSES_URL: string = "/my-courses";
const CONSULTATIONS_URL: string = "https://app.zencal.io/u/grabowskidawid";
const LOGIN_URL: string = "/login";
const REGISTER_URL: string = "/register";
const PRIVACY_POLICY_URL: string = "/privacy-policy";

type GlobalConsts = {
  HOME_URL: string;
  COURSES_URL: string;
  MY_COURSES_URL: string;
  CONSULTATIONS_URL: string;
  LOGIN_URL: string;
  REGISTER_URL: string;
  PRIVACY_POLICY_URL: string;
};

export const GLOBAL_CONSTS: GlobalConsts = {
  HOME_URL,
  COURSES_URL,
  MY_COURSES_URL,
  CONSULTATIONS_URL,
  LOGIN_URL,
  REGISTER_URL,
  PRIVACY_POLICY_URL,
} as const;
