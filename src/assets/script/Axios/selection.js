import {apiClient} from '../index';

  export const registSelection = (postData) => {
    apiClient.get("/sanctum/csrf-cookie").then((response) => {
      apiClient
        .post(`/api/selection`, postData)
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

  export const editSelection = (id,postData) => {
    apiClient.get("/sanctum/csrf-cookie").then((response) => {
      apiClient
        .post(`/api/interview/edit/${id}`, postData)
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

  export const showSelection = (id) => {
    return apiClient.get("/sanctum/csrf-cookie").then((response) => {
      return apiClient
      .get(`/api/selection/show/${id}`)
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
  