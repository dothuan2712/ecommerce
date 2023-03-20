import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
const Login = () =>
{
    return (
            <div style={{marginTop:'100px'}}>
            <div id="intro" className="bg-image shadow-2-strong">
                <div className="mask d-flex align-items-center h-100" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-md-8">
                                <form className="bg-white  rounded-5 shadow-5-strong p-5">
                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form1Example1">Email address</label>
                                        <input type="email" id="form1Example1" placeholder="Press your email" className="form-control" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form1Example2">Password</label>
                                        <input type="password" id="form1Example2" placeholder="Press your password" className="form-control" />
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check">
                                                
                                                <input className="form-check-input" type="checkbox" value="" id="form1Example3"/>
                                                <label className="form-check-label" for="form1Example3">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col text-center">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                    </div>
                                    <div className="text-center pt-4 text-muted">Don't have an account? <a href="#">Sign up</a> </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;