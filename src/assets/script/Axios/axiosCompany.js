import { apiClient } from "../index";
export const insertCompany = (postData) => {
  apiClient.get("/sanctum/csrf-cookie").then((response) => {
    apiClient
      .post("/api/company", postData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 401 || error.response.status === 422 ) {
          alert("登録失敗");
        }
      });
  });
};
