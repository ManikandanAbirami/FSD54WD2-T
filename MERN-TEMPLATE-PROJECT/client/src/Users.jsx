import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Typography } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import PersonIcon from '@material-ui/icons/Person'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing(1),
        margin: theme.spacing(5),
    }),
    title: {
        padding: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }
}));

function Users() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('jwt')).token}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setUsers(data);
            } else {
                console.error(data.error);
            }
        };

        fetchUsers();
    }, []);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!localStorage.getItem('jwt')) {
            navigate('/signin'); // Redirect to sigin if not authenticated
        }
    }, [navigate]);
    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant='h6' className={classes.title}>All Users</Typography>
            <List dense>
                {users.map((item, i) => (
                    <Link to={`/user/${item._id}`} key={i}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label='go'>
                                    <ArrowForwardIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Paper>
    )
}

export default Users