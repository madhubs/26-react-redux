import uuid from 'uuid/v4';

export const cardCreate = cared => {
  card.id = uuid()
  card.timestamp = new Date()
  return {
    type: 'CARD_CREATE',
    payload: card
  }
}

export const cardUpdate = cared => {
  return {
    type: 'CARD_UPDATE',
    payload: card
}

export const cardDelete = cared => {
  return {
    type: 'CARD_DELETE',
    payload: card
}
//AFTER WRITING this code we need to update our reducers 
