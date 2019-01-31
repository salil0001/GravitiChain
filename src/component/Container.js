import React, { Component } from 'react'
import SignIn from './SignIn/SignIn';
import Signup from './SignUp/Signup';
import './container.css'
import Logo from './images/Global xchange new-15.png';
export default class component extends Component {
  state = {
    togg: true,
    name1: "Sign Up",
    name3: "Dont' have a account "

  }
  toggle1 = () => {
    if (this.state.name1 === "Sign Up" && this.state.name3 === "Dont' have a account ") {
      this.setState({
        togg: !this.state.togg,
        name1: "Sign In",
        name3: "Have a account "
      })
    }
    else {
      this.setState({
        togg: !this.state.togg,
        name1: "Sign Up",
        name3: "Dont' have a account "
      })
    }
  }

  render() {
    return (
      <div className="">
        <div className="">
        <img src={Logo}  className="logodesc"/>
        </div>
        {
          this.state.togg ? <SignIn /> : <Signup />
        }

        <div className="signuptextWrapper">
         
          <span className="textSi">{
            this.state.name3
          }
          </span>

          <span className="textSiup" onClick={this.toggle1}>

            {
              this.state.name1
            }
          </span>
        </div>


      </div>
    )
  }
}





