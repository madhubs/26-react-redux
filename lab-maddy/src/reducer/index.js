import {combineReducers} from 'redux';
import cardReducer from './expense';
import categoryReducer from './category';

export default combineReducers({
  categories: categoryReducer,
  cards: cardReducer,
});
