import axios from 'axios';

export function errorInterceptor() {
  axios.interceptors.response.use(null, error => {
    const {response} = error;
    if (!response) {
      return {};
    }

    if (response.status === 401) {
    }

    return response;
  });
}
