import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
        draft.loading = false;
      });
    case '@user/UPDATE_PROFILE_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.profile;
      });
    case '@user/UPDATE_PROFILE_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
