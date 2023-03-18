import { useEffect } from "react";
import Authentication from "./authentication/authentication";
import AuthenticatedFrame from "./authenticatedFrame"
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
        // let errorData = "Internal server error please refresh and try again.."
        // if (error.response.data[0] !=="<"){
        //   errorData = error.response.data[0]
        // }
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
    
   // dispatch(setSingedInAs('2'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return singedInAs === "1" | singedInAs === "2" ? <div>
             < AuthenticatedFrame client={client} />
    </div>: <  Authentication   client={client}/>;
}

export default Content;
