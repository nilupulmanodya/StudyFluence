import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CareerSelection() {
    axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

  const navigate = useNavigate();

  const [personality, setPersonality] = useState('');
  const [desiredTasks, setDesiredTasks] = useState('');
  const [strongPoint, setStrongPoint] = useState('');
  const [hobbiesInterests, sethobbiesInterests] = useState('');
  const [longTermCareerGoals, setLongTermCareerGoals] = useState('');
  const [preferredWorkEnvironment, setPreferredWorkEnvironment] = useState('');
  const [preferredWorkHours, setPreferredWorkHours] = useState('');
  const [salaryExpectations, setSalaryExpectations] = useState('');
  const [idealWorkLifeBalance, setIdealWorkLifeBalance] = useState('');
  const [jobSecurityPreferred, setJobSecurityPreferred] = useState('');
  const [highestLevelOfEducation, setHighestLevelOfEducation] = useState('');
  const [planAfterSchoolingLocation, setPlanAfterSchoolingLocation] = useState('');


  const personalInfo = useSelector((state) => state.auth.personalInfo);
  console.log('personalInfo',personalInfo)

  useEffect(()=>{
    setHighestLevelOfEducation(personalInfo.highestLevelofEducation)
    setPlanAfterSchoolingLocation(personalInfo.afterLearningLocation)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const submitCareerSelectionTest =(e)=> {
    e.preventDefault();
    client.post(
      "/api/careerselectiontest",
      
      {
        "Personality": personality,
        "Desired tasks": desiredTasks,
        "Strong point": strongPoint,
        "Hobbies and interests": hobbiesInterests,
        "Long-term career goals": longTermCareerGoals,
        "Preferred work environment": preferredWorkEnvironment,
        "Preferred work hours": preferredWorkHours,
        "Salary expectations": salaryExpectations,
        "Ideal work-life balance": idealWorkLifeBalance,
        "Job security preferred": jobSecurityPreferred,
        "Highest Level of Education":highestLevelOfEducation,
        "Where do you plan on studying / working after schooling?":planAfterSchoolingLocation,
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
        <h2>Career path recomendation Test</h2>
    <form onSubmit={e => submitCareerSelectionTest(e)}>
        <div className="form-group">
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Personality :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={personality} onChange={(e) => setPersonality(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Analytical and logical">Analytical and logical</option>
                <option value="Creative and innovative">Creative and innovative</option>
                <option value="Outgoing and social">Outgoing and social</option>
                <option value="Practical and sensible">Practical and sensible</option>
            </select>
        </div>
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Desired tasks :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={desiredTasks} onChange={(e) => setDesiredTasks(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Creating new ideas or products">Creating new ideas or products</option>
                <option value="Engaging in creative and artistic activities">Engaging in creative and artistic activities</option>
                <option value="Helping others or making a difference">Helping others or making a difference</option>
                <option value="Solving complex problems">Solving complex problems</option>
            </select>
        </div>
      <br />
    

        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Strong point :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={strongPoint} onChange={(e) => setStrongPoint(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Creative and innovative">Creative and innovative</option>
                <option value="Good at interacting with people">Good at interacting with people</option>
                <option value="Good at managing people and organizations">Good at managing people and organizations</option>
                <option value="Good with technology">Good with technology</option>
            </select>
        </div>

        <br />
      <div>
      <label>
      Hobbies and interests :</label>
        <select className="form-control" value={hobbiesInterests} onChange={(e) => sethobbiesInterests(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Building or fixing things">Building or fixing things</option>
                <option value="Solving puzzles or gaming">Solving puzzles or gaming</option>
                <option value="Volunteering or working with others">Volunteering or working with others</option>
                <option value="Writing or creating art">Writing or creating art</option>
        
        </select>
        
        </div>
        <br />
      <div>
      <label>
      Long-term career goals</label>
        <select className="form-control" value={longTermCareerGoals} onChange={(e) => setLongTermCareerGoals(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="To eventually start and run my own business">To eventually start and run my own business</option>
            <option value="To lead a team or organization">To lead a team or organization</option>
            <option value="To make a significant impact on society or the environment">To make a significant impact on society or the environment</option>
            <option value="To work in a highly specialized field">To work in a highly specialized field</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Preferred work environment </label>
        <select className="form-control" value={preferredWorkEnvironment} onChange={(e) => setPreferredWorkEnvironment(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Desk job in an office setting">Desk job in an office setting</option>
            <option value="Flexible work arrangements">Flexible work arrangements</option>
                <option value="Outdoors or on-site work">Outdoors or on-site work</option>
                <option value="Traveling for work">Traveling for work</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Preferred work hours :</label>
        <select className="form-control" value={preferredWorkHours} onChange={(e) => setPreferredWorkHours(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Night shifts or flexible schedules">Night shifts or flexible schedules</option>
                <option value="No such preference">No such preference</option>
                <option value="Standard 9-5 schedule">Standard 9-5 schedule</option>
                <option value="Weekend work">Weekend work</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Salary expectations</label>
        <select className="form-control" value={salaryExpectations} onChange={(e) => setSalaryExpectations(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="High salary">High salary</option>
            <option value="Moderate salary">Moderate salary</option>
            <option value="Salary is not a top priority for me">Salary is not a top priority for me</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Ideal work-life balance </label>
        <select className="form-control" value={idealWorkLifeBalance} onChange={(e) => setIdealWorkLifeBalance(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Balancing work and personal life equally">Balancing work and personal life equally</option>
                <option value="I don't really have a preference">I don't really have a preference</option>
                <option value="Prioritizing personal life over work">Prioritizing personal life over work</option>
                <option value="Working long hours for high pay">Working long hours for high pay</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Job security preferred </label>
        <select className="form-control" value={jobSecurityPreferred} onChange={(e) => setJobSecurityPreferred(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="High income potential with some job security risk">High income potential with some job security risk</option>
                <option value="High job security with a stable income">High job security with a stable income</option>
                <option value="Low job security with high income potential">Low job security with high income potential</option>
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

  export default CareerSelection;