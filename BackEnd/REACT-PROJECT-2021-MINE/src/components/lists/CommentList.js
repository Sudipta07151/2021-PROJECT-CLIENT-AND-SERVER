import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Comment from '../reusable/Comment';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '30px',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const CommentList = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <Comment />
        </List>
    );
}

export default CommentList;