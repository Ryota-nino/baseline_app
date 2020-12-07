import {apiClient} from '../index';
export const getMyActivity = (id) => {
  return apiClient.get("/sanctum/csrf-cookie").then((response) => {
    return apiClient
      .get(`/api/my_activity/show/1`)
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
export const registMyActivity = (content) => {
  apiClient.get("/sanctum/csrf-cookie").then((response) => {
    apiClient
      .post(`/api/my_activity`, content)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // alert("成功");
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 401 || error.response.status === 422 || error.response.status === 500) {
          alert("失敗");
        }
      });
  });
};