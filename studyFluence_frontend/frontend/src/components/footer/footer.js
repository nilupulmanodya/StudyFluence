/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
function Footer () {
    console.log('Footer here')

    return (

        <div>
            
            <footer className="site-footer section-padding" id="contact">
            <div className="container">
                <div className="row">

                    <div className="col-lg-5 me-auto col-12">
                        <h5 className="mb-lg-4 mb-3">Opening Hours</h5>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex">
                                Sunday : Closed
                            </li>

                            <li className="list-group-item d-flex">
                                Monday, Tuesday - Firday
                                <span>8:00 AM - 3:30 PM</span>
                            </li>

                            <li className="list-group-item d-flex">
                                Saturday
                                <span>10:30 AM - 5:30 PM</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 col-12 my-4 my-lg-0">
                        <h5 className="mb-lg-4 mb-3">Our Office</h5>

                        <p><a href="mailto:hello@company.co">studyfluence@company.co</a></p>

                        <p>123 Colombo, 4</p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 ms-auto">
                        <h5 className="mb-lg-4 mb-3">Socials</h5>

                        <ul className="social-icon">
                            <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                            <li><a href="#" className="social-icon-link bi-twitter"></a></li>

                            <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                            <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>

        </div>
    )
}



            

export default Footer