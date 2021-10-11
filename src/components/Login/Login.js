import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import useFirebase from './../../hooks/useFirebase'

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase()
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit="">
                <input type="email" name="" id=" " placeholder=" your email" />
                <br />
                <input type="password " name="" id=" " placeholder=" your email" />
                <br />
                <input type="submit " value="submit" id=" " />


            </form>
            <p>new to ema-john? <Link to="/register" >create account </Link>  </p>

            <div>------------------------or---------------------</div>
            <button className="btn-regular " onClick={signInUsingGoogle}> Google sign In</button>
        </div>
    );
};

export default Login;