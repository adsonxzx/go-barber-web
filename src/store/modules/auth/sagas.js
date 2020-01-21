import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { signInSuccess, authFailure, signUpSuccess } from './actions';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', { email, password });
    const { user, token } = response.data;

    if (!user.provider) {
      toast.error('Acesso apenas para prestador de serviço');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (e) {
    const { error } = e.response.data;
    toast.error(error);
    yield put(authFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password, provider: true });
    history.push('/');
    toast.success('Cadastro realizado com sucesso!');
    yield put(signUpSuccess());
  } catch (e) {
    const { error } = e.response.data;
    toast.error(error);
    yield put(authFailure());
  }
}

export function setToken({ payload }) {
  console.tron.log('O token esta na requisiçao a partir daqui');
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
