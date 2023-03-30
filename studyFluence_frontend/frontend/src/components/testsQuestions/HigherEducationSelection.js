import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function HigherEducationSelection() {
    axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

  const navigate = useNavigate();

  const [mostPreffered, setMostPreffered] = useState('');
  const [skillsToDeveloped, setSkillsToDeveloped] = useState('');
  const [interestedField, setInterestedField] = useState('');
  const [academicStrengths, setAcademicStrengths] = useState('');
  const [personalValuesBenifits, setPersonalValuesBenifits] = useState('');
  const [roleInTeam, setRoleInTeam] = useState('');
  const [learningStyle, setLearningStyle] = useState('');
  const [prefferedInstitution, setPrefferedInstitution] = useState('');
  const [extraCurActivities, setExtraCurActivities] = useState('');
  const [progressTenYrs, setProgressTenYrs] = useState('');
  const [highestLevelEducation, setHighestLevelEducation] = useState('');
  const [locationResidential, setLocationResidential] = useState('');
  const [importanceTutionCost, setImportanceTutionCost] = useState('');
  const [locationAfterSchooling, setLocationAfterSchooling] = useState('');
  const [planAfterSchooling, setPlanAfterSchooling] = useState('');
  const [planFinanchial, setPlanFinanchial] = useState('');
  const [budget, setBudget] = useState('');


  const personalInfo = useSelector((state) => state.auth.personalInfo);
  console.log('personalInfo',personalInfo)
  console.log('personalInfo. afterLearningLocation',personalInfo.afterLearningLocation
  )
  useEffect(()=>{
    setLocationResidential(personalInfo.location)
    setHighestLevelEducation(personalInfo.highestLevelofEducation)
    setImportanceTutionCost(personalInfo.importanceOfTutionCost)
    setLocationAfterSchooling(personalInfo.afterLearningLocation)
    setPlanAfterSchooling(personalInfo.afterLearningPlan)
    setPlanFinanchial(personalInfo.financialPlan)
    setBudget(personalInfo.budget)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const submitALSubSelectionTest =(e)=> {
    e.preventDefault();
    client.post(
      "/api/highereducationselectiontest",
      
      {
       
        "What do you like doing the most out of the following?": mostPreffered,
        "Skills to be developed": skillsToDeveloped,
        "Interested fields of study": interestedField,
        "Academic strengths": academicStrengths,
        "Personal values and beliefs": personalValuesBenifits,
        "Role in a team": roleInTeam,
        "Learning style": learningStyle,
        "Preferred tyoe of higher education institution": prefferedInstitution,
        "Extracurricular activities": extraCurActivities,
        "Progress in 10 years": progressTenYrs,
        "Residential Location":locationResidential,
        "Highest Level of Education":highestLevelEducation,
        "Importance of Cost of Tuition":importanceTutionCost,
        "Where do you plan on studying / working after schooling?":locationAfterSchooling,
        "Plan after finishing schooling":planAfterSchooling,
        "Financing Plan":planFinanchial,
        "Budget (Annual spending)":budget,
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
        <h2>Higher Education Selection Test</h2>
    <form onSubmit={e => submitALSubSelectionTest(e)}>
        <div className="form-group">
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">What do you like doing the most out of the following? :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={mostPreffered} onChange={(e) => setMostPreffered(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Analyzing complex situations and coming up with solutions for them">Analyzing complex situations and coming up with solutions for them</option>
                <option value="Creating projects which will have an impact on society">Creating projects which will have an impact on society</option>
                <option value="Engaging in creative and artistic activities">Engaging in creative and artistic activities</option>
                <option value="Solving puzzles and quizzes">Solving puzzles and quizzes</option>
            </select>
        </div>
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Skills to be developed :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={skillsToDeveloped} onChange={(e) => setSkillsToDeveloped(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Analytical and problem-solving skills">Analytical and problem-solving skills</option>
                <option value="Communication and interpersonal skills">Communication and interpersonal skills</option>
                <option value="Leadership and management skills">Leadership and management skills</option>
                <option value="Technical skills">Technical skills</option>
            </select>
        </div>
      <br />
    

        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Interested fields of study :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={interestedField} onChange={(e) => setInterestedField(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Arts and Design">Arts and Design</option>
                <option value="Business and Management">Business and Management</option>
                <option value="Humanities and Social Sciences">Humanities and Social Sciences</option>
                <option value="Science, Technology, Engineering, and Mathematics (STEM)">Science, Technology, Engineering, and Mathematics (STEM)</option>
            </select>
        </div>

        <br />
      <div>
      <label>
      Academic strengths :</label>
        <select className="form-control" value={academicStrengths} onChange={(e) => setAcademicStrengths(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Dealing with scientific theories, numbers and figures">Dealing with scientific theories, numbers and figures</option>
                <option value="Making decisions and managing people">Making decisions and managing people</option>
                <option value="Working with languages, cultures and art">Working with languages, cultures and art</option>
                <option value="Working with technology and developing solutions">Working with technology and developing solutions</option>
        
        </select>
        
        </div>
        <br />
      <div>
      <label>
      Personal values and beliefs </label>
        <select className="form-control" value={personalValuesBenifits} onChange={(e) => setPersonalValuesBenifits(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Environmental sustainability">Environmental sustainability</option>
                <option value="Helping others and making a difference">Helping others and making a difference</option>
                <option value="Innovation and creativity">Innovation and creativity</option>
                <option value="Social justice and equality">Social justice and equality</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Role in a team </label>
        <select className="form-control" value={roleInTeam} onChange={(e) => setRoleInTeam(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Comes up with the creative ideas">Comes up with the creative ideas</option>
            <option value="Defines the objectives and methodology for the task">Defines the objectives and methodology for the task</option>
            <option value="Does most of the base work for the project">Does most of the base work for the project</option>
            <option value="Organizes the team based on everyone's personal strengths">Organizes the team based on everyone's personal strengths</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Learning style :</label>
        <select className="form-control" value={learningStyle} onChange={(e) => setLearningStyle(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Interactive and discussion-based">Interactive and discussion-based</option>
                <option value="Listening and lecture-based">Listening and lecture-based</option>
                <option value="Reading and writing-based">Reading and writing-based</option>
                <option value="Visual and practical">Visual and practical</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Preferred type of higher education institution</label>
        <select className="form-control" value={prefferedInstitution} onChange={(e) => setPrefferedInstitution(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="No preference">No preference</option>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Extracurricular activities </label>
        <select className="form-control" value={extraCurActivities} onChange={(e) => setExtraCurActivities(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Athletics and sports">Athletics and sports</option>
                <option value="Fine arts and creative pursuits">Fine arts and creative pursuits</option>
                <option value="Student government and leadership">Student government and leadership</option>
                <option value="Volunteer and community service">Volunteer and community service</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Progress in 10 years </label>
        <select className="form-control" value={progressTenYrs} onChange={(e) => setProgressTenYrs(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Connecting with a wide range of individuals">Connecting with a wide range of individuals</option>
                <option value="Developing my own business which will have a positive impact on the world">Developing my own business which will have a positive impact on the world</option>
                <option value="Working across a range of different international situations">Working across a range of different international situations</option>
                <option value="Working with the latest technological advancements">Working with the latest technological advancements</option>
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

  export default HigherEducationSelection;