import {combineReducers} from 'redux';
import ReposReducer from './ReposReducer';
import UsersReducer from './UsersReducer';
export default combineReducers({
    repos:ReposReducer,
    users:UsersReducer
    
});