import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setSingedInAs } from '../../store/authSlice';

function ProffesionalView(props) {
  const client = props.client
  const dispatch = useDispatch();


  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onClickSignUpActive = () => {
    const container = document.getElementById("container-login");
    container.classList.add("right-panel-active");
  };




  const submitSignUp = (e)=>{
    e.preventDefault();
    client.post(
      "/api/profregister",
      {
        email: email,
        username: username,
        password: password
      }
    )
    .catch((error) => {
      if (error.response) {
        let errorData = "Internal server error please refresh and try again.."
        if (error.response.data[0] !=="<"){
          errorData = error.response.data[0]
        }
        console.log('error.response',error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        alert(errorData)
        }
    })      
    .then(function(res) {
    client.post(
      "/api/login",
      {
        username: username,
        password: password
      }
    ).then(function(res) {
      const userGroup = res.data.userGroup
      dispatch(setSingedInAs(userGroup));
        });})
  }

  
  const submitLogIn =(e)=> {
    e.preventDefault();
    client.post(
      "/api/login",
      {
        username: username,
        password: password
      }
    )
    .catch((error) => {
      if (error.response) {
        let errorData = "Internal server error please refresh and try again.."
        if (error.response.data[0] !=="<"){
          errorData = error.response.data[0]
        }
        console.log('error.response',error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        alert(errorData)
        }
    })    
    .then(function(res) {
      console.log(res.data)
      const userGroup = res.data.userGroup
      dispatch(setSingedInAs(userGroup));
        });
  }


  const onClickSignInActive = () => {
    const container = document.getElementById("container-login");
    container.classList.remove("right-panel-active");
  };

  return (
    <div>
      <h2 className="h2-style">Professionals View</h2>
      <div className="container-login" id="container-login">
        <div className="form-container sign-up-container">
          <form className="form-login" onSubmit={e => submitSignUp(e)}>
            <h1 className="h1-style">Create Account</h1>

            <span  className="span-login">Use your email for registration</span>
            <input className="input-login" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
            <input className="input-login" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input className="input-login" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  required/>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form  className="form-login" onSubmit={e => submitLogIn(e)}>
            <h1 className="h1-style">Sign in</h1>
            <span  className="span-login">Enter your login credientials here</span>
            <input className="input-login" type="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required  />
            <input className="input-login" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  required />
            <a className="a-login" href="/">Forgot your password?</a>
            <button className="button-login">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1-style">Welcome Back!</h1>
              <p className="p-login">
                To keep connected with us please Sign in with your personal
                info.
              </p>
              <button
                className="ghost button-login"
                id="signIn"
                onClick={onClickSignInActive}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1-style">Hello,</h1>
              <p className="p-login">
                You are registering with StudentFluence as a Student. Are you
                professional ?{" "}
              </p>
              <button
                className="ghost button-login"
                id="signUp"
                onClick={onClickSignUpActive}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProffesionalView;
