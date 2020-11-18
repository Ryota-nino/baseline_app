import {apiClient} from '../index';
export const getMyData = (notLoginFunc) => {
    return apiClient.get("/sanctum/csrf-cookie").then((response) => {
      return apiClient
        .get("/api/auth/user")
        .then((response) => {
          if (response.status !== 200) {
            return false;
          }
          return response;
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 401 || error.response.status === 422 || error.response.status === 500) {
            notLoginFunc();
          }
        });
    });
  };
  
