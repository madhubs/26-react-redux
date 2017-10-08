let initialState = {};

export default (state=initialState, action) => {
  let{type, payload} = action;
  // let categoryId, categoryCards;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload.id]: []};
  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};
  case 'EXPENSE_CREATE':
    let {categoryId} = payload;
    let categoryExpenses = state[categoryId];
    return {...state, [categoryId]: [...categoryExpenses, payload]};
  default: return state;
  }
};
