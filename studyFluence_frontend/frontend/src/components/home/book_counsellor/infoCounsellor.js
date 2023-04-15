import { useState } from "react";
import FormBookCounsellor from "./formBookCounsellor";

function InfoCounsellor (props){

    const [bookNowState, setBookNowState] = useState(0);


    const selectedCounsellor = props.selectedCounsellor

    function refreshPage() {
        window.location.reload(false);
      }


    const onPressBookCouncellor = (e) => {

        setBookNowState(1)
        console.log('onPressBookCouncellor');
      };

    return (
        <div>

    {bookNowState ===0? 

    <div>

<h1>
            Discover Our Counselling Team
        </h1>
        <div className="container">
        <div className="row_counsellor row">
            <div>
                <img className="info_img_counsellor" src="assets/images/1.jpeg" alt="Counselor 1"/>
            </div>
            <div className="text_counsellor">
                <div>
                <dl className="row  detail_container">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9">{selectedCounsellor.Name}</dd>

                    <dt className="col-sm-3">Location</dt>
                    <dd className="col-sm-9">{selectedCounsellor.Location}</dd>
                  

                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{selectedCounsellor.Email}</dd>

                    <dt className="col-sm-3">Age</dt>
                    <dd className="col-sm-9">{selectedCounsellor.Age}</dd>

                    <dt className="col-sm-3">LinkedIn</dt>
                    <dd className="col-sm-9">{selectedCounsellor.LinkedIn}</dd>

                    <dt className="col-sm-3">Description</dt>
                    <dd className="col-sm-9">
                      <p>{selectedCounsellor.Description}</p>
                      
                    </dd>
                  </dl>
                </div>

                <button type="button" onClick={e => onPressBookCouncellor(e) } className="btn btn-primary info_btn_container">Book Now</button>
                <button type="reset" onClick={refreshPage} className="btn btn-danger info_btn_container">Cancel Booking</button>
                </div>

            
        </div>
    </div>


    </div>
    
    :



        <FormBookCounsellor/>

    
    }






        </div>
    )
}

export default InfoCounsellor;
 