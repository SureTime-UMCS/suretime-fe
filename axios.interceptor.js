import axios from "axios";

import { getCookies } from "./utils/cookies";

const a = () => {
  axios.interceptors.response.use(
    (response) => {
      // if (!getCookies().get("access") && getCookies().get("refresh")) { jak bedzie refresh token
      //   axios
      //     .post("/auth/login/refresh/", {
      //       refresh: getCookies().get("refresh"),
      //     })
      //     .then(
      //       (res) =>
      //         getCookies().set("access", res.data.access, {
      //           path: "/",
      //           maxAge: 86400,
      //         }) //Set access token on 1 day
      //     );
      // }
      return response;
    },
    (err) => {
      const status = err.response?.status || 500;
      console.log(err);
      switch (status) {
        case 401: {
          if (window.location.pathname !== "/login") {
            window.location.replace("/login");
          }
          return Promise.reject(err);
        }
      }
    }
  );

  axios.interceptors.request.use(
    function (config) {
      config.headers.Authorization = `Bearer ${getCookies().get(
        "accessToken"
      )}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export default a;
