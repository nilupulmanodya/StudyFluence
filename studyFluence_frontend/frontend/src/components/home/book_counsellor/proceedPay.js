import { useState } from "react"

import BookingSuccess from './bookingSuccess'

function ProceedToPay (props){

    const [payed, setPayed] = useState(0);
    
    const name =props.name
    const date = props.date
    const time = props.time
    const venue = props.venue



    function refreshPage() {
        window.location.reload(false);
      }


    const onPressProceedPayement = (e) => {

        setPayed(1)

        console.log('onPressProceedPayement');
        
      };

    return (
        <div>

            {payed===0?<div>
                <h1>
           Seek professional Guidance
        </h1>
        <div class="container">
        <div class="row_counsellor row">

            <div class="form_counsellor">
                <div>
                  <div class="payement_card">
                    <h3>Booking summery</h3>
                    <br/>
                    <dl class="row  detail_container">
                      <dt class="col-sm-3">Name</dt>
                      <dd class="col-sm-9">{name}</dd>
  
                      <dt class="col-sm-3">Date</dt>
                      <dd class="col-sm-9">{date}</dd>
                    
  
                      <dt class="col-sm-3">Time</dt>
                      <dd class="col-sm-9">{time}</dd>
  
                      <dt class="col-sm-3">Venue</dt>
                      <dd class="col-sm-9">{venue}</dd>


                    </dl>
                  </div>
                    <form onsubmit="return false">
                        <div class="info_btn_container form-group row">
                            <label for="staticMa,e" class="col-sm-2 col-form-label">Card Number</label>
                            <div class="col-sm-10">
                              <input required type="text"  class="form-control"  />
                            </div>
                          </div>
                        <div class="info_btn_container form-group row">
                          <label for="staticEmail" class="col-sm-2 col-form-label">Name on Card</label>
                          <div class="col-sm-10">
                            <input required type="text"  class="form-control" id="staticEmail"/>
                          </div>
                        </div>

                        <div class="info_btn_container form-group row">
                            <label for="staticMa,e" class="col-sm-2 col-form-label">CVv</label>
                            <div class="col-sm-10">
                              <input required type="text"  class="form-control"  />
                            </div>
                          </div>
                          <div class="info_btn_container form-group">
                            <div class="form-check">
                              <input required class="form-check-input" type="checkbox" id="gridCheck"/>
                              <label class="form-check-label" for="gridCheck">
                                I hereby confirm that all booking details are correct, and I have read and agree to the terms and conditions.
                              </label>
                            </div>
                          </div>

                          <button type="button" onClick={onPressProceedPayement} class="info_btn_container btn btn-primary">Proceed Payement</button>
                        <button type="button"onClick={refreshPage} class="info_btn_container btn btn-danger">Cancel Booking</button>
                      </form>
                </div>
                
            </div>
            
        </div>
    </div>


            </div> :<BookingSuccess/>}

       

    </div>
 
    )
}

export default ProceedToPay;
 