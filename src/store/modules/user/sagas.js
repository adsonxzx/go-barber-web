import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload;

    const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

    const { data } = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(data));

    toast.success('Perfil atualizado com sucesso');
  } catch (e) {
    const { error } = e.response.data;
    toast.error(error);
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
