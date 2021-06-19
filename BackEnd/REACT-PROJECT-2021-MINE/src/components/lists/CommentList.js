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

const CommentList = (props) => {
    console.log('from comment list:', props.commentList)
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {
                props.commentList.map(data => {
                    return (
                        <Comment data={data} />
                    )
                })
            }
        </List>
    );
}

export default CommentList;