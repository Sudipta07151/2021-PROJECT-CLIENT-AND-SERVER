import React, { useState } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    buttonStyleGO: {
        fontSize: 12,
        backgroundColor: '#ff9100',
        color: '#fff',
        borderRadius: '0',
        border: '2px solid #FFF',
        marginRight: '10px',
        '&:hover': {
            backgroundColor: '#f57c00'
        }
    },
    buttonStyleCLEAR: {
        fontSize: 12,
        backgroundColor: '#4caf50',
        color: '#fff',
        borderRadius: '0',
        border: '2px solid #FFF',
        marginRight: '10px',
        '&:hover': {
            backgroundColor: '#43a047'
        }
    },
    appbar: {
        marginBottom: '20px',
        backgroundColor: '#424242'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchArea = ({ term, handleSearch, searchBook, clearSearch }) => {
    const classes = useStyles();
    console.log("term : ", term)

    // React.useEffect(()=>{
    //     console.log("term : ",term)
    // })
    return (
        <div className={classes.root}>
            <Container>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} noWrap>
                            SEARCH
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={handleSearch}
                                inputProps={{ 'aria-label': 'search' }}
                                value={term}
                            />
                        </div>
                        <Button
                            variant="outlined"
                            className={classes.buttonStyleGO}
                            onClick={searchBook}
                        >
                            GO</Button>
                        <Button
                            variant="outlined"
                            className={classes.buttonStyleCLEAR}
                            onClick={clearSearch}
                        >
                            CLEAR</Button>
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    );
}
export default SearchArea;