let categoryValidate = category => {
  let {id, title, timestamp} = category;
  if (!id || !title || !timestamp) {
    throw new Error('Validation Failed: Category must contain id, title, etc.');
  }
};

let initialState = [];

export default (state = initialState, action) => {
  let {payload, type} = action;

  switch(type) {

  case 'CATEGORY_CREATE':
    categoryValidate(payload);
    return [...state, payload];

  case 'CATEGORY_UPDATE':
    categoryValidate(payload);
    return state.map(category => category.id === payload.id ? payload : category);

  case 'CATEGORY_DESTROY':
    return state.filter(category => category.id !== payload.id);

  default:
    return state;
  }
};
