import React, { useEffect } from 'react';
import MCQ from './MCQ';
import BlogsMain from './BlogsMain';
import LibraryMain from './LibraryMain';
import Navbar from './Navbar';
import SignUp from './SignUp';
import NotFound from './404NotFound';
import ManualSignInForm from './ManualSignInForm';
import ManualSignUpForm from './ManualSignUpForm';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReduxBookList from './ReduxBookList';
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
    navbar: {
        position: 'absolute'
    }
}));

const App = (props) => {
    const classes = useStyles();
    useEffect(() => {
        props.fetchUser();
    });
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
                {/* -------------------------------- */}
                <Route path="/BookList">
                    <ReduxBookList />
                </Route>

                {/* ----------------------- */}
                <Route path='/SignIn'>
                    <SignUp />
                </Route>
                <Route path='/loginForm'>
                    <ManualSignInForm />
                </Route>
                <Route path='/signUpNew'>
                    <ManualSignUpForm />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default connect(null, actions)(App);