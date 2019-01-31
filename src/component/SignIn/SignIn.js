import React, { Component } from 'react'
import './SignIn.css';
export default class extends Component {
    render() {
        return (
            
                <div className="signinparent">
                <form>
                  
                        <h1 className="headii">User Log In</h1>
                    <br />
                    <br />
                    <input type="Text" name="yourname" required autoComplete="off" />
                    <label>User Email</label> 
                        <br />
                    <input type="Password" name="yourpassword" required autoComplete="off" />
                    <label>Password</label> 
                       
              
                    <button className="btn customname" type="submit">Sign In</button>
                    
                </form>
                </div>


        )
    }
}
