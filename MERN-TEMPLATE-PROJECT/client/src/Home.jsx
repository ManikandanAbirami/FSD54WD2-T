import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import image from './assets/image.jpg'
import { useNavigate } from 'react-router-dom'
import theme from './theme'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 400
    }
}));

function Home() {
    const classes = useStyles();
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!localStorage.getItem('jwt')) {
            navigate('/signin'); // Redirect to sigin if not authenticated
        }
    }, [navigate]);
    return (
        <Card className={classes.card}>
            <Typography variant='h6' className={classes.title}>
                Home Page
            </Typography>
            <CardMedia className={classes.media} image={image} title="MERN STACK APPLICATION"></CardMedia>
            <CardContent>
                <Typography variant='body2' component="p">
                    Welcome to the MERN Template home page.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Home