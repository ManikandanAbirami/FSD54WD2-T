import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Users from "./Users";
import Signup from "./Signup";
import Signin from "./Signin";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Menu from "./Menu";

const MainRouter = () => {
    return (
        <div>
            <Menu />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/users' element={<Users />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/user/:userId' element={<Profile />} />
                <Route path='/user/edit/:userId' element={<EditProfile />} />
            </Routes>
        </div>
    )
}

export default MainRouter