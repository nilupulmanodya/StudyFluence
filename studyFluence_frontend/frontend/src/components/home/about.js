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

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
