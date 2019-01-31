import React, { Component } from 'react';
import './signup.css';

export default class Signup extends Component {
    state ={
        email:"",
        password:"",
        pattern:"[A-Za-z]",
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render()
    {
        let{
            email,
            password
        }=this.state;
        
        const isEnabled =
              email.length>0 &&
            password.length>6 ;

        
        return (

            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 signUpWrapper signupparent">
                <div className="socialIconSection">
                    <span className="fa fa-twitter"></span>
                    <span className="fa fa-facebook"></span>
                    <span className="fa fa-google-plus"></span>
                    <span className="fa fa-youtube"></span>
                    <span className="fa fa-linkedin"></span>
                </div>

                <form>

                    <h1 className="headii">User Sign Up</h1>
                    <br />
                    <br />
                    

                    <input type="email" id="email"  required autoComplete="off" value={this.state.email} onChange={this.handleChange} />
                    <label>User Email</label>
                    <br />
                    
                    <input type="Password" id="password"   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required autoComplete="off" value={this.state.password}  onChange={this.handleChange} />
                    <label>Password</label>
                    <br />
                    

                    <button className="btn customname" disabled={!isEnabled} type="submit">Register</button>

                </form>
            </div>




        )
    }
}
