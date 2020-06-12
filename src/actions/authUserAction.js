export const AUTH_USER = 'AUTH_USER';
export const UN_AUTH_USER = 'UN_AUTH_USER';

export const authUser = (user) => ({
  type: AUTH_USER,
  user,
});

export const unAuthUser = () => ({
  type: UN_AUTH_USER,
});
