import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const isActive = (location, path) => {
    return location.pathname === path ? { color: '#ff4081' } : { color: '#ffffff' };
};

function Menu() {
    const location = useLocation();
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('jwt') ? true : false;

    const signout = () => {
        localStorage.removeItem('jwt');
        navigate('/');
    }

    const userId = localStorage.getItem('userId');

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' color='inherit'>
                    MERN Template
                </Typography>
                <Link to="/">
                    <IconButton aria-label='Home' style={isActive(location, "/")}>
                        <HomeIcon />
                    </IconButton>
                </Link>
                <Link to="/users">
                    <Button style={isActive(location, "/users")}>
                        Users
                    </Button>
                </Link>
                {!isAuthenticated && (
                    <span>
                        <Link to="/signup">
                            <Button style={isActive(location, "/signup")}>Sign Up</Button>
                        </Link>
                        <Link to="/signin">
                            <Button style={isActive(location, "/signin")}>Sign In</Button>
                        </Link>
                    </span>
                )}
                {isAuthenticated && (
                    <span>
                        <Link to={`/user/${userId}`}>
                            <Button style={isActive(location, `/user/${userId}`)}>My Profile</Button>
                        </Link>
                        <Button color='inherit' onClick={signout}>Sign Out</Button>
                    </span>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Menu