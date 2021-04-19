import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import NoteAddRoundedIcon from '@material-ui/icons/NoteAddRounded';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box';
import { useLocation } from 'react-router-dom';
import SignIn from './SignIn';
import Logout from './Logout';
import noImage from '../assets/images.png';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    navbar: {
        backgroundColor: '#212121',
    },
    tabColor: {
        color: '#FFF',
        '&:hover': {
            color: '#fbc02d',
            opacity: 1,
        }, '&:focus': {
            color: '#fbc02d',
        }
    },
    avatarBack: {
        backgroundColor: '#212121',
    },

}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6200ea'
        },
        secondary: {
            main: '#fbc02d'
        }
    }
})

const Navbar = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [url, setUrl] = React.useState('');
    const location = useLocation();
    React.useEffect(() => {
        if (url != location.pathname) {
            if (location.pathname == '/Library' || /^\/Library\//.test(location.pathname)) {
                setValue(0);
            }
            if (location.pathname == '/BlogsMain/all' || /^\/BlogsMain\//.test(location.pathname)) {
                setValue(1);
            }
            if (location.pathname == '/MCQ' || /^\/MCQ\//.test(location.pathname)) {
                setValue(2);
            }
            setUrl(location.pathname);
        }
    });
    const matches = useMediaQuery('(max-width:600px)');
    const labels = [
        {
            key: '1',
            icon: <LibraryBooksRoundedIcon />,
            label: 'LIBRARY',
            link: '/LibraryMain'
        },
        {
            key: '2',
            icon: <LibraryBooksRoundedIcon />,
            label: 'BLOGS',
            link: '/BlogsMain'
        },
        {
            key: '3',
            icon: <NoteAddRoundedIcon />,
            label: 'MCQ',
            link: '/MCQ'
        }
    ]
    const returnTab = labels.map(({ icon, label, key, link }) => {
        return (
            <Tab
                icon={icon}
                label={label}
                key={key}
                component={Link}
                to={link}
                className={classes.tabColor}
            />
        );
    });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(props);
    return (
        <div>
            <Box boxShadow={1}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Paper>
                        <Grid container>
                            <Grid item xs={8} md={10} lg={10}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="fullWidth"
                                    indicatorColor="secondary"
                                    textColor="secondary"
                                    aria-label="icon label tabs example"
                                    className={classes.navbar}
                                >
                                    {returnTab}
                                </Tabs>
                            </Grid>
                            <Grid item xs={3} md={1} lg={1} container direction="row" justify="center" alignItems="center" style={{ backgroundColor: '#212121' }}>
                                {/* <ButtonGroup variant="text"
                                    color="primary"
                                    aria-label="text primary button group"
                                    fullWidth={true}
                                    className={classes.loginSignupBtn}
                                >
                                    <Button
                                        component={Link}
                                        to='/Login'
                                    >
                                        Login</Button>
                                    <Button
                                        component={Link}
                                        to='/SignUp'
                                    >
                                        SignUp</Button>
                                </ButtonGroup> */}
                                {props.auth == false ? <SignIn /> : <Logout />}
                                {/* <SignIn /> */}
                                {/* <Logout /> */}
                            </Grid>
                            <Grid item xs={1} md={1} lg={1} container direction="row" justify="center" alignItems="center" className={classes.avatarBack}>
                                <div className={classes.avatar}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        //src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                        src={props.auth != false && props.auth != null ? props.auth.pictureURL : noImage}
                                        className={matches ? classes.small : classes.large}
                                        onClick={(e) => {
                                            console.log(e);
                                        }}
                                    />

                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </ThemeProvider>
            </Box>
        </div >
    );
}
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Navbar);