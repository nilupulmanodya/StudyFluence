import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function OLSubSelectionTest() {
    axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

  const navigate = useNavigate();

  const [learningStyle, setLearningStyle] = useState('');
  const [interestsOutsideSchool, setInterestsOutsideSchool] = useState('');
  const [subjectsInterestedFuture, setSubjectsInterestedFuture] = useState('');
  const [mostInteresting, setMostInteresting] = useState('');
  const [personalGoals, setPersonalGoals] = useState('');
  const [problemsEnjoyed, setProblemsEnjoyed] = useState('');
  const [skillsToBeDeveloped, setSkillsToBeDeveloped] = useState('');
  const [firstlanguage, setFirstlanguage] = useState('');

  const personalInfo = useSelector((state) => state.auth.personalInfo);
  console.log('personalInfo',personalInfo)
  console.log('personalInfo. afterLearningLocation',personalInfo.afterLearningLocation
  )
  useEffect(()=>{
    setFirstlanguage(personalInfo.firstLanguage)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const submitALSubSelectionTest =(e)=> {
    e.preventDefault();
    client.post(
      "/api/olsubselectiontest",
      
      {
       
        "Learning style": learningStyle,
        "Interests outside of school": interestsOutsideSchool,
        "Subjects interested in studying in the future": subjectsInterestedFuture,
        "Most interesting": mostInteresting,
        "Personal goals": personalGoals,
        "Problems enjoyed solving": problemsEnjoyed,
        "Skills to be developed": skillsToBeDeveloped,
        "First Language":firstlanguage,
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
        <h2>O Level Subject and Stream Selection Test</h2>
    <form onSubmit={e => submitALSubSelectionTest(e)}>
        <div className="form-group">
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Learning style :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={learningStyle} onChange={(e) => setLearningStyle(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Logical learning">Logical learning</option>
                <option value="Practical learning">Practical learning</option>
                <option value="Reading / writing learning">Reading / writing learning</option>
                <option value="Visual learning">Visual learning</option>
            </select>
        </div>
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Interests outside of school :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={interestsOutsideSchool} onChange={(e) => setInterestsOutsideSchool(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Arts and creative activities">Arts and creative activities</option>
                <option value="Practical activities">Practical activities</option>
                <option value="Reading books and writing stories">Reading books and writing stories</option>
                <option value="Sports and physical activities">Sports and physical activities</option>
            </select>
        </div>
      <br />
    

        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Subjects interested in studying in the future :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={subjectsInterestedFuture} onChange={(e) => setSubjectsInterestedFuture(e.target.value)} required>
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
      Most interesting :</label>
        <select className="form-control" value={mostInteresting} onChange={(e) => setMostInteresting(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Artist or Musician or Dancer">Artist or Musician or Dancer</option>
                <option value="Athlete or Coach">Athlete or Coach</option>
                <option value="IT Professional">IT Professional</option>
                <option value="Writer or journalist">Writer or journalist</option>
        
        </select>
        
        </div>
        <br />
      <div>
      <label>
      Personal goals </label>
        <select className="form-control" value={personalGoals} onChange={(e) => setPersonalGoals(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="To become a creative thinker">To become a creative thinker</option>
                <option value="To become a problem-solver">To become a problem-solver</option>
                <option value="To become a skilled athlete">To become a skilled athlete</option>
                <option value="To become an effective communicator">To become an effective communicator</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Problems enjoyed solving </label>
        <select className="form-control" value={problemsEnjoyed} onChange={(e) => setProblemsEnjoyed(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Business problems">Business problems</option>
            <option value="Creative or artistic challenges">Creative or artistic challenges</option>
                <option value="Physical or athletic challenges">Physical or athletic challenges</option>
                <option value="Technical problems">Technical problems</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Skills to be developed :</label>
        <select className="form-control" value={skillsToBeDeveloped} onChange={(e) => setSkillsToBeDeveloped(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Analytical and logical thinking skills">Analytical and logical thinking skills</option>
                <option value="Communication and teamwork skills">Communication and teamwork skills</option>
                <option value="Creative and innovative skills">Creative and innovative skills</option>
                <option value="Reading and writing skills">Reading and writing skillss</option>
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

  export default OLSubSelectionTest;