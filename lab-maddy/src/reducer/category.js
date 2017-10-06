let initialState = [];

export default (state=initialState, action) => {
  let {payload, type}= action;
  // this combines these two things into just action so we can be less explicit below

  switch(type) {
  case 'CATEGORY_CREATE':
    return [...state, payload];//spreads out any preexisting values and then we add the payload.
  case 'CATEGORY_UPDATE':
    return state.map(category => category.id === payload.id ? payload : category);
  case 'CATEGORY_DELETE':
    return state.filter(category => category.id !== payload.id);
  default:
    return state;
  }
};
