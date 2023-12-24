import axios from 'axios';
import {store} from '../../Adapter/Redux/Store';

export function jwtInterceptor() {
  axios.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url

    const isApiUrl = request.baseURL?.startsWith(
      process.env.REACT_APP_API_BASEURL as string,
    );

    const token = store.getState().user.token;

    if (token && isApiUrl && !request.headers.Authorization) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  });
}
