import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
    }
}));

function Signin() {
    const classes = useStyles();
    const navigate = useNavigate(); // Hook for redirecting
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
    });

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined,
        }

        fetch('http://localhost:3000/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then(response => response.json())
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    localStorage.setItem('jwt', JSON.stringify(data));
                    localStorage.setItem('userId', data.userId); // Store userId
                    navigate("/");
                };
            });
    };

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.title}>Sign In</Typography>
                <TextField
                    id='email'
                    type='email'
                    label='Email'
                    className={classes.textField}
                    value={values.email}
                    onChange={handleChange('email')} margin="normal" />
                <br />
                <TextField
                    id='password'
                    type='password'
                    label='Password'
                    className={classes.textField}
                    value={values.password}
                    onChange={handleChange('password')} margin="normal" />
                <br />
                {values.error && (
                    <Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {values.error}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button color="primary" variant='contained' onClick={clickSubmit} className={classes.submit}>
                    Submit
                </Button>
            </CardActions>
        </Card>
    )
}

export default Signin