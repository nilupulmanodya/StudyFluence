import { useState } from "react";

import InfoCounsellor from "./infoCounsellor"

function ListCounsellors (){

    const [selectedCounsellorId, setSelectedCounsellorId] = useState(0);
    const [selectedCounsellor, setSelectedCOunsellor] = useState({})

    const counsellors_data = [
        {
            "id":1,
            "Name": "Hannah Gibson",
            "Location": "Colombo, Sri Lanka",
            "Email": "gibson.hannah@example.com",
            "Education": "Master's in Education Counseling",
            "Date of birth": "1990-03-25",
            "Age": "33",
            "LinkedIn": "linkedin.com/in/hannah-gibson",
            "Description": "Experienced in career and academic guidance for school students."
          },
          {
            "id":2,
            "Name": "Ethan Saunders",
            "Location": "Kandy, Sri Lanka",
            "Email": "ethan.saunders@example.com",
            "Education": "Bachelor's in Education",
            "Date of birth": "1995-06-12",
            "Age": "27",
            "LinkedIn": "linkedin.com/in/ethan-saunders",
            "Description": "Experienced in career and academic guidance for school students."
          },

          {
            "id":3,
            "Name": "Rachel Chen",
            "Location": "Galle, Sri Lanka",
            "Email": "rachel.chen@example.com",
            "Education": "Ph.D. in Education Psychology",
            "Date of birth": "1987-11-09",
            "Age": "35",
            "LinkedIn": "linkedin.com/in/rachel-chen",
            "Description": "Experienced in career and academic guidance for school students."
          },
          {
            "id":4,
            "Name": "Michael Patel",
            "Location": "Colombo, Sri Lanka",
            "Email": "michael.patel@example.com",
            "Education": "Master's in Education",
            "Date of birth": "1992-02-18",
            "Age": "31",
            "LinkedIn": "linkedin.com/in/michael-patel",
            "Description": "Experienced in career and academic guidance for school students."
          },
          {
            "id":5,
            "Name": "Amanda Lee",
            "Location": "Kandy, Sri Lanka",
            "Email": "amanda.lee@example.com",
            "Education": "Master's in Education Counseling",
            "Date of birth": "1996-09-30",
            "Age": "26",
            "LinkedIn": "linkedin.com/in/amanda-lee",
            "Description": "Experienced in career and academic guidance for school students."
          },
          {
            "id":6,
            "Name": "Tyler Green",
            "Location": "Galle, Sri Lanka",
            "Email": "tyler.green@example.com",
            "Education": "Bachelor's in Education",
            "Date of birth": "1988-07-05",
            "Age": "34",
            "LinkedIn": "linkedin.com/in/tyler-green",
            "Description": "Experienced in career and academic guidance for school students."
          },

          {
            "id":7,
            "Name": "Samantha Johnson",
            "Location": "Colombo, Sri Lanka",
            "Email": "samantha.johnson@example.com",
            "Education": "Ph.D. in Education Psychology",
            "Date of birth": "1988-07-05",
            "Age": "34",
            "LinkedIn": "linkedin.com/in/samantha-johnson",
            "Description": "Experienced in career and academic guidance for school students."
          },

          {
            "id":8,
            "Name": "Jason Jones",
            "Location": "Kandy, Sri Lanka",
            "Email": "jason.jones@example.com",
            "Education": "Master's in Education",
            "Date of birth": "1995-06-12",
            "Age": "27",
            "LinkedIn": "linkedin.com/in/jason-jones",
            "Description": "Experienced in career and academic guidance for school students."
          },
          {
            "id":9,
            "Name": "Emily Kim",
            "Location": "Galle, Sri Lanka",
            "Email": "emily.kim@example.com",
            "Education": "Master's in Education Counseling",
            "Date of birth": "1992-02-18",
            "Age": "31",
            "LinkedIn": "linkedin.com/in/emily-kim",
            "Description": "Experienced in career and academic guidance for school students."
          },
          {
            "id":10,
            "Name": "William Rodriguez",
            "Location": "Colombo, Sri Lanka",
            "Email": "william.rodriguez@example.com",
            "Education": "Bachelor's in Education",
            "Date of birth": "1990-03-25",
            "Age": "33",
            "LinkedIn": "linkedin.com/in/william-rodriguez",
            "Description": "Experienced in career and academic guidance for school students."
          }
    ]

    const onPressViewProfile = (e) => {
        const index = e.target.value

        setSelectedCounsellorId(index)
        
        console.log('selectedCounsellorId',selectedCounsellorId);
        const object = counsellors_data.find(obj => obj.id === Number(index));
        setSelectedCOunsellor(object)
        console.log('object',object)
      };

    return (
        <div>
          <div>
            {selectedCounsellorId ===0 ? 
            <div>
                <h1 className="h1_counsellor">
            Change Your Path: Book a Counsellor Now
                </h1>
                <br/>
                
                


                {counsellors_data.map((item) => (
                  <div className="container">


              <div className="row_counsellor">
                    <div>
                        <img width="150" className="img_counsellor" src="assets/images/1.jpeg" alt="Counselor 1"/>
                    </div>
                    <div className="text_counsellor">
                        <h4>{item.Name}</h4>
                        <button key={item.id} type="button" value={item.id} className="btn btn-primary" onClick={ e => onPressViewProfile(e, "value")}>View </button>
                    </div>

                
                </div>
                </div>

        ))}
            
                </div>:
                <div>
                
                <InfoCounsellor selectedCounsellor = {selectedCounsellor}/>
                </div>
                
                }

</div>

        </div>
    )
}

export default ListCounsellors;
