import { useState } from "react";
import ProceedToPay from "./proceedPay"

function FormBookCounsellor (){

    const [proceedToPay, setProceedToPay] = useState(0);
    const [name, setName] =useState();
    // const [email, setEmail] =useState();
    // const [phone, setCounsellor] =useState();
    const [date, setDate] =useState();
    const [time, setTime] =useState();
    const [venue, setVenue] =useState();



    function refreshPage() {
        window.location.reload(false);
      }


    const onPressProceedToPay = (e) => {

        setProceedToPay(1)
        console.log('onPressProceedToPay');
        
      };

    return (
        <div>

            {proceedToPay === 1 ?<ProceedToPay 
            name={name}
            date={date}
            time={time}
            venue={venue}
            
            />:
            
            <div>

            <h1>
            Change Your Path: Book a Counsellor Now        
                    </h1>
                    <div className="container">
                    <div className="book_row_counsellor">
                      
            
            
                    <div className="text_counsellor">
                                <form>
                                    <div class="info_btn_container form-group row">
                                        <label for="staticMa,e" class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                          <input required type="text"  class="form-control" onChange={e => setName(e.target.value)} />
                                        </div>
                                      </div>
                                    <div class="info_btn_container form-group row">
                                      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                      <div class="col-sm-10">
                                        <input required type="email"  class="form-control" id="staticEmail" />
                                      </div>
                                    </div>
            
                                    <div class="info_btn_container form-group row">
                                        <label for="staticMa,e" class="col-sm-2 col-form-label">Phone</label>
                                        <div class="col-sm-10">
                                          <input required type="text"  class="form-control"  />
                                        </div>
                                      </div>
            
                                      <div class="info_btn_container form-group row">
                                        <label for="staticMa,e" class="col-sm-2 col-form-label">Counsellor</label>
                                        <div class="col-sm-10">
                                          <input  required type="text"  class="form-control"  />
                                        </div>
                                      </div>
            
                                      <div class="info_btn_container form-group row">
                                        <label for="staticMa,e" class="col-sm-2 col-form-label">Date</label>
                                        <div class="col-sm-10">
                                          <input required type="date"  class="form-control" onChange={e => setDate(e.target.value)} />
                                        </div>
                                      </div>
            
                                      <div class="info_btn_container form-group row">
                                        <label for="staticMa,e" class="col-sm-2 col-form-label">Time</label>
                                        <div class="col-sm-10">
                                          <input required type="time"  class="form-control" onChange={e => setTime(e.target.value)}  />
                                        </div>
                                      </div>
            
                                      <div class="info_btn_container form-group row">
                                        <label for="staticMa,e" class="col-sm-2 col-form-label">Venue</label>
                                        <div class="col-sm-10">
                                          <input required type="text"  class="form-control"  onChange={e => setVenue(e.target.value)}/>
                                        </div>
                                      </div>
            
                                      <button type="submit" onClick={onPressProceedToPay} class="info_btn_container btn btn-primary">Proceed to Pay</button>
                                        <button type="button" onClick={refreshPage} class="info_btn_container btn btn-danger">Cancel Booking</button>
                                  </form>
                            </div>
            
            
            
            
                        
            
                        
                    </div>
                </div>
            
            
                </div>
            }
         

    </div>
 
    )
}

export default FormBookCounsellor;
 