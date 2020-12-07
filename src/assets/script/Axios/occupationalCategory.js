import {apiClient} from '../index';
export const indexJob = (id) => {
    return apiClient.get("/sanctum/csrf-cookie").then((response) => {
      return apiClient
        .get(`/api/occupational_category`)
        .then((response) => {
          if (response.status !== 200) {
            return false;
          }
          return response;
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 401 || error.response.status === 422 || error.response.status === 500) {
            alert("データ取得失敗")
          }
        });
    });
  };