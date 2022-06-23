import { combineReducers } from 'redux';
import TodoReducer from '../todo/todoReducer';

export default combineReducers({
    todo: TodoReducer
});