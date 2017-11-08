let expenseValidate = expense => {
  let {id, categoryID, price, content, timestamp} = expense;
  if(!id || !categoryID || !price || !content || !timestamp) {
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
    return {...state, [payload.id] : undefined};

  case 'EXPENSE_CREATE':
    expenseValidate(payload);
    let {categoryID} = payload;
    let categoryExpense = state[categoryID];
    return {...state, [categoryID]: [...categoryExpense, payload]};

  case 'EXPENSE_UPDATE':
    expenseValidate(payload);
    categoryID = payload.categoryID;
    categoryExpense = state[categoryID];
    return {...state, [categoryID]: categoryExpense.map(expense => expense.id === payload.id ? payload : expense)};

  case 'EXPENSE_DELETE':
    expenseValidate(payload);
    categoryID = payload.categoryID;
    categoryExpense = state[categoryID];
    return {...state, [categoryID]: categoryExpense.filter(expense => expense.id !== payload.id)};

  default:
    return state;
  }
};
