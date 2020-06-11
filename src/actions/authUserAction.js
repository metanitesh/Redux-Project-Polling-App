export const AUTH_USER = 'AUTH_USER';

export const authUser = (user) => ({
  type: AUTH_USER,
  user,
});
