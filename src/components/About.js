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
                        An artist-turned-engineer, Nguyen utitlizes his acute sense of style and solid logical thinking to create attractive website applications that capture and maintain user's attention. 
                        {/* He believes the front-end <italic>is</italic> the face of the business and determines whether a company seems trustworthy and professional to customers. */}
                        </p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">Having worked at a mega company like Walt Disney, Nguyen is highly effective in both teamwork
                    and independent work. He is known for being flexible, hardworking and a fast learner. 
                        
                    </p></div>
                </div>
                {/* <!-- About Section Button--> */}
            </div>
        </section>
    )
}
