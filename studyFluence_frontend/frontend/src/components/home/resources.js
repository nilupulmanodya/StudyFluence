function Resources (){
    console.log('Hero page')
    return (
        <div>
             <main>
          
            {/* <!-- Section Resources --> */}
            <section className="section-padding" id="resources">
                <div className="container">
                    <div className="row">
                        <h2 className="mb-lg-3 mb-3">Resources</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div className="row">
        

                        <div className="col">
                            <img src="assets/images/book_counselor.png" style={{height: "100%"}} className="img-fluid galleryImage" alt="Resources " title="Resources"/>
                            <p>Book a Counsellor</p>
                        </div>
                        <div className="col">
                            <img src="assets/images/scope_for_career.png" style={{height: "100%"}} className="img-fluid galleryImage" alt="Resources " title="Resources"/>
                            <p>Scope for Careers</p>
                        </div>
                        <div className="col">
                            <img src="assets/images/skill_dev.png" style={{height: "100%"}} className="img-fluid galleryImage" alt="Resources " title="Resources"/>
                            <p>Skill Development</p>
                        </div>
                        <div className="col">
                            <img src="assets/images/universities.png" style={{height: "100%"}} className="img-fluid galleryImage" alt="Resources " title="Resources"/>
                            <p>Universities</p>
                        </div>
                        <div className="col">
                            <img src="assets/images/schols.png" style={{height: "100%"}} className="img-fluid galleryImage" alt="Resources " title="Resources"/>
                            <p>Scholarships and Financial Aid</p>
                        </div>


                    </div>
                </div>
            </section>
            
        </main>






        </div>
    )
}

export default Resources;
