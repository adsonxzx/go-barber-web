import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { signInSuccess, signInFailure } from './actions';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', { email, password });
    const { user, token } = response.data;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao efeturar login');
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
