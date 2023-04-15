import {Link } from "react-router-dom";

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
                        <p>Additional educational resources for students to enhance their learning expenence can be found here. 
                            These resources are designed to be accessible and user-friendly, allowing you to easily navigate 
                            and find the information needed to plan out your future studies.
                        </p>
                    </div>

                    <div className="row">
        

                        <div className="col">
                            <img src="assets/images/book_counselor.png" style={{height: "100%"}} className="img-fluid galleryImage" alt="Resources " title="Resources"/>

                            <Link to="/listCounsellors"><p>Book a Counsellor</p></Link>
                        </div>
                        <div className="col">
                            <img src="assets/images/scope_for_career.png" style={{height: "100%"}} className="img-fluid galleryImage" alt="Resources " title="Resources"/>
                            
                            <Link to="/jobCategoriesPage"><p>Scope for Careers</p></Link>
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
