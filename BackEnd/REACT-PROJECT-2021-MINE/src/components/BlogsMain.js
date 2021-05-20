import React from 'react';



import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StarsIcon from '@material-ui/icons/Stars';
import FaceIcon from '@material-ui/icons/Face'

import Blogs from './Blogs';
import ViewAllBlogs from './ViewAllBlogs'
import AllBlogPosts from './AllBlogPosts'
import FavouritePosts from './FavouritePosts'
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from 'react-router-dom'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // drawer: {
    //     [theme.breakpoints.up('sm')]: {
    //         width: drawerWidth,
    //         flexShrink: 0,
    //         position: 'relative'
    //     },
    // },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            // width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: '#c2185b',
        position: 'absolute',
        top: '70px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up()]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    navbar: {
        position: 'absolute'
    }
}));

const BlogsMain = (props) => {
    // console.log(props)
    const { window } = props;
    //const location = useLocation();
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    //const [url, setUrl] = React.useState('/BlogsMain');
    //const history = useHistory();
    const { path, url } = useRouteMatch();
    const handleDrawerToggle = (link) => {
        // setUrl(url);
        // history.push('/BlogsMain');
        // if (link == 'BlogsMain/all') {
        //     history.push('BlogsMain/all');
        //     setUrl('BlogsMain/all');
        // }
        // else if (link == 'BlogsMain/view') {
        //     history.push('BlogsMain/view');
        //     setUrl('BlogsMain/view');
        // }
        // else if (link == 'BlogsMain/blogs') {
        //     history.push('BlogsMain/blogs');
        //     setUrl('BlogsMain/blogs');
        // }
        // else if (link == 'BlogsMain/favourites') {
        //     history.push('BlogsMain/favourites');
        //     setUrl('BlogsMain/favourites');
        // }
        // else {
        //     history.push(url);
        // }
        setMobileOpen(!mobileOpen);
    };
    const menuItems = [
        {
            key: 1,
            item: 'All Blogs',
            icon: <SupervisedUserCircleIcon />,
            //link: `BlogsMain/all`
            link: `all`
        },
        {
            key: 2,
            item: 'View All Created',
            icon: <FaceIcon />,
            //link: `BlogsMain/view`
            link: `view`
        },
        {
            key: 3,
            item: 'Create New',
            icon: <AddCircleOutlineIcon />,
            //link: `BlogsMain/blogs`
            link: `blogs`
        },
        {
            key: 4,
            item: 'Your Favourite',
            icon: <StarsIcon />,
            //link: `BlogsMain/favourites`
            link: `favourites`
        },
    ]

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {menuItems.map(({ key, item, icon, link }) => (
                    <ListItem
                        button
                        key={key}
                        component={Link}
                        to={`${url}/${link}`}
                        onClick={() => { handleDrawerToggle(link) }}
                    >
                        <ListItemIcon >{icon}</ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            BLOGS SECTION
          </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {/* {url == '/BlogsMain' ? <AllBlogPosts /> : null}
                    {url == 'BlogsMain/blogs' ? <Blogs /> : null}
                    {url == 'BlogsMain/view' ? <ViewAllBlogs /> : null}
                    {url == 'BlogsMain/all' ? <AllBlogPosts /> : null}
                    {url == 'BlogsMain/favourites' ? <FavouritePosts /> : null} */}
                    <Redirect from={`${path}`} to={`${path}/all`} />
                    <Switch>
                        <Route path={`${path}/blogs`}>
                            <Blogs />
                        </Route>
                        <Route path={`${path}/view`}>
                            <ViewAllBlogs />
                        </Route>
                        <Route path={`${path}/all`}>
                            <AllBlogPosts />
                        </Route>
                        <Route path={`${path}/favourites`}>
                            <FavouritePosts />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router >
    );
}

export default BlogsMain;


