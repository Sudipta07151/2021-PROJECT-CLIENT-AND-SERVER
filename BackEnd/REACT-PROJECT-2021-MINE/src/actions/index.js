import axios from 'axios';
import { FETCH_USER } from './types';
// import googleBooksApi from '../apis/googleBooksApi';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
};

const fetchBooksList = (searchTerm) => {
    return async (dispatch) => {
        console.log('sT:', searchTerm)
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes',
            {
                params: { q: searchTerm }
            }
        )
        dispatch({ type: 'FETCH_BOOKS', payload: response.data.items })
    };
}

const selectBook = (isbn, title) => {
    console.log(isbn, title);
    const config = {
        'Content-Type': 'application/json'
    }
    const body = {
        isbn: isbn,
        name: title
    };
    console.log('body:', body);
    return async (dispatch) => {
        try {
            const res = await axios.post('/api/library/select', body, config);
            dispatch({
                type: 'SELECT_BOOK',
                payload: res.data
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }
}

const myBookList = userID => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/api/library/getbooks/${userID}`);
            dispatch({
                type: 'MY_BOOKS',
                payload: res.data
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }
}


// const searchBook = async () => {
//     const booksData = await axios.get(baseURL,
//         {
//             params: { q: searchTerm }
//         }
//     )
//     setBooks(booksData.data.items);
// }

// const selectBook = (isbn, title) => {
//     console.log('select book action creator:', isbn, title)
//     return {
//         type: 'SELECT_BOOK',
//         payload: { isbn: isbn, title: title }
//     }
// };



const searchTerm = (term) => {
    return {
        type: 'SEARCH_TERM',
        payload: term
    }
}

const clearSearchTerm = () => {
    return {
        type: 'CLEAR_SEARCH_TERM',
        payload: ''
    }
}

const getAllBooks = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/api/library/getAll`);
            dispatch({
                type: 'ALL_BOOKS',
                payload: res.data
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }
}


const AddBlogPost = (data) => {
    console.log('FROM ACTION CREATOR', data);
    const config = {
        'Content-Type': 'application/json'
    }
    const body = data;
    console.log('body:', body);
    return async (dispatch) => {
        try {
            const res = await axios.post('/api/blog', body, config);
            dispatch({
                type: 'ADD_POST',
                payload: res.data
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }
}


export { fetchBooksList, selectBook, searchTerm, clearSearchTerm, myBookList, getAllBooks, AddBlogPost }