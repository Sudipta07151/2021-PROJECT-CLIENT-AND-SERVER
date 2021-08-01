import React from 'react';
import Grid from '@material-ui/core/Grid';
import BookCard from '../reusable/BookCard';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import noimage from './noImage.jpg';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    list: {
        //paddingLeft: '35px'
    }
}));

const BookList = ({ books }) => {
    console.log(books[0])
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.list}>
            {
                books[0].map((bookData, index) => {
                    return (
                        <Grid item md={3} xs={12} lg={3} xl={2} sm={6} key={index}>
                            <BookCard
                                image={(bookData.volumeInfo["imageLinks"]) ? bookData.volumeInfo.imageLinks.thumbnail : noimage}
                                title={(bookData.volumeInfo["title"]) ? bookData.volumeInfo.title : 'NOT FOUND'}
                                author={(bookData.volumeInfo["authors"]) ? bookData.volumeInfo.authors[0] : 'NOT FOUND'}
                                isbn={(bookData.volumeInfo["industryIdentifiers"]) ? bookData.volumeInfo.industryIdentifiers[0].identifier : 'NOT FOUND'}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>

    )
}

export default BookList;