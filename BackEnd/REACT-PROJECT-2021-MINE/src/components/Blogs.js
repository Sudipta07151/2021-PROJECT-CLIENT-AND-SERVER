import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { AddBlogPost } from '../actions/index';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    field1: {
        marginTop: 10,
        marginBottom: 20,
        display: 'block',
    },
    field2: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
    formControl: {
        display: 'flex',
    }
})

const Blogs = (props) => {
    console.log(props)
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [post, setPost] = useState({})
    const [titleError, setTitleError] = useState(false);
    const [postError, setPostError] = useState(false);
    const classes = useStyles();

    const getValPostTitle = (e) => {
        setPostTitle(e.target.value);
    }
    const getValPostBody = (e) => {
        setPostBody(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPostError(false);
        setTitleError(false);
        if (postTitle === '')
            setTitleError(true)
        if (postBody === '')
            setPostError(true)
        if (postTitle && postBody) {
            setPostTitle('');
            setPostBody('');
            const post = { postTitle, postBody, state };
            props.AddBlogPost(post)
            console.log(post);
        }

    }
    const [state, setState] = React.useState({
        art: false,
        education: false,
        technical: false,
        other: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { art, education, technical, other } = state;

    // const onSubmit = (formProps) => {
    //     console.log(formProps);
    //     console.log(state)
    //     alert('SUBMMITED----view details in console');
    // }

    const renderBlogTitle = (formProps) => {
        // console.log(formProps);
        return (
            <TextField
                onChange={getValPostTitle}
                value={postTitle}
                //onChange={formProps.input.onChange}
                // {...formProps.input}
                label="Blog Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                className={classes.field1}
                multiline
                rows={2}
                error={titleError}
            />
        )
    }

    const renderBlogBody = (formProps) => {
        // console.log(formProps);
        return (
            <TextField
                onChange={getValPostBody}
                value={postBody}
                // onChange={formProps.input.onChange}
                // {...formProps.input}
                label="Post"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                className={classes.field2}
                multiline
                rows={20}
                error={postError}
            />
        )
    }

    return (
        <div>
            <Container>
                <form onSubmit={handleSubmit}>
                    {/* <form noValidate autoComplete="off" onSubmit={props.handleSubmit(onSubmit)}>
                    <Field name="blogTitle" component={renderBlogTitle} />
                    <Field name="blogBody" component={renderBlogBody} /> */}
                    {renderBlogTitle()}
                    {renderBlogBody()}
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">SELECT TAGS</FormLabel>
                        <FormGroup className={classes.formGroup}>
                            <Grid container>
                                <Grid item xs={12} md={2}>
                                    <FormControlLabel
                                        control={<Checkbox checked={art} onChange={handleChange} name="art" />}
                                        label="art"
                                    />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <FormControlLabel
                                        control={<Checkbox checked={education} onChange={handleChange} name="education" />}
                                        label="education"
                                    />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <FormControlLabel
                                        control={<Checkbox checked={technical} onChange={handleChange} name="technical" />}
                                        label="technical"
                                    />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <FormControlLabel
                                        control={<Checkbox checked={other} onChange={handleChange} name="other" />}
                                        label="other"
                                    />
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </FormControl>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        endIcon={<ArrowRightIcon />}
                    >
                        Submit Post
                    </Button>
                </form>
            </Container>
        </div >
    )
}

// export default reduxForm({
//     form: 'BLOG_POST_FORM'
// })(Blogs);

const mapStateTotprops = (state) => {
    console.log(state)
    return {
        data: 'HELLO'
    }
}


export default connect(mapStateTotprops, { AddBlogPost })(Blogs);

