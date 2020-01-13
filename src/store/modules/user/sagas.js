import { all, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

export function* signUpRequest({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', { name, email, password });

    history.push('/');
    toast.success('Cadastro realizado com sucesso!');
  } catch (error) {
    toast.error('Error ao cadastrar usuário');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    console.log('entrou');
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@user/SIGN_UP_REQUEST', signUpRequest),
  takeLatest('persist/REHYDRATE', setToken),
]);
