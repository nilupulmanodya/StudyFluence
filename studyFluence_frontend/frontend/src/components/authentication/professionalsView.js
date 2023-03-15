function ProffesionalView (){

    const onClickSignUpActive = () => {
        const container = document.getElementById("container");
        container.classList.add("right-panel-active");
      };
    
      const onClickSignInActive = () => {
        const container = document.getElementById("container");
        container.classList.remove("right-panel-active");
      };


    return (
        <div>
            <h2>professionals View</h2>
    <div className="container" id="container">
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>

        <span>Use your email for registration</span>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <span>Enter your login credientials here</span>
        <input type="username" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
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
          <button className="ghost" id="signIn" onClick={onClickSignInActive}>
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello,</h1>
          <p>
            You are registering with StudentFluence as a Student. Are you
            professional ?{" "}
          </p>
          <button className="ghost" id="signUp" onClick={onClickSignUpActive}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
    

}

export default ProffesionalView