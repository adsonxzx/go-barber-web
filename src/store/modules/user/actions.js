export function signUpRequest(name, email, password) {
  return {
    type: '@user/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password,
    },
  };
}
