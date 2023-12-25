import axios from 'axios';
import {store} from '../../Adapter/Redux/Store';
import {BASE_URL} from '../../Constant/api';

export function jwtInterceptor() {
  axios.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url

    const isApiUrl = request.baseURL?.startsWith(BASE_URL);

    const token = store.getState().user.token;

    if (token && isApiUrl && !request.headers.authorization) {
      request.headers.authorization = `Bearer ${token}`;
    }

    return request;
  });
}
