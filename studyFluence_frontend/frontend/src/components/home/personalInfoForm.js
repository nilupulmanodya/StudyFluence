import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPersonalInfo } from '../../store/authSlice';

function PersonalInfoForm(props) {
  const client = props.client

  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [firstLanguage, setFirstLanguage] = useState('');
  const [highestLevelofEducation, setHighestLevelofEducation] = useState('');
  const [importanceOfTutionCost, setImportanceOfTutionCost] = useState('');
  const [afterLearningLocation, setAfterLearningLocation] = useState('');
  const [afterLearningPlan, setAfterLearningPlan] = useState('');
  const [financialPlan, setFinancialPlan] = useState('');
  const [budget, setBudget] = useState('');

  const dispatch = useDispatch();



  const submitPersonalInfo =(e)=> {
    e.preventDefault();
    client.post(
      "/api/personalinfolist",
      {
        fullName: fullName,
        age: age,
        location: location,
        firstLanguage: firstLanguage,
        highestLevelofEducation: highestLevelofEducation,
        importanceOfTutionCost: importanceOfTutionCost,
        afterLearningLocation: afterLearningLocation,
        afterLearningPlan: afterLearningPlan,
        financialPlan: financialPlan,
        budget: budget,
        student:1
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
    .then(function(res) {
      console.log(res.data)
      const personalInfo = res.data
      console.log('personalInfo',personalInfo)
      if (Object.keys(personalInfo).length !== 0){
        dispatch(setPersonalInfo(personalInfo));
      }
        
        });
  }

  return (
    <div>
        <h2>Please fill your personal information to proceed...</h2>
    <form onSubmit={e => submitPersonalInfo(e)}>
        <div className="form-group">

        <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Full Name:</label>
    <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} id="exampleFormControlInput1" placeholder="Type your Full name here..." required></input>
  </div>
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Age :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={age} onChange={(e) => setAge(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Below 14 years">Below 14 years</option>
                <option value="15-16 years">15-16 years</option>
                <option value="17-19 years">17-19 years</option>
            </select>
        </div>
      <br />
      <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Residential Location :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={location} onChange={(e) => setLocation(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Colombo">Colombo</option>
                <option value="Galle">Galle</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Hambantota">Hambantota</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Kandy">Kandy</option>
                <option value="Kurunegala">Kurunegala</option>
                <option value="Matale">Matale</option>
                <option value="Nuwara Eliya">Nuwara Eliya</option>
                <option value="Polonnaruwa">Polonnaruwa</option>
                <option value="Ratnapura">Ratnapura</option>
            </select>
        </div>
      <br />
    

        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">First Language :</label>
            <select className="form-control" id="exampleFormControlSelect1"  value={firstLanguage} onChange={(e) => setFirstLanguage(e.target.value)} required>
                <option value="">-- Select --</option>
                <option value="Sinhala">Sinhala</option>
                <option value="Tamil">Tamil</option>
            </select>
        </div>

        <br />
      <div>
      <label>
        Highest Level of Education:</label>
        <select className="form-control" value={highestLevelofEducation} onChange={(e) => setHighestLevelofEducation(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Grade 9 or below">Grade 9 or below</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 13 or below">Grade 13 or below</option>
        </select>
        
        </div>
        <br />
      <div>
      <label>
      Importance of Cost of Tuition </label>
        <select className="form-control" value={importanceOfTutionCost} onChange={(e) => setImportanceOfTutionCost(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Somewhat important">Somewhat important</option>
            <option value="Very important">Very important</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Where do you plan on studying / working after schooling ?</label>
        <select className="form-control" value={afterLearningLocation} onChange={(e) => setAfterLearningLocation(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Abroad">Abroad</option>
            <option value="Another city in Sri Lanka">Another city in Sri Lanka</option>
            <option value="In my hometown, in Sri Lanka">In my hometown, in Sri Lanka</option>
            <option value="Grade 13 or below">Grade 13 or below</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Plan after finishing schooling:</label>
        <select className="form-control" value={afterLearningPlan} onChange={(e) => setAfterLearningPlan(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Start higher education">Start higher education</option>
            <option value="Find a job">Find a job</option>
            <option value="Start technical and vocational training">Start technical and vocational training</option>
            <option value="Have not thought about it yet">Have not thought about it yet</option>
        </select>
        
        </div>


        <br />
      <div>
      <label>
      Financing Plan</label>
        <select className="form-control" value={financialPlan} onChange={(e) => setFinancialPlan(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="I am aiming for government institutions">I am aiming for government institutions</option>
            <option value="I have my own savings / going to take educational loans">I have my own savings / going to take educational loans</option>
            <option value="My parents / family members will be financing">My parents / family members will be financing</option>
            <option value="Planning to get a scholarship">Planning to get a scholarship</option>
        </select>
        
        </div>

        <br />
      <div>
      <label>
      Budget (Annual spending) </label>
        <select className="form-control" value={budget} onChange={(e) => setBudget(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Below LKR 250,000">Below LKR 250,000</option>
            <option value="LKR 250,000 - LKR 500,000">LKR 250,000 - LKR 500,000</option>
            <option value="LKR 500,000 - LKR 1,000,000">LKR 500,000 - LKR 1,000,000</option>
            <option value="More than LKR 1,000,000">More than LKR 1,000,000</option>
        </select>
        
        </div>
    </div>
    <br />

    <button type='submit' className="btn btn-primary mb-2">Submit</button>
    </form>
  
    </div>
  )
  }

  export default PersonalInfoForm;