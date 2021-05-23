import React, { useState } from 'react';
import SearchArea from '../components/reusable/ReduxSearchBar';
import BookList from '../components/lists/BookList';
import { connect } from 'react-redux';
import { fetchBooksList } from '../actions';


const ReduxBookList = (props) => {
    const searchBook = () => {
        console.log('called searchBook', props.term)
        props.fetchBooks(props.term)
    }
    return (
        <div>
            <SearchArea searchBook={searchBook} />
            {/* <BookList books={props.bookList} /> */}
        </div>
    );
}

const mapStateTotprops = (state) => {
    console.log(state)
    return {
        boosList: state.bookList,
        term: state.search
    }
}

export default connect(mapStateTotprops, { fetchBooks: fetchBooksList })(ReduxBookList);