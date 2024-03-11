import axios from 'axios';
import { BACKEND_DOMEN } from '../constants/server';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const apiInstance = axios.create({
  baseURL: BACKEND_DOMEN,
});

const onResponse = response => response;

const onResponseError = error => {
	iziToast.error({
    title: 'Error',
    message: 'Oops, something went wrong!',
    position: 'topRight',
    timeout: 2000, 
    progressBar: true,
    closeOnClick: true,
  });

	return Promise.reject(error);
}

apiInstance.interceptors.response.use(onResponse, onResponseError);
