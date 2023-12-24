import axios from 'axios';
import {errorInterceptor} from './error-interceptor';
import {jwtInterceptor} from './jwt-interceptor';
import {BASE_URL} from '../../Constant/api';

export default function axiosInit() {
  axios.defaults.baseURL = BASE_URL;
  errorInterceptor();
  jwtInterceptor();
}
