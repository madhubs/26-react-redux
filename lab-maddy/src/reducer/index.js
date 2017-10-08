import {combineReducers} from 'redux';
import expensesReducer from './expense';
import categoryReducer from './category';

export default combineReducers({
  categories: categoryReducer,
  expenses: expensesReducer,
});
