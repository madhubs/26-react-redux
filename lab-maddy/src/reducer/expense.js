let expenseValidate = expense => {
  let {id, categoryId, price, content, timestamp} = expense;
  if(!id || !categoryId || !price || !content || !timestamp) {
    throw new Error('VALIDATION FAILED: Expense must contain id, catId, title, ...');
  }
};

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch (type) {
  case 'CATEGORY_CREATE':
    return {...state, [payload.id] : []};
  case 'CATEGORY_DELETE':
    return {...state, [payload.id] : null};

  case 'EXPENSE_CREATE':
    expenseValidate(payload);
    let {categoryId} = payload;
    let categoryExpense = state[categoryId];
    return {...state, [categoryId]: [...categoryExpense, payload]};

  case 'EXPENSE_UPDATE':
    expenseValidate(payload);
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]: categoryExpense.map(expense => expense.id === payload.id ? payload : expense)};

  case 'EXPENSE_DELETE':
    expenseValidate(payload);
    categoryId = payload.categoryId;
    categoryExpense = state[categoryId];
    return {...state, [categoryId]: categoryExpense.filter(expense => expense.id !== payload.id)};

  default:
    return state;
  }
};
