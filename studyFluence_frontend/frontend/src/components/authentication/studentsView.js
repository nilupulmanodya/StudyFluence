import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setSingedInAs } from '../../store/authSlice';

function StudentsView(props) {
  const client = props.client
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  // const singedInAs = useSelector((state) => state.auth.singedInAs);

  const onClickSignUpActive = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const onClickSignInActive = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  const submitSignUp = (e)=>{
    e.preventDefault();
      client.post(
        "/api/stdregister",
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

  return (
    <div>
      <h2>Students View</h2>

      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={e => submitSignUp(e)}>
            <h1>Create Account</h1>

            <span>Use your email for registration</span>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  required/>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={e => submitLogIn(e)}>
            <h1>Sign in</h1>
            <span>Enter your login credientials here</span>
            <input type="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  required/>
            <a href="/">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please Sign in with your personal
                info.
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={onClickSignInActive}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello,</h1>
              <p>
                You are registering with StudentFluence as a Student. Are you
                professional ?{" "}
              </p>
              <button
                className="ghost"
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

export default StudentsView;

