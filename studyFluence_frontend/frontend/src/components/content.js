import { useEffect } from "react";
import Authentication from "./authentication/authentication";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSingedInAs } from '../store/authSlice';


function Content() {

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });
  
  const dispatch = useDispatch();
  const singedInAs = useSelector((state) => state.auth.singedInAs);

  


  
  // Authenticaion types
  // 0:- not logged into system
  // 1:- loged in as a student
  // 2:- loged in as a proffesional

  useEffect(() => {
    // check authentation from the backend for initial loading and setstate


    client.get("/api/user")
    .catch((error) => {
      if (error.response) {
        let errorData = "Internal server error please refresh and try again.."
        if (error.response.data[0] !=="<"){
          errorData = error.response.data[0]
        }
        console.log('error.response',error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        // alert(errorData)
        dispatch(setSingedInAs('0'))
        }
    })    
    .then(function(res) {
      console.log(res.data)
      const userGroup = res.data.userGroup
      dispatch(setSingedInAs(userGroup));
        });

    console.log('singedInAs',singedInAs)
    

  }, []);

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout",
      {withCredentials: true}
    ).then(function(res) {
      dispatch(setSingedInAs('0'));
    });
  }

  return singedInAs === "1" | singedInAs === "2" ? <dev>
            <form onSubmit={e => submitLogout(e)}>
                  <button type="submit" variant="light">Log out</button>
             </form>
                <p>hehehe signed in....
    wanna logout ?
     </p>
    </dev>: <Authentication client={client}/>;
}

export default Content;
