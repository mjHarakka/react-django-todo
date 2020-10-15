import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

const Register = () => {
    return <div>Register</div>
}

const SignUp = () => {
    return <div>Sign up</div>
}

const Navbar = () => {
    return (
        <BrowserRouter>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={SignUp} />
        </BrowserRouter>
    )
}

export default Navbar