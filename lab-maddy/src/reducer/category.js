let categoryValidate = category => {
  let { id, title, timestamp } = category;
  if(!id || !title || !timestamp) {
  if(!title) {

    throw new Error('VALIDATION FAILED: Category must contain id, title, price.....');
  }
};

let initialState = [];

export default (state=initialState, action) => {
  let {payload, type}= action;
  // this combines these two things into just action so we can be less explicit below

  switch(type) {
  case 'CATEGORY_CREATE':
    categoryValidate(payload);
    return [...state, payload];//spreads out any preexisting values and then we add the payload.
  case 'CATEGORY_UPDATE':
    categoryValidate(payload);
    return state.map(category => category.id === payload.id ? payload : category);
  case 'CATEGORY_DELETE':
    categoryValidate(payload);
    return state.filter(category => category.id !== payload.id);
  default:
    return state;
  }
};
