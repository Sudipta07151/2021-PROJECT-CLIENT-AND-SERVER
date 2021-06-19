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
import CommentList from './lists/CommentList';
import AddComment from './AddComment';
import { useParams } from 'react-router-dom';
import { fetchSingleBlogs } from '../actions/index'
import Chip from '@material-ui/core/Chip';

import { connect } from 'react-redux';
// import { selectBook } from '../../actions'



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '20vh',
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
    },
    chips: {
        backgroundColor: '#f73378',
        paddingRight: '20px',
        marginRight: '10px',
        color: '#EEE',
        fontSize: '12px'
    }
}));


const IndividualBlog = (props) => {
    const classes = useStyles();
    const { id } = useParams();
    console.log(id);
    console.log(props)
    if (props.blogData) {
        var created_date = new Date(props.blogData.date);
        var date = created_date.toDateString();
        var time = created_date.toTimeString();
    }
    React.useEffect(() => {
        props.fetchSingleBlogs(id);
    }, [props.fetchSingleBlogs])


    const render = () => {
        if (props.blogData) {
            return (
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {/* {title[0]} */}
                                {props.blogData.name[0]}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        // title={title}
                        // {author}
                        title={props.blogData.header}
                        subheader={props.blogData.name}
                    />
                    {/* <CardMedia
                        className={classes.media}
                    // image={image}
                    /> */}
                    <CardContent>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            {props.blogData.body}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p" style={{ marginTop: '20px' }}>
                            {props.blogData ? `Date: ${date} Time :${time}` : null}
                        </Typography>
                        <Typography variant="overline" color="textSecondary" component="p" style={{ marginTop: '20px' }}>
                            {props.blogData.tags.art ? <Chip className={classes.chips} size="small" label='art' /> : ''}
                            {props.blogData.tags.education ? <Chip className={classes.chips} size="small" label='education' /> : ''}
                            {props.blogData.tags.technical ? <Chip className={classes.chips} size="small" label='technical' /> : ''}
                            {props.blogData.tags.other ? <Chip className={classes.chips} size="small" label='other' /> : ''}
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites"
                    // onClick={
                    //      () => props.selectBook(isbn, title)
                    // }
                    >
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </Card>
            )
        }

    }
    const { image, title, author, isbn } = props;

    return (
        <div>
            {render()}
            <AddComment postID={id} />
            {props.blogData ? <CommentList commentList={props.blogData.comments} /> : null}
            {/* <CommentList commentList={props.blogData.comments} /> */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        blogData: state.singleBlog
    }
}

export default connect(mapStateToProps, { fetchSingleBlogs })(IndividualBlog);