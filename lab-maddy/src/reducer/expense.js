let initialState = {};

export default (state=initialState, action) => {
  let{type, payload} = action;
  let categoryId, categoryCards;

//   switch(type) {
//   case 'CATEGORY_CREATE': return {...state, [payload.id]:[]};
//   case 'CATEGORY_DELETE': return {...state, [payload.id]: null};
//
//   case 'EXPENSE_CREATE':
//     let categoryCards = state[payload.categoryId]
//     return {...state, [payload.categoryId]: [...categoryCards, payload]};
//
//   case 'EXPENSE_UPDATE':
//     let updateState = state; //caching the state in updatestate becuase you can't mutate state
//     updateState[payload.categoryId] = updateState[payload.categoryId].map(expense  =>{
//       if(expense.id === payload.id) expense = payload; //payload is our update, once that === validation is done, we overwrite the expense.
//       return expense;
//     });
//     return {...updateState};
//
//   case 'EXPENSE_DELETE':
//     let deleteState = state;
//     deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(expense => expense.id !== payload.id);
//     return {...deleteState};
//   default: return state;
//
//   }
// };

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload.id]: []};
  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};
  case 'EXPENSE_CREATE':
    let {categoryId} = payload;
    let categoryCards = state[categoryId];
    return {...state, [categoryId]: [...categoryCards, payload]};
  default: return state;
  }
};
