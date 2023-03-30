import React, { useState } from "react";

function JobCategoriesPage() {
  const [selectedJob, setSelectedJob] = useState("");
  const [jobCategories, setJobCategories] = useState([]);

  const handleJobChange = (e) => {
    setSelectedJob(e.target.value);
    const filteredJobs = jobs.filter((job) => job.job_title === e.target.value);
    setJobCategories(filteredJobs.map((job) => job.job_category));
  };

  function onClickDownload(e){
    e.preventDefault();

    const baseUrl = 'http://127.0.0.1:8000/'
    let url = ''


    switch(jobCategories[0]) {
        case "Domestic jobs":
            console.log("Domestic jobs")
            url = baseUrl+'static/scopesCareers/DomesticJobs.pdf'
          // code block
          break;
        case "Entertainment related careers":
            console.log("Entertainment related careers")
            url = baseUrl+'static/scopesCareers/EntertainmentCareers.pdf'
          // code block
          break;
        case "Business and Finance related careers":
            console.log("Business and Finance related careers")
            url = baseUrl+'static/scopesCareers/BusinessAndFinancialCareers.pdf'
            // code block
            break;
        case "Healthcare related careers":
            console.log("Healthcare related careers")
            url = baseUrl+'static/scopesCareers/HealthcareCareers.pdf'
                // code block
             break;
        case "IT related careers":
            console.log("IT related careers")
            url = baseUrl+'static/scopesCareers/ITcareers.pdf'
                    // code block
                    break;
        case "Engineering related careers":
            console.log("Engineering related careers")
            url = baseUrl+'static/scopesCareers/EngineeringCareers.pdf'
            break;
        case "Teaching careers":
            console.log("Teaching careers")
            url = baseUrl+'static/scopesCareers/TeachingCareers.pdf'
            break;
        case "Law related careers":
            console.log("Law related careers")
            url = baseUrl+'static/scopesCareers/LawCareers.pdf'
            break;
        default:
          // code block
          console.log("No careers found")
      }
if (url !== ""){
    console.log('url',url)
    const link = document.createElement('a');
    link.href = url;
    link.target = "_blank"
    document.body.appendChild(link);
    link.click();
}else{
    alert("Please select Job")
}

}
      

  return (
    <div>
        <h2>Scope for Careers...</h2>
        <br/>
        <br/>
        <form>
      <label htmlFor="jobs">Select a job:</label>
      <select id="jobs" onChange={handleJobChange} value={selectedJob} required>
        <option value="">Search Careers via a job</option>
        {jobs.map((job) => (
          <option key={job.job_title} value={job.job_title}>
            {job.job_title}
          </option>
        ))}
      </select>
      {jobCategories.length > 0 && (
        <p>The job category for {selectedJob} is {jobCategories[0]}</p>
      )}
    <br/><br/>
      <button type="submit" className="btn btn-primary mb-2" onClick={e=>onClickDownload(e)}>Download Full Career Document</button>
      </form>
    </div>
  );
}

