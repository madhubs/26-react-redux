import {createStore} from 'redux';
import reducer from '../reducer/category';

export default () => createStore(reducer);
//in `lib/store.js` export a function that will return a new redux store from your category reducer
