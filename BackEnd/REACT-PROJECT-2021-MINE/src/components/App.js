import React from 'react';
import MCQ from './MCQ';
import BlogsMain from './BlogsMain';
import LibraryMain from './LibraryMain';
import Navbar from './Navbar';
import SignUp from './SignUp';
import NotFound from './404NotFound'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navbar: {
        position: 'absolute'
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <Navbar className={classes.navbar} />
            <Switch>
                <Route exact path='/'>
                    <Redirect to="/LibraryMain" />
                    {/* <LibraryMain /> */}
                </Route>
                <Route path='/MCQ'>
                    <MCQ />
                </Route>
                {/* <Route exact path='/MCQ/:routes'>
                    <MCQ />
                </Route> */}
                <Route path="/BlogsMain">
                    <BlogsMain />
                </Route>
                {/* <Route exact path='/BlogsMain/:routes'>
                    <BlogsMain />
                </Route> */}
                {/* <Route exact path='/LibraryMain/:routes'>
                    <LibraryMain />
                </Route> */}
                <Route path='/LibraryMain'>
                    <LibraryMain />
                </Route>
                <Route path='/SignUp'>
                    <SignUp />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;