import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { connect } from 'react-redux';
import { selectBook } from '../../actions'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '550px',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    media: {
        height: 0,
        paddingTop: "300px"// 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    }
}));


const BookCard = (props) => {
    const classes = useStyles();
    const { image, title, author, isbn } = props;

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {title[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={author}
            />
            <CardMedia
                className={classes.media}
                image={image}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`ISBN: ${isbn}`}
                </Typography>
            </CardContent>
            <IconButton aria-label="add to favorites"
                onClick={() => props.selectBook(isbn, title)}
            >
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedBook: state.selectedBook
    }
}

export default connect(mapStateToProps, { selectBook })(BookCard);