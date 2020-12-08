import { apiClient } from "../index";
export const temporaryRegistationUser = (email) => {
  apiClient.get("/sanctum/csrf-cookie").then((response) => {
    apiClient
      .post("/api/user/", {email: email})
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("A");
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 401 || error.response.status === 422 || error.response.status === 500) {
          alert("ログイン失敗");
        }
      });
  });
};
export const registerUser = (postData) => {
  apiClient.get("/sanctum/csrf-cookie").then((response) => {
    apiClient
      .post("/api/user/register", postData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 401 || error.response.status === 422 || error.response.status === 500) {
          alert("ログイン失敗");
        }
      });
  });
};

