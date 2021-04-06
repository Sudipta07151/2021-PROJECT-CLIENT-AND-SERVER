import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Questions from './Questions';
import Container from '@material-ui/core/Container';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    margin: {
        margin: theme.spacing(1),
        paddingTop: theme.spacing(8)
    },
}));

const CreateMCQ = () => {
    const classes = useStyles();
    const [numOFQuestion, setnumOFQuestion] = React.useState('');
    const handleChange = (event) => {
        setnumOFQuestion(event.target.value);

    };
    return (
        <div>
            <Container>
                <div className={classes.root}>
                    <TextField
                        id="filled-full-width"
                        label=" "
                        style={{ margin: 8 }}
                        placeholder="How are you?"
                        helperText="INSERT YOUR QUESTION HERE"
                        fullWidth={true}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        required={true}
                    />
                </div>
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">Number Of Questions</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={numOFQuestion}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="">
                            <em value={0}>None</em>
                        </MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <Questions number={numOFQuestion} />
            </Container>
        </div>
    );
}

export default CreateMCQ;