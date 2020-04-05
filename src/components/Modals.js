import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Modals() {
    return (
        <div>
             {/* <!-- Portfolio Modals--><!-- Portfolio Modal 1--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Nguyen+ Movie App</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="./project1.png" alt="nguyen+ movie app" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                        My built-from-scratch React-JS site that utilizes API from movieDB.com. 
                                        Features include search by keyword and range, filter by rating, sort movies by rating or
                                        popularity, and pagination. 
                                        <div className="mt-2">ReactJS</div>
                                    <div>Async/Await</div>
                                    <div>Responsive</div>
                                    <div>Design & User Interface</div>
                                    </p>
                                    <a className="btn btn-primary" target="_blank" href="https://nguyen-plus-movie.netlify.com/">Go to site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 2--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Twitter Clone</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="./project2.png" alt="twitter clone" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                        Group project. I was the scrum master and designed the tweet, retweet, comment, hashtag and word 
                                        limit functions. I also composed and organized the final codes as well as strategized and led the team using git to ensure
                                        least amount of conflicts. 
                                        <div className="mt-2">Vanilla Javascript</div>
                                    <div>Async/Await</div>
                                    <div>Responsive</div>
                                    <div>Git</div>
                                    </p>
                                    <a className="btn btn-primary" target="_blank" href="https://group2-twitter-clone.netlify.com/">Go to site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 3--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Github Issues</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="./project3.png" alt="github issues" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                        Group project. I acted as the Product Owner, leading the team in visualizing the working process
                                        and assisted everyone with coding. Features include searching for Github repositories, looking
                                        up said repository's list of issues and viewing individual issues. User can also
                                        create new issues and comment on existing issues, and they all would be posted to
                                        the Github API and visible to everyone. 
                                        <div className="mt-2">ReactJS</div>
                                    <div>React Router</div>
                                    <div>Async/Await</div>
                                    <div>Git</div>
                                    </p>
                                    <a className="btn btn-primary" target="_blank" href="#">Go to site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 4--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">BugCatcher Game</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="./project4.png" alt="game bug catcher" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                        First game I ever made using HTML Canvas. This was one of the most challenging assignments
                                        I've ever had as it required a solid understanding of JavaScript and computational thinking.
                                        <div className="mt-2">ReactJS</div>
                                    <div>React Router</div>
                                    <div>Async/Await</div>
                                    <div>Git</div>
                                    </p>
                                    <a className="btn btn-primary" target="_blank" href="https://nguyen-bug-catcher-game.netlify.com/">Go to site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
