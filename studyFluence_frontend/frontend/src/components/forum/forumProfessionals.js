import { useEffect,useState } from "react";

function ForumProfessionals (props){
    const [questionList, setQuestionList] = useState([]);
    const client = props.client

    const onSubmitReply = (event)=>{
        
        event.preventDefault();

        const reply = event.target.reply.value;
        const q_id = event.target.q_id.value;
       
        console.log(reply)
        console.log('q_id',q_id)
    
        event.target.reset();

        client.post(
          "/api/answerlist/"+q_id,
          
          {
            withCredentials: true,
            content: reply,
            teacher: 1
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
 
            
      }


    useEffect(() => {
        // check authentation from the backend for initial loading and setstate

        console.log('forum students')
    
    
        client.get("/api/questionlist")
        .catch((error) => {
          if (error.response) {
            console.log('error.response',error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
            
        })    
        .then(function(res) {
          console.log('results',res.data)
          setQuestionList(res.data)

            });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);
    
 


      console.log('questionList',questionList)





    return (
        <div>
   {/* <!-- Section about --> */}
   <section className="section-padding" id="reviews">
      <div className="container">
         <div className="row">
            <h2 className="mb-lg-3 mb-3">Get ready to explore some captivating inquiries with us</h2>
            <label className="label-style-forum" htmlFor="tweet">Our community values accuracy - let's all do our part to avoid posting incorrect answers</label>



            <h2 className="mb-lg-3 mb-3">Past inquiries</h2>
            {/* <!-- Existing tweets --> */}


            {questionList.length>0?(questionList.map(d => (
            
            <div key={d.id}className="tweet">
               <h6>{d.title}</h6>
               <p>{d.description}</p>
               <p>by : @{d.student_name}</p>
               <p>date : {d.created_at}</p>
               <br/>
               
                {d.answer_set.length>0?
                d.answer_set.map(a=>(
                <div key={a.id}className="reply">
                  <p>{a.content}</p>
                  <p>Answered by : @{a.teacher_name}</p>
                  <p>date : {a.created_at}</p>
               </div>

               ))
               :
               
               <div className="reply">
                    <p>Still not answered this question!</p>
               </div>
               }
               {/* <!-- Add a new reply --> */}
               <form key={d.id} className="form-style" onSubmit={onSubmitReply}>
                  <label className="label-style-forum" htmlFor="reply">Reply:</label>
                  <br/>
                  <textarea id="reply" name="reply" rows="3"></textarea>
                  <br/><br/>
                  <input type="hidden" id="q_id" name="q_id" value={d.id}/>

                  <button className="button-forum" type="submit">Reply</button>
               </form>

            </div>
            
            ))):             
            <div className="reply">
            <p>No inqueries yet...</p>
            
            </div>}





            {/* <div className="tweet">
               <p>First tweet</p>
               <p>by John Doe</p>
               <p>Date</p>
               {/* <!-- Add a new reply --> *
               <form className="form-style">
                  <label className="label-style-forum" htmlFor="reply">Reply:</label>
                  <br/>
                  <textarea id="reply" name="reply" rows="3"></textarea>
                  <br/><br/>
                  <button className="button-forum" type="submit">Reply</button>
               </form>
               {/* <!-- Existing replies --> *
               <div className="reply">
                  <p>First reply</p>
                  <p>by John Doe</p>
                  <p>Date</p>
               </div>
               <div className="reply">
                  <p>Second reply</p>
                  <p>by John Doe</p>
                  <p>Date</p>
               </div>
            </div> */}
            {/* <div className="tweet">
               <p>Second tweet</p>
               <p>by John Doe</p>
               <p>Date</p>
               {/* <!-- Add a new reply --> *
               <form className="form-style">
                  <label className="label-style-forum" htmlFor="reply">Reply:</label>
                  <br/>
                  <textarea id="reply" name="reply" rows="3"></textarea>
                  <br/><br/>
                  <button className="button-forum" type="submit">Reply</button>
               </form>
            </div> */}
         </div>
      </div>
   </section>
</div>
    )
}

export default ForumProfessionals;
