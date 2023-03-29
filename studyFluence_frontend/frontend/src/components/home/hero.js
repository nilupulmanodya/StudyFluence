function Hero (){
    console.log('Hero page')
    return (

             
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
                            </div>
                            <div className="col-md-6 ps-0">

                            <div className="heroText d-flex flex-column justify-content-center">

                                <h1 className="mt-auto mb-2">
                                    Study
                                    <div className="animated-info">
                                        <span className="animated-item">Fast</span>
                                        <span className="animated-item">Smoothly</span>
                                        <span className="animated-item">Easily</span>
                                    </div>
                                </h1>

                                <p className="mb-4">Welcome to Studyfluence! We specialize in providing personalized academic and career guidance to
                                    students who are looking to achieve their goals. Our team of experienced professionals is dedicated
                                    to helping you succeed by providing you with customized support and guidance based on your
                                    unique needs and interests. Regardless of your grade in school, we have the resources and
                                    expertise to help you make the most of your education and achieve your dreams. Browse our site to
                                    learn more about our services and how we can help you reach your full potential.</p>

                                {/* <div className="heroLinks d-flex flex-wrap align-items-center">
                                    <a className="custom-link me-4" href="#about" data-hover="Learn More">Learn More</a>

                                    <p className="contact-phone mb-0"><i className="bi-phone"></i> +94-023-0340</p>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
      
    )
}

export default Hero;
