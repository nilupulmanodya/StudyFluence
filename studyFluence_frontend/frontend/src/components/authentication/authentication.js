import { useState } from "react";
import "./authentication.css";
import StudentsView from "./studentsView";
import ProffesionalView from "./professionalsView";

function Authentication(props) {
  const client = props.client
  const [authenticationType, setAuthenticationType] = useState("std");

  const onClickProffesionalsViewBtn = () => {
    setAuthenticationType("prof");
  };
  const onClickStudentsViewBtn = () => {
    setAuthenticationType("std");
  };

  return (
    <div>
      <h1 className="h1-style">Welcome to StudyFluence</h1>

      {authenticationType === "prof" ? (
        <ProffesionalView authenticationType={authenticationType} client={client}/>
      ) : (
        <StudentsView authenticationType={authenticationType} client={client} />
      )}
      <footer className="footer-login">
        {authenticationType === "prof" ? (
          <button  onClick={onClickStudentsViewBtn} className="singInAsBtn button-login ">
            <u>Click here to Sign in as a Student</u>
          </button>
        ) : (
          <button onClick={onClickProffesionalsViewBtn} className="singInAsBtn button-login ">
            <u>Click here to Sign in as a Proffesional</u>
          </button>
        )}
      </footer>
    </div>
  );
}

export default Authentication;
