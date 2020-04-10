import React from 'react'

export default function Portfolio() {
    return (
        <section className="page-section portfolio" id="portfolio">
        <div className="container col-8">
            {/* <!-- Portfolio Section Heading--> */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Portfolio Grid Items--> */}
            <div className="row">
                {/* <!-- Portfolio Item 1--> */}
                <div className="col-md-6 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="./project1.png" alt="nguyen+" />
                    </div>
                    <h5 className="text-center mt-3">NGUYEN+ Movie App</h5>
                </div>
                {/* <!-- Portfolio Item 2--> */}
                <div className="col-md-6 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="./project2.png" alt="" />
                    </div>
                    <h5 className="text-center mt-3">Twitter Clone</h5>
                </div>
                </div>
                {/* <!-- Portfolio Item 3--> */}
                <div className="row">
                <div className="col-md-6 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="./project3.png" alt="" />
                    </div>
                    <h5 className="text-center mt-3">Github Issues</h5>
                </div>
                {/* <!-- Portfolio Item 4--> */}
                <div className="col-md-6 mb-5 mb-lg-0">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="./project4.png" alt="" />
                    </div>
                    <h5 className="text-center mt-3">BugCatcher Game</h5>
                </div>
            </div>
        </div>
    </section>
    )
}