const jobs = [
  {
    job_title: "Security Guard",
    job_category: "Domestic jobs",
  },
  {
    job_title: "Construction Worker",
    job_category: "Domestic jobs",
  },
  {
    job_title: "Actor",
    job_category: "Entertainment related careers",
  },
  {
    job_title: "Telemarketer",
    job_category: "Business and Finance related careers",
  },
  {
    job_title: "Dentist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Nurse",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Pharmacist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Business Analyst",
    job_category: "IT related careers"
    },
    {
    job_title: "Physician",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Database Administrator",
    job_category: "IT related careers"
    },
    {
    job_title: "Software Developer",
    job_category: "IT related careers"
    },
    {
    job_title: "Physical Therapist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Web Developer",
    job_category: "IT related careers"
    },
    {
    job_title: "Dental Hygienist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Occupational Therapist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Veterinarian",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Computer Programmer",
    job_category: "IT related careers"
    },
    {
    job_title: "School Psychologist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Physical Therapist Assistant",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Interpreter & Translator",
    job_category: "Business and Finance related careers"
    },
    {
    job_title: "Mechanical Engineer",
    job_category: "Engineering related careers"
    },
    {
    job_title: "Veterinary Technologist & Technician",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Epidemiologist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "IT Manager",
    job_category: "IT related careers"
    },
    {
    job_title: "Market Research Analyst",
    job_category: "Business and Finance related careers"
    },
    {
    job_title: "Diagnostic Medical Sonographer",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Computer Systems Administrator",
    job_category: "IT related careers"
    },
    {
    job_title: "Respiratory Therapist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Medical Secretary",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Civil Engineer",
    job_category: "Engineering related careers"
    },
    {
    job_title: "Substance Abuse Counselor",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Speech-Language Pathologist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Landscaper & Groundskeeper",
    job_category: "Domestic jobs"
    },
    {
    job_title: "Radiologic Technologist",
    job_category: "Healthcare related careers"
    },
    {
    job_title: "Cost Estimator",
    job_category: "Business and Finance related careers"
    },
    {
    job_title: "Financial Advisor",
    job_category: "Business and Finance related"},

    {
        job_title: "Marriage & Family Therapist",
        job_category: "Healthcare related careers"
        },
        {
        job_title: "Medical Assistant",
        job_category: "Healthcare related careers"
        },
        {
        job_title: "Lawyer",
        job_category: "Law related careers"
        },
        {
        job_title: "Accountant",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Compliance Officer",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "High School Teacher",
        job_category: "Teaching careers"
        },
        {
        job_title: "Clinical Laboratory Technician",
        job_category: "Healthcare related careers"
        },
        {
        job_title: "Maintenance & Repair Worker",
        job_category: "Domestic jobs"
        },
        {
        job_title: "Bookkeeping, Accounting, & Audit Clerk",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Financial Manager",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Recreation & Fitness Worker",
        job_category: "Healthcare related careers"
        },
        {
        job_title: "Insurance Agent",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Elementary School Teacher",
        job_category: "Teaching careers"
        },
        {
        job_title: "Dental Assistant",
        job_category: "Healthcare related careers"
        },
        {
        job_title: "Management Analyst",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Home Health Aide",
        job_category: "Healthcare related careers"
        },
        {
        job_title: "Pharmacy Technician",
        job_category: "Healthcare related careers"
        },
        {
        job_title: "Construction Manager",
        job_category: "Domestic jobs"
        },
        {
        job_title: "Public Relations Specialist",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Middle School Teacher",
        job_category: "Teaching careers"
        },
        {
        job_title: "Massage Therapist",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Paramedic",
        job_category: "Healthcare related careers"
        },
        {
        job_title: "Preschool Teacher",
        job_category: "Teaching careers"
        },
        {
        job_title: "Hairdresser",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Marketing Manager",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Patrol Officer",
        job_category: "Law related careers"
        },
        {
        job_title: "School Counselor",
        job_category: "Teaching careers"
        },
        {
        job_title: "Executive Assistant",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Financial Analyst",
        job_category: "Business and Finance related careers"
        },
        {
        job_title: "Personal Care Aide",
        job_category: "Healthcare related careers"
        },


        {
            job_title: "Clinical Social Worker",
            job_category: "Healthcare related careers"
        },
        {
            job_title: "Business Operations Manager",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Loan Officer",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Meeting, Convention & Event Planner",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Mental Health Counselor",
            job_category: "Healthcare related careers"
        },
        {
            job_title: "Nursing Aide",
            job_category: "Healthcare related careers"
        },
        {
            job_title: "Sales Representative",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Architect",
            job_category: "Engineering related careers"
        },
        {
            job_title: "Sales Manager",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "HR Specialist",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Plumber",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Real Estate Agent",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Musician",
            job_category: "Entertainment related careers"
        },
        {
            job_title: "Art Director",
            job_category: "Entertainment related careers"
        },
        {
            job_title: "Customer Service Representative",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Logistician",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Auto Mechanic",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Bus Driver",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Cook",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Lecturer",
            job_category: "Teaching careers"
        },
        {
            job_title: "Administrative Assistant",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Receptionist",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Paralegal",
            job_category: "Law related careers"
        },
        {
            job_title: "Builder",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Artist",
            job_category: "Entertainment related careers"
        },
        {
            job_title: "Sports Coach",
            job_category: "Teaching careers"
        },
        {
            job_title: "Teacher Assistant",
            job_category: "Teaching careers"
        },
        {
            job_title: "Cashier",
            job_category: "Business and Finance related careers"
        },
        {
            job_title: "Janitor",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Electrician",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Delivery Truck Driver",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Maid & Housekeeper",
            job_category: "Domestic jobs"
        },
        {
            job_title: "Carpenter",
            job_category: "Domestic jobs"
        },

        {
            job_title: "Security Guard",
            job_category: "Domestic jobs"
            },
            {
            job_title: "Construction Worker",
            job_category: "Domestic jobs"
            },
            {
            job_title: "Actor",
            job_category: "Entertainment related careers"
            },
            {
            job_title: "Telemarketer",
            job_category: "Business and Finance related careers"
            }
];

export default JobCategoriesPage;
