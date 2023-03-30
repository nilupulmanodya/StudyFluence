import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function VocationalTrainingSelectionTest() {
    axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

  const navigate = useNavigate();

  const [mostInterestedField, setMostInterestedField] = useState('');
  const [currentKnowledge, setCurrentKnowledge] = useState('');
  const [durationOfProgramme, setDurationOfProgramme] = useState('');
  const [currentSkills, setCurrentSkills] = useState('');
  const [mostInterestedWork, setMostInterestedWork] = useState('');
  const [preferredSkillsToLearn, setPreferredSkillsToLearn] = useState('');
  const [workRelatedChallenges, setWorkRelatedChallenges] = useState('');
  const [personality, setPersonality] = useState('');
  const [typeTrainingEducation, setTypeTrainingEducation] = useState('');
  const [workStyle, setWorkStyle] = useState('');
  const [highestLevelEducation, setHighestLevelEducation] = useState('');
  const [locationAfterSchooling, setLocationAfterSchooling] = useState('');
  const [financialPlan, setFinancialPlan] = useState('');
  const [budget, setBudget] = useState('');
  const [residentialLocation, setResidentialLocation] = useState('');
  const [impportanceTution, setImpportanceTution] = useState('');
  const [planAfterSchooling, setPlanAfterSchooling] = useState('');


  const personalInfo = useSelector((state) => state.auth.personalInfo);
  console.log('personalInfo',personalInfo)
  console.log('personalInfo. afterLearningLocation',personalInfo.afterLearningLocation
  )
  useEffect(()=>{
    setLocationAfterSchooling(personalInfo.afterLearningLocation)
    setFinancialPlan(personalInfo.financialPlan)
    setBudget(personalInfo.budget)
    setHighestLevelEducation(personalInfo.highestLevelofEducation)
    setResidentialLocation(personalInfo.location)
    setImpportanceTution(personalInfo.importanceOfTutionCost)
    setPlanAfterSchooling(personalInfo.afterLearningPlan)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const submitVocationalTrainingSelectionTest =(e)=> {
    e.preventDefault();
    client.post(
      "/api/vocationalselectiontest",
      
      {
       
        "Most interested field": mostInterestedField,
        "Current knowledge about the chosen field's job market": currentKnowledge,
        "Duration of programme": durationOfProgramme,
        "Current skills": currentSkills,
        "Most interested work": mostInterestedWork,
        "Preferred skills to learn": preferredSkillsToLearn,
        "Work-related challenges expected": workRelatedChallenges,
        "Personality": personality,
        "Type of training or education": typeTrainingEducation,
        "Work style": workStyle,
        "Residential Location":residentialLocation,
        "Highest Level of Education":highestLevelEducation,
        "Importance of Cost of Tuition":impportanceTution,
        "Where do you plan on studying / working after schooling?":locationAfterSchooling,
        "Plan after finishing schooling":planAfterSchooling,
        "Financing Plan":financialPlan,
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
        <h2>Vocational Training Selection Test</h2>
    <form onSubmit={e => submitVocationalTrainingSelectionTest(e)}>
        <div className="form-group">
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Most interested field :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={mostInterestedField} onChange={(e) => setMostInterestedField(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Construction / Manufacturing">Construction / Manufacturing</option>
                <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                <option value="Information Technology">Information Technology</option>
            </select>
        </div>
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Current knowledge about the chosen field's job market :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={currentKnowledge} onChange={(e) => setCurrentKnowledge(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="A little">A little</option>
                <option value="A lot">A lot</option>
                <option value="Nothing at all">Nothing at all</option>
                <option value="Some">Some</option>
            </select>
        </div>
      <br />
    

        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Duration of programme :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={durationOfProgramme} onChange={(e) => setDurationOfProgramme(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Long-term (12+ months)">Long-term (12+ months)</option>
                <option value="Medium-term (6-12 months)">Medium-term (6-12 months)</option>
                <option value="Short-term (less than 6 months)">Short-term (less than 6 months)</option>
            </select>
        </div>

        <br />
      <div>
      <label>
      Current skills :</label>
        <select className="form-control" value={currentSkills} onChange={(e) => setCurrentSkills(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Analytical skills">Analytical skills</option>
                <option value="Communication skills">Communication skills</option>
                <option value="Manual skills">Manual skills</option>
                <option value="Technical skills">Technical skills</option>
        
        </select>
        
        </div>
        <br />
      <div>
      <label>
      Most interested work </label>
        <select className="form-control" value={mostInterestedWork} onChange={(e) => setMostInterestedWork(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Working with numbers">Working with numbers</option>
                <option value="Working with people">Working with people</option>
                <option value="Working with technology">Working with technology</option>
                <option value="Working with your hands">Working with your hands</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Preferred skills to learn </label>
        <select className="form-control" value={preferredSkillsToLearn} onChange={(e) => setPreferredSkillsToLearn(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Creative skills">Creative skills</option>
            <option value="Interpersonal skills">Interpersonal skills</option>
                <option value="Management skills">Management skills</option>
                <option value="Technical skills">Technical skills</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Work-related challenges expected :</label>
        <select className="form-control" value={workRelatedChallenges} onChange={(e) => setWorkRelatedChallenges(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Creative challenges">Creative challenges</option>
                <option value="Intellectual challenges">Intellectual challenges</option>
                <option value="Physical challenges">Physical challenges</option>
                <option value="Team-based challenges">Team-based challenges</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Personality</label>
        <select className="form-control" value={personality} onChange={(e) => setPersonality(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Adventurous">Adventurous</option>
                <option value="Creative">Creative</option>
                <option value="Practical">Practical</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Type of training or education </label>
        <select className="form-control" value={typeTrainingEducation} onChange={(e) => setTypeTrainingEducation(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="A program that emphasizes creativity and design">A program that emphasizes creativity and design</option>
                <option value="A program that emphasizes data analysis and critical thinking">A program that emphasizes data analysis and critical thinking</option>
                <option value="A program that provides hands-on training and experience">A program that provides hands-on training and experience</option>
                <option value="A program that provides technical skills and knowledge">A program that provides technical skills and knowledge</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Work style </label>
        <select className="form-control" value={workStyle} onChange={(e) => setWorkStyle(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Prefer to work independently and solve problems on my own">Prefer to work independently and solve problems on my own</option>
                <option value="Prefer to work with others and collaborate on projects">Prefer to work with others and collaborate on projects</option>
                <option value="Working with my hands and creating tangible objects">Working with my hands and creating tangible objects</option>
                <option value="Working with numbers and analyzing data">Working with numbers and analyzing data</option>
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

  export default VocationalTrainingSelectionTest;