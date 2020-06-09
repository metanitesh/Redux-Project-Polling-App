const logger = (store) => (next) => (action) => {
  console.group(action.type);
  next(action);
  console.log(store.getState());
  console.groupEnd();
};

export default logger;
