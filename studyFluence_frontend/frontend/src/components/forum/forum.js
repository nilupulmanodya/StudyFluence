function Forum (){
    console.log('Forum page')
    return (
        <div>
   {/* <!-- Section about --> */}
   <section className="section-padding" id="reviews">
      <div className="container">
         <div className="row">
            <h2 className="mb-lg-3 mb-3">Stay calm and ask any questions you may have during your studies</h2>
            {/* <!-- Add a new tweet --> */}
            <form className="form-style">
               <label className="label-style-forum" htmlFor="tweet">Our team of professionals is always ready to assist you with any needs you may have...</label>
               <br/>
               <textarea id="tweet" placeholder="Ask your question"name="tweet" rows="3"></textarea>
               <br/><br/>
               <button className="button-forum" type="submit">Submit</button>
            </form>
            <h2 className="mb-lg-3 mb-3">Past inquiries</h2>
            {/* <!-- Existing tweets --> */}
            <div className="tweet">
               <p>First tweet</p>
               <p>by John Doe</p>
               <p>Date</p>
               {/* <!-- Add a new reply --> */}
               <form className="form-style">
                  <label className="label-style-forum" htmlFor="reply">Reply:</label>
                  <br/>
                  <textarea id="reply" name="reply" rows="3"></textarea>
                  <br/><br/>
                  <button className="button-forum" type="submit">Reply</button>
               </form>
               {/* <!-- Existing replies --> */}
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
            </div>
            <div className="tweet">
               <p>Second tweet</p>
               <p>by John Doe</p>
               <p>Date</p>
               {/* <!-- Add a new reply --> */}
               <form className="form-style">
                  <label className="label-style-forum" htmlFor="reply">Reply:</label>
                  <br/>
                  <textarea id="reply" name="reply" rows="3"></textarea>
                  <br/><br/>
                  <button className="button-forum" type="submit">Reply</button>
               </form>
            </div>
         </div>
      </div>
   </section>
</div>
    )
}

export default Forum;
