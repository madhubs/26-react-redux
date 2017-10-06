import {createStore} from 'redux'; //requiring in one piece of the redux package
import reducer from '../reducer';//the reducer (category) is passed into the store

export default () => createStore(reducer);

//in `lib/store.js` export a function that will return a new redux store from your category reducer
