import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, green, red, yellow, pink } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import CommentIcon from '@material-ui/icons/Comment';
import { useHistory, useRouteMatch } from "react-router-dom";
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    shape: {
        backgroundColor: theme.palette.primary.main,
        width: 40,
        height: 40,
    },
    shapeCircle: {
        borderRadius: '50%',
    },
    avatar: {
        backgroundColor: (data) => {
            if (data.name[0] == 'A' || data.name[0] == 'B' || data.name[0] == 'D' || data.name[0] == 'H' || data.name[0] == 'N' || data.name[0] == 'Q' || data.name[0] == 'R' || data.name[0] == 'U' || data.name[0] == 'Z') {
                return yellow[700];
            }
            if (data.name[0] == 'C' || data.name[0] == 'E' || data.name[0] == 'F' || data.name[0] == 'J' || data.name[0] == 'M' || data.name[0] == 'P' || data.name[0] == 'G' || data.name[0] == 'W' || data.name[0] == 'Y') {
                return green[700];
            }
            if (data.name[0] == 'S' || data.name[0] == 'I' || data.name[0] == 'A' || data.name[0] == 'K' || data.name[0] == 'L' || data.name[0] == 'O' || data.name[0] == 'T' || data.name[0] == 'V' || data.name[0] == 'X') {
                return blue[500]
            }
            return pink[500];
        }
    }
}));

const PostCard = ({ data, handleDelete, likesUpdate, favUpdate }) => {
    console.log(data)
    const classes = useStyles(data);
    const history = useHistory();
    const { path, url } = useRouteMatch();
    console.log('path', path);
    console.log('url', url);
    const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;
    return (
        <Card elevation={1}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        {data.name[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => {
                        handleDelete(data._id);
                    }}>
                        <DeleteOutlineIcon />
                    </IconButton>
                }
                title={data.header}
                subheader={data.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {data.body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => favUpdate(data.id, data.favourite)}
                    color={data.name == false ? "primary" : "secondary"}
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="share" onClick={() => history.push(`${path.replace('all', "")}blog/${data._id}`)}>
                    <CommentIcon />
                </IconButton>
                <IconButton
                    aria-label="share"
                    onClick={() => likesUpdate(data._id, data.likes)}
                >
                    <ThumbUpAltIcon />
                </IconButton>
                {/* <Badge color="secondary" badgeContent={data.likes} max={2000}>
                    <Typography>Likes</Typography>
                </Badge> */}
            </CardActions>
        </Card>

    );
}

export default PostCard;