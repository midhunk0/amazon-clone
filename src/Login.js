import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";
import { auth } from "./firebase";
function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const signIn=e=>{
        e.preventDefault();
        // firebase login
    }

    const register=e=>{
        e.preventDefault();
        // firebase register
        auth
            .createUserWithEmailAndPassword(email.password)
            .then((auth)=>{
                // successfully creates a user with email and password
                console.log(auth);
            })
            .catch
    }
    return(
        <div className="login">
            <Link to="/">
                <img 
                    className="login_logo"
                    src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
                />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password}
                        onChange={e=>setPassword(e.target.value)}    
                    />
                    <button 
                        type="submit"
                        onClick={signIn}
                        className="login_signInButton"
                    >Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the amazon-clone conditions of use & sale. Please see our privacy notice, our cookies notice and our interest-based ads notice
                </p>
                <button 
                    onClick={register}
                    className="login_registerButton"
                >
                Create your amazon account</button>
            </div>
        </div>
    )
}
export default Login