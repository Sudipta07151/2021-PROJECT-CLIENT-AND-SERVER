import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import bookListReducer from './bookListReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    bookList: bookListReducer,
    search: searchReducer
});