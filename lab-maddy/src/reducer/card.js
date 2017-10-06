let initialState = {};

export default (state=initialState, action) => {
  let{type, payload} = action;
  let categoryId, categoryCards;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload.id]:[]};
  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};

  case 'CARD_CREATE':
    let categoryCards = state[payload.categoryId]
    return {...state, [payload.categoryId]: [...categoryCards, payload]};

  case 'CARD_UPDATE':
    let updateState = state; //caching the state in updatestate becuase you can't mutate state
    updateState[payload.categoryId] = updateState[payload.categoryId].map(card  =>{
      if(card.id === payload.id) card = payload; //payload is our update, once that === validation is done, we overwrite the card.
      return card;
    });
    return {...updateState};

  case 'CARD_DELETE':
    let deleteState = state;
    deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(card => card.id !== payload.id);
    return {...deleteState};
  default: return state;

  }
};
