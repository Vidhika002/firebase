import React, { Component } from 'react'
import firebase from './firebase'

class App extends React.Component {
  handleChange =(e) =>{
    const {name,value} =e.target
    this.setState({
      [name]: value
    })
  }
  
  configureCaptcha = () =>{
    window.recaptchaVerifier =new firebase.auth.RecaptchaVerifier('sign-in-button',{
      'size' : 'invisible',
      'callback' : (response) =>{
      this.onSignInSubmit();
      console.log("Recaptca verfied")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) =>{
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {

    // User signed in successfully.
    const user = result.user;
    console.log(JSON.stringify(user))
    alert("User is verified")
    // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      
      // ...
    });
  }
  render() {
    return (
      <div >
        <div id='nav'>
        <img src="D:\Firebase\firebase\public\Group 1.png" alt="logo" className='image'></img>
        <h1>BINARY</h1>
        <h4>HOME</h4>
        <h4>CONTACT US</h4>
        </div>
        
        <div id='login'>
        <h2>LOGIN</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        </div>
         

        
      </div>
    )
  }
}
var searchPic
function LoadImages() {
searchPic = new Image(100,100);
searchPic.src = "firebase\public\Group 1.png";
// This is correct and the path is correct
}
export default App