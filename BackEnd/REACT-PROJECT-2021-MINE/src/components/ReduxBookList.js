import React, { useState } from 'react';
import SearchArea from '../components/reusable/ReduxSearchBar';
import BookList from '../components/lists/BookList';
import { connect } from 'react-redux';
import { fetchBooksList } from '../actions';


const ReduxBookList = (props) => {
    return (
        <div>
            <SearchArea searchFunc={props.fetchBooks} />
            {props.bookList.length > 0 ? <BookList books={props.bookList} /> : null}
        </div>
    );
}

const mapStateTotprops = (state) => {
    console.log(state)
    return {
        bookList: state.bookList,
        term: state.search
    }
}

export default connect(mapStateTotprops, { fetchBooks: fetchBooksList })(ReduxBookList);