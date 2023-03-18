function Hero (){
    console.log('Hero page')
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
            
        </main>






        </div>
    )
}

export default Hero;
