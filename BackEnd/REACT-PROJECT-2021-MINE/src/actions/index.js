import axios from 'axios';
import { FETCH_USER } from './types';
import googleBooksApi from '../apis/googleBooksApi';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
};

const fetchBooksList = (searchTerm) => {
    return async (dispatch) => {
        const response = await googleBooksApi.get('/photos', {
            params: { q: searchTerm }
        })

        dispatch({ type: 'FETCH_BOOKS', payload: response.data.slice(1, 100) })
    };
}

export { fetchBooksList }