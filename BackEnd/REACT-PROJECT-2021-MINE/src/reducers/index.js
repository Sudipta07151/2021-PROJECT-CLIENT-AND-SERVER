import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import bookListReducer from './bookListReducer';
import searchReducer from './searchReducer';
import selectBookReducer from './selectBookReducer';
import allFavBooksReducer from './allFavBooksReducer';
import allBooksReducer from './allBooksReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    bookList: bookListReducer,
    search: searchReducer,
    selectedBook: selectBookReducer,
    favBooks: allFavBooksReducer,
    allBooks: allBooksReducer
});