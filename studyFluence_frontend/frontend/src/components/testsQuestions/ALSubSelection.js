import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ALSubSelectionTest() {
    axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

  const navigate = useNavigate();

  const [learningStyle, setLearningStyle] = useState('');
  const [learningEnv, setLearningEnv] = useState('');
  const [workload, setWorkload] = useState('');
  const [plansHigherEducation, setPlansHigherEducation] = useState('');
  const [desiredProfession, setDesiredProfession] = useState('');
  const [interests, setInterests] = useState('');
  const [strengths, setStrengths] = useState('');
  const [usefullSkills, setUsefullSkills] = useState('');
  const [subWithCareerOpt, setSubWithCareerOpt] = useState('');
  const [timeEffort, setTimeEffort] = useState('');
  const [firstlanguage, setFirstlanguage] = useState('');
  const [locationAfterSchooling, setLocationAfterSchooling] = useState('');
  const [planAfterSchooling, setPlanAfterSchooling] = useState('');


  const personalInfo = useSelector((state) => state.auth.personalInfo);
  console.log('personalInfo',personalInfo)
  console.log('personalInfo. afterLearningLocation',personalInfo.afterLearningLocation
  )
  useEffect(()=>{
    setLocationAfterSchooling(personalInfo.afterLearningLocation)
    setFirstlanguage(personalInfo.firstLanguage)
    setPlanAfterSchooling(personalInfo.afterLearningPlan)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const submitALSubSelectionTest =(e)=> {
    e.preventDefault();
    client.post(
      "/api/alsubselectiontest",
      
      {
       
        "Learning style": learningStyle,
        "Learning environment": learningEnv,
        "Workload": workload,
        "Plans for higher education": plansHigherEducation,
        "Desired profession": desiredProfession,
        "Interests": interests,
        "Strengths": strengths,
        "Useful skills": usefullSkills,
        "Subjects with the most career options": subWithCareerOpt,
        "Time and effort": timeEffort,
        "First Language":firstlanguage,
        "Where do you plan on studying / working after schooling?":locationAfterSchooling,
        "Plan after finishing schooling":planAfterSchooling,
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
    .then((response) => {
      console.log('response,,,,,,,,,,,,,,,,,,,,,,,data',response.data)
      const url = response.data
      const link = document.createElement('a');
      link.href = url;
      link.target = "_blank"
      document.body.appendChild(link);
      link.click();
    });
  
         navigate('/');
  }

  return (
    <div>
        <h2>A Level Subject and Stream Selection Test</h2>
    <form onSubmit={e => submitALSubSelectionTest(e)}>
        <div className="form-group">
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Learning style :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={learningStyle} onChange={(e) => setLearningStyle(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Analyzing and discussing theories and concepts">Analyzing and discussing theories and concepts</option>
                <option value="Hands-on experience and experiments">Hands-on experience and experiments</option>
                <option value="Visual and creative methods of learning">Visual and creative methods of learning</option>
            </select>
        </div>
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Learning environment :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={learningEnv} onChange={(e) => setLearningEnv(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Independent and self-directed environment">Independent and self-directed environment</option>
                <option value="Interactive and collaborative environment">Interactive and collaborative environment</option>
                <option value="Structured and organized environment">Structured and organized environment</option>
            </select>
        </div>
      <br />
    

        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Workload :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={workload} onChange={(e) => setWorkload(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Relaxed workload">Relaxed workload</option>
                <option value="Heavy workload">Heavy workload</option>
            </select>
        </div>

        <br />
      <div>
      <label>
      Plans for higher education :</label>
        <select className="form-control" value={plansHigherEducation} onChange={(e) => setPlansHigherEducation(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Entering the workforce immediately after graduation">Entering the workforce immediately after graduation</option>
                <option value="Pursuing a degree in a specific field">Pursuing a degree in a specific field</option>
                <option value="Taking a gap year before continuing education">Taking a gap year before continuing education</option>
                <option value="Taking a gap year or traveling before continuing education">Taking a gap year or traveling before continuing education</option>
        
        </select>
        
        </div>
        <br />
      <div>
      <label>
      Desired profession </label>
        <select className="form-control" value={desiredProfession} onChange={(e) => setDesiredProfession(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Doctor / Vet / Scientist / Nurse / Biologist">Doctor / Vet / Scientist / Nurse / Biologist</option>
                <option value="Engineer / IT Professional / Statistician">Engineer / IT Professional / Statistician</option>
                <option value="Teacher / Lawyer / Entertainer">Teacher / Lawyer / Entertainer</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Interests </label>
        <select className="form-control" value={interests} onChange={(e) => setInterests(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Helping my family members with their finances">Helping my family members with their finances</option>
            <option value="Working in a lab">Working in a lab</option>
                <option value="Working with numbers, statistics, and figures">Working with numbers, statistics, and figures</option>
                <option value="Learning about cultures, languages, humanities, and law">Learning about cultures, languages, humanities, and law</option>
                <option value="Working with numbers, statistics, and figures">Working with numbers, statistics, and figures</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Strengths :</label>
        <select className="form-control" value={strengths} onChange={(e) => setStrengths(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Analytical and logical thinking">Analytical and logical thinking</option>
                <option value="Communication and teamwork">Communication and teamwork</option>
                <option value="Creativity and innovation">Creativity and innovation</option>
                <option value="Practical and hands-on skills">Practical and hands-on skills</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Useful skills</label>
        <select className="form-control" value={usefullSkills} onChange={(e) => setUsefullSkills(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Knowledge of economics">Knowledge of economics</option>
                <option value="Knowledge of information technology">Knowledge of information technology</option>
                <option value="Knowledge of languages and communication">Knowledge of languages and communication</option>
                <option value="Knowledge of mathematics and statistics">Knowledge of mathematics and statistics</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Subjects with the most career options </label>
        <select className="form-control" value={subWithCareerOpt} onChange={(e) => setSubWithCareerOpt(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Biology and Chemistry">Biology and Chemistry</option>
                <option value="Business and Finance">Business and Finance</option>
                <option value="Engineering and Technology">Engineering and Technology</option>
                <option value="Humanities and Arts">Humanities and Arts</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Time and effort </label>
        <select className="form-control" value={timeEffort} onChange={(e) => setTimeEffort(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="I am willing to put in as much time and effort as necessary to succeed.">I am willing to put in as much time and effort as necessary to succeed.</option>
                <option value="I am willing to put in some effort, but I don't want to sacrifice my social life or hobbies.">I am willing to put in some effort, but I don't want to sacrifice my social life or hobbies.</option>
                <option value="I am willing to work hard, but I need to balance my studies with other activities.">I am willing to work hard, but I need to balance my studies with other activities.</option>
                <option value="I don't think I am willing or able to commit to advanced level studies at this time.">I don't think I am willing or able to commit to advanced level studies at this time.</option>
        </select>
        
        </div>
    </div>
    <br />
    <p>After submit you will receive the recomendation pdf file</p>

    <button type='submit' className="btn btn-primary mb-2">Submit</button>
    </form>
  
    </div>
  )
  }

  export default ALSubSelectionTest;