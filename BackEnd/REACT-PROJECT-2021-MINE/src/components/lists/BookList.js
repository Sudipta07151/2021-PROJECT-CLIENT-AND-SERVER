import React from 'react';
import Grid from '@material-ui/core/Grid';
import BookCard from '../reusable/BookCard';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import noimage from './noImage.jpg';

const useStyles = makeStyles((theme) => ({
    list: {
        //paddingLeft: '35px'
    }
}));

const BookList = ({ books }) => {
    const classes = useStyles();
    React.useEffect(() => {
        books.map((bookData) => {
            if (bookData.volumeInfo["imageLinks"]) console.log("image : ", bookData.volumeInfo.imageLinks.thumbnail)
            else console.log("image unavailable")
            // console.log(bookData);
            // console.log(bookData.volumeInfo.title);
            // console.log(bookData.volumeInfo.authors[0]);
            // console.log(bookData.volumeInfo.industryIdentifiers[0].identifier);
        })
    })
    return (
        <Grid container spacing={3} className={classes.list}>
            {
                books.map((bookData, index) => {
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