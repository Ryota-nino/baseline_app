import {apiClient} from '../index';
export const mypage = () => {
    return apiClient.get("/sanctum/csrf-cookie").then((response) => {
      return apiClient
        .get(`/api/mypage`)
        .then((response) => {
          if (response.status !== 200) {
            return false;
          }
          return response;
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 401 || error.response.status === 422 || error.response.status === 500) {
            alert('検索失敗');
          }
        });
    });
  };
export const getUserData = (id) => {
    return apiClient.get("/sanctum/csrf-cookie").then((response) => {
      return apiClient
        .get(`/api/mypage/${id}`)
        .then((response) => {
          if (response.status !== 200) {
            return false;
          }
          return response;
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 401 || error.response.status === 422 || error.response.status === 500) {
            alert('検索失敗');
          }
        });
    });
  };
  
