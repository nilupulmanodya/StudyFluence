import { useEffect } from "react";
import Authentication from "./authentication/authentication";
import AuthenticatedFrame from "./authenticatedFrame"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSingedInAs, setPersonalInfo } from '../store/authSlice';
import PersonalInfoForm from './home/personalInfoForm';


function Content() {

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });
  
  const dispatch = useDispatch();
  const singedInAs = useSelector((state) => state.auth.singedInAs);
  const personalInfo = useSelector((state) => state.auth.personalInfo);

  


  
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

  
      client.get("/api/personalinfolist")
      .catch((error) => {
        if (error.response) {
          // let errorData = "Internal server error please refresh and try again.."
          // if (error.response.data[0] !=="<"){
          //   errorData = error.response.data[0]
          // }
          console.log('error.response',error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          // // alert(errorData)
          // dispatch(setSingedInAs('0'))
          }
      }).then(function(res) {
        console.log(res.data)
        const personalInfo = res.data[0]
        console.log('personalInfo',personalInfo)
        if (res.data.length >= 1){
          dispatch(setPersonalInfo(personalInfo));
        }
        // const userGroup = res.data.userGroup
        // dispatch(setSingedInAs(userGroup));
          });
          

    
   // dispatch(setSingedInAs('2'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  console.log('personalInfo.length !== 0',Object.keys(personalInfo).length !== 0)

  return singedInAs === "1" ? <div>
    {Object.keys(personalInfo).length !== 0? < AuthenticatedFrame client={client} />:  <PersonalInfoForm client={client}/>}
    
             
    </div>: <div>
    
    { singedInAs === "2"? < AuthenticatedFrame client={client} /> : <  Authentication   client={client}/>}
    </div>
    ;
}

export default Content;
