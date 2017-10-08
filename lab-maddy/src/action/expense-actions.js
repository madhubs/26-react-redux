import uuid from 'uuid/v4';

export const expenseCreate = expense => { //an action creator
  expense.id = uuid();
  expense.timestamp = new Date();
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = expense => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

export const cardDelete = expense => {
  return {
    type: 'EXPENSE_DELETE',
    payload: expense,
  };
};
