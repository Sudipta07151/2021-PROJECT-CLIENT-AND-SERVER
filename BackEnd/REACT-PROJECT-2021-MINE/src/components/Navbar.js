import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import NoteAddRoundedIcon from '@material-ui/icons/NoteAddRounded';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { pink, purple, yellow } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import { useLocation } from 'react-router-dom';
import SignIn from './SignIn';
import Logout from './Logout'
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
        backgroundColor: '#f50057',
    },
    tabColor: {
        color: '#fce4ec',
        '&:hover': {
            color: '#ffff00',
            opacity: 1,
        }, '&:focus': {
            color: '#ffff00',
        }
    },
    avatarBack: {
        backgroundColor: '#f50057',
    },

}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f50057'
        },
        secondary: yellow
    }
})

const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [url, setUrl] = React.useState('');
    const location = useLocation();
    React.useEffect(() => {
        if (url != location.pathname) {
            if (location.pathname == '/Library') {
                setValue(0);
            }
            if (location.pathname == '/BlogsMain') {
                setValue(1);
            }
            if (location.pathname == '/MCQ') {
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
                            <Grid item xs={3} md={1} lg={1} container direction="row" justify="center" alignItems="center" style={{ backgroundColor: '#f50057' }}>
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
                                <SignIn />
                                {/* <Logout /> */}
                            </Grid>
                            <Grid item xs={1} md={1} lg={1} container direction="row" justify="center" alignItems="center" className={classes.avatarBack}>
                                <div className={classes.avatar}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
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
export default Navbar;