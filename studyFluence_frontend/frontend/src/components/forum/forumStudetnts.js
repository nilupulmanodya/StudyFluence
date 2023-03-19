import { useEffect,useState } from "react";

function ForumStudents (props){
    const client = props.client
    const [questionList, setQuestionList] = useState([]);
    const [newQuestionTitle,setNewQuestionTitle] = useState()
    const [newQuestionDescription,setNewQuestionDescription] = useState()
    const [addQuestion, setAddQuestion] = useState(0)
    

    const submitNewQuestion = (e)=>{
        
        e.preventDefault();
        setNewQuestionTitle("")
        setNewQuestionDescription("")
        setAddQuestion(addQuestion+1)
        client.post(
          "/api/questionlist",
          
          {
            withCredentials: true,
            title: newQuestionTitle,
            description: newQuestionDescription,
            student: 1
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
            setQuestionList([])
        })    
        .then(function(res) {
          console.log('results',res.data)
          setQuestionList(res.data)

            });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[addQuestion]);
    
 



    


    return (
        <div>
   {/* <!-- Section about --> */}
   <section className="section-padding" id="reviews">
      <div className="container">
         <div className="row">
            <h2 className="mb-lg-3 mb-3">Stay calm and ask any questions you may have during your studies</h2>
            {/* <!-- Add a new question --> */}
            <form className="form-style" onSubmit={e => submitNewQuestion(e)}>
               <label className="label-style-forum" htmlFor="tweet">Our team of professionals is always ready to assist you with any needs you may have...</label>
               <br/>
               <textarea id="" value={newQuestionTitle} placeholder="Can you summarize your question in a title?"name="tweet" rows="1" onChange={e => setNewQuestionTitle(e.target.value)} required ></textarea>
               <textarea id="" value={newQuestionDescription} placeholder="To help us better understand your question, please type it out in as much detail as possible."name="tweet" rows="3" onChange={e => setNewQuestionDescription(e.target.value)} required ></textarea>
               <br/><br/>
               <button className="button-forum" type="submit">Submit</button>
            </form>

            {/* past inqueries */}
            <h2 className="mb-lg-3 mb-3">Past inquiries</h2>
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
                    <p>We're still exploring the best answer - stay tuned!</p>
               </div>
               }

            </div>
            
            ))):             
            <div className="reply">
            <p>We're excited to hear from you! If you have a question, don't hesitate to get the conversation started.</p>
            
            </div>}

         </div>
      </div>
   </section>
</div>
    )
}

export default ForumStudents;
