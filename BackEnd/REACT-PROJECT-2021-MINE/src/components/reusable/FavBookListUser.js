import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    //     maxWidth: 752,
    // },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


const InteractiveList = (props) => {
    console.log(props);
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

    return (
        <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                    <Grid container>
                        <Grid item xs={4}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </Grid>
                        <Grid item xs={8}>
                            <ListItemText
                                primary={props.book.name}
                                secondary={props.book.dateAdded}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2}>
                            <ListItemText>
                                <Typography>
                                    {props.book._user.name ? props.book._user.name : null}
                                </Typography>
                            </ListItemText>
                        </Grid>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                        {props.children ? props.children : null}
                    </Grid>
                </ListItem>
            </List>
        </div>
    );
}

export default InteractiveList;

// book: {_id: "60b6632ae55c9c243c0e4a0f", _user: "607892c67ab86c36981c30c8", isbn: "1076501567", name: "Cool Book", dateAdded: "2021-06-01T16:41:14.979Z", …}