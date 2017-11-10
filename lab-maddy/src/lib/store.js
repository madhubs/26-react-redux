import {createStore, applyMiddleware} from 'redux';
import reporter from './redux-reporter';
import reducer from '../reducer/category';

export default () => createStore(reducer, applyMiddleware(reporter));
