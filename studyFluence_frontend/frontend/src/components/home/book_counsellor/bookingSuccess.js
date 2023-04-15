

function BookingSuccess (){



    function refreshPage() {
        window.location.reload(false);
      }




    return (
        <div>


        <h1>
            Your Counselling Session is Confirmed
        </h1>
        <div class="container">
        <div class="row_counsellor">

            <div class="text_counsellor">
                <div>
                    <h2>Booking Succes</h2>
                    <br/>
                    <h3>
                        Please view your email and SMS for complete booking details.
                    </h3>
                    <br/>
                </div>
                <button type="button" onClick={refreshPage} class="btn btn-primary">Done</button>
            </div>
            
        </div>
    </div>




        </div>

 
    )
}

export default BookingSuccess;
 