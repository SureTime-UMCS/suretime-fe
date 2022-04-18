import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookies = () => {
  return cookies;
};

export const setAccessToken = (token) => {
  cookies.set("accessToken", token, {
    path: "/",
    maxAge: 86400, //Set access token on 1 day
  });
}
