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
            if (data.category == 'work') {
                return yellow[700];
            }
            if (data.category == 'money') {
                return green[700];
            }
            if (data.category == 'todos') {
                return pink[500];
            }
            return blue[500]
        }
    }
}));

const PostCard = ({ data, handleDelete, likesUpdate, favUpdate }) => {
    const classes = useStyles(data);
    const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;
    return (
        <Card elevation={1}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        {data.name.toUpperCase()}
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
                <IconButton
                    aria-label="share"
                    onClick={() => likesUpdate(data._id, data.likes)}
                >
                    <ThumbUpAltIcon />
                </IconButton>
                <Badge color="secondary" badgeContent={data.likes} max={2000}>
                    <Typography>Likes</Typography>
                </Badge>
            </CardActions>
        </Card>

    );
}

export default PostCard;