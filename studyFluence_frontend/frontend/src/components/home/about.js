function About (){
    console.log('Hero page')
    return (
        <div>
             <main>
                      {/* <!-- Section about --> */}
                      <section className="section-padding" id="about">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6 col-12">
                            <h2 className="mb-lg-3 mb-3">About Us</h2>

                            <p>Looking for a website that can help you identify your strengths and interests and guide you towards a fulfilling career? Look no
                            further than Studyfluence! Our website offers a range of assessments and tests to help you discover your career interests and
                            aptitudes, explore different career paths, and plan your academic journey. Our tests are designed to be user-friendly and
                            comprehensive, providing you with detailed insights into your personality traits, skills, and knowledge.</p>

                            <p> With our expert guidance
                            and support, you can make informed decisions about your academic and career goals and achieve the success you deserve. So
                            why wait? Visit Studyfluence today to get started on your journey towards a rewarding future!</p>
                        </div>

                        <div className="col-lg-6 col-6 ps-0">
                            <img src="assets/images/about_Us.png" className="img-fluid galleryImage" alt="about us" title="About us"/>
                        </div>

                    </div>
                </div>
            </section>
            
        </main>






        </div>
    )
}

export default About;
