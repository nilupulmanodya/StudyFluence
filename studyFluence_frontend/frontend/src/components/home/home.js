function Home (){
    console.log('home page')
    return (
        <div>
             <main>




            <section className="hero" id="hero">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="assets/images/welcome1.png" className="img-fluid" alt=""/>
                                    </div>

                                    <div className="carousel-item">
                                        <img src="assets/images/welcome2.png" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="heroText d-flex flex-column justify-content-center">

                                <h1 className="mt-auto mb-2">
                                    Study
                                    <div className="animated-info">
                                        <span className="animated-item">Fast</span>
                                        <span className="animated-item">Smoothly</span>
                                        <span className="animated-item">Easily</span>
                                    </div>
                                </h1>

                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                <div className="heroLinks d-flex flex-wrap align-items-center">
                                    <a className="custom-link me-4" href="#about" data-hover="Learn More">Learn More</a>

                                    <p className="contact-phone mb-0"><i className="bi-phone"></i> +94-023-0340</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            

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

            <section className="gallery">
                <div className="container">
                    <div className="row">

                        
                        <div className="col-lg-6 col-6 ps-0">
                            <h3 className="mb-lg-3 mb-3">Services We Offer</h3>
                            
                            <ul>
                                <li><p>Lorem Ipsum is simply dummy text of</p></li>
                                <li><p>Lorem Ipsum is simply dummy text of</p></li>
                                <li><p>Lorem Ipsum is simply dummy text of</p></li>
                              </ul>
                        </div>

                        <div className="col-lg-6 col-6 pe-0">
                            <h3 className="mb-lg-3 mb-3">Products We Offer</h3>
                            
                            <ul>
                                <li><p>Lorem Ipsum is simply dummy text of</p></li>
                                <li><p>Lorem Ipsum is simply dummy text of</p></li>
                                <li><p>Lorem Ipsum is simply dummy text of</p></li>
                              </ul>
                        </div>

                    </div>
                </div>
            </section>



            <section className="section-padding" id="booking">
                <div className="container">
                    <div className="row">
                    
                        <div className="col-lg-8 col-12 mx-auto">
                            <div className="booking-form">
                                
                                <h2 className="text-center mb-lg-3 mb-2">Contact Us</h2>
                            
                                <form action="#booking" method="post">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required/>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required/>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <input type="telephone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="Phone: 123-456-7890"/>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <input type="date" name="date" id="date"  className="form-control"/>
                                            
                                        </div>

                                        <div className="col-12">
                                            <textarea className="form-control" rows="5" id="message" name="message" placeholder="Additional Message"></textarea>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-6 mx-auto">
                                            <button type="submit" className="form-control" id="submit-button">Book Now</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


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

export default Home;
