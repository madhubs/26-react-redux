import {combineReducers} from 'redux';
import expensesReducer from './expenses';
import categoriesReducer from './category';

export default combineReducers({
  expenses: expensesReducer,
  categories: categoriesReducer,
});
