import axios from 'axios';
import { FETCH_USER } from './types';
import googleBooksApi from '../apis/googleBooksApi';


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


// const searchBook = async () => {
//     const booksData = await axios.get(baseURL,
//         {
//             params: { q: searchTerm }
//         }
//     )
//     setBooks(booksData.data.items);
// }



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


export { fetchBooksList, searchTerm, clearSearchTerm }