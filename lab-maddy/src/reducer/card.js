let initialState = {};

export default (state=initialState, action) => {
  let{type, payload} = action;
  let categoryId, categoryCards;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload.id]:[]};
  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};
  case 'CATEGORY_CREATE':
    categoryId = payload.categoryId;
    categoryCards = state[categoryId];
    return {...state, [categoryId]: [...categoryCards, payload]};
  case 'CARD_UPDATE':
    let updateState = state; //caching the state in updatestate becuase you can't mutate state
    updateState[categoryId] = updateState[categoryId].map(card  =>{
      if(card.id === payload.id) card = payload; //payload is our update, once that === validation is done, we overwrite the card.
      return card;
    });
    return {...updateState};

  case 'CARD_DELETE':
    return;
  default: return state;

  }
};
