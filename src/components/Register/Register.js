import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <h2>Register: create Account</h2>
            <form onSubmit="">
                <input type="email" name="" id=" "
                    placeholder="your email" />
                <br />
                <input type="password" name="" id=" "
                    placeholder="your password" />
                <br />
                <input type="password" name="" id=" "
                    placeholder="re -enter your password" />
                <br />
                <input type="submit" value="submit" />

            </form>
            <p>
                already have an account? <Link to="/login"> Login</Link>
            </p>
            <div>===========or---------- </div>
            <button className="btn-regular"> Google sign in</button>
        </div>
    );
};

export default Register;