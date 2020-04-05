import React from 'react'

export default function About() {

    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ml-auto"><p className="lead">
                        An artist with strong analytical skills, I find the perfect
                        medium as a full-stack developer. 
                        </p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">I am effective in both teamwork
                    and independent work, with solid interpersonal and research skills.
                        
                    </p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div className="row mt-5">
                    <div className="col-lg-4 ml-auto"><p className="lead">
                        <div>HTML, CSS  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        <div>Bootstrap <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        <div>JavaScript <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>



                        </p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">
                        <div>ReactJS <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        <div>Python <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        <div>Git <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    </p></div>
                </div>
            </div>
        </section>
    )
}
