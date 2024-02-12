import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const MOVIE_URL = "https://nguyen-plus-movie.netlify.com/"
const CHATTIE_URL = "https://nguyen-chattie.netlify.app/"
const TEEN_LONG_URL ="https://teen-long.netlify.app/"
const MEME_MAKER_URL = 'https://nguyen-meme-maker.onrender.com/'
const TWITTER_URL = "https://group2-twitter-clone.netlify.com/"
const BUG_CATCHER_URL = "https://nguyen-bug-catcher-game.netlify.com/"
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
                                    <a target="_blank" href={MOVIE_URL}>
                                    <img className="img-fluid rounded mb-5" src="./project1.png" alt="nguyen+ movie app"
                                     /></a>
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                        My built-from-scratch <strong>React-JS</strong> site that utilizes <strong>API</strong> from movieDB.com. 
                                        Features include <strong>search</strong> by keyword and range, <strong>filter</strong> by rating, <strong>sort</strong> movies by rating or
                                        popularity, and <strong>pagination</strong>. 

                                    <div className="mt-4">
                                    <div className="badge badge-pill badge-danger mr-1">ReactJS</div>
                                    <div className="badge badge-pill badge-danger mr-1">Async/Await</div>
                                    <div className="badge badge-pill badge-danger mr-1">Responsive</div>
                                    <div className="badge badge-pill badge-danger mr-1">Design & User Interface</div>
                                    </div>
                                    </p>
                                    <a className="btn btn-primary mr-2" target="_blank" href={MOVIE_URL}>Website</a>
                                    <a className="btn btn-success" target="_blank" href="https://github.com/nnguyen150468/movieApp">Github</a>
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
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Chattie</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <a target="_blank" href={CHATTIE_URL}>
                                    <img className="img-fluid rounded mb-5" src="./project2.png" alt="game bug catcher" />
                                    </a>
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                        Chat room application using <strong>Websocket</strong> to create <strong>real-time</strong> interaction between client and server. There are several channels for user to join and only members of specific channels can see the channel's messages.
                                    

                                    <div className="mt-4">
                                        <div className="badge badge-pill badge-success mr-1">NodeJS</div>
                                        <div className="badge badge-pill badge-success mr-1">Websocket</div>
                                        <div className="badge badge-pill badge-warning mr-1">Backend server on Heroku</div>
                                        <div className="badge badge-pill badge-success mr-1">NoSQL databse on MLab</div>
                                        <div className="badge badge-pill badge-success mr-1">Mongoose</div>
                                        <div className="badge badge-pill badge-danger mr-1">User Interface Design</div>
                                        <div className="badge badge-pill badge-danger mr-1">ReactJS</div>
                                    </div>
                                    </p>  
                                    <a className="btn btn-primary mr-2" target="_blank" href={CHATTIE_URL}>Website</a>
                                    <a className="btn btn-success" target="_blank" href="https://github.com/nnguyen150468/chat-backend-new">Github</a>
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
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Meme Maker</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <a target="_blank" href={MEME_MAKER_URL}>
                                    <img className="img-fluid rounded mb-5" src="./project3.png" alt="github issues" />
                                    </a>
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                        My first <strong>NodeJS</strong> project, using <strong>multer</strong> to upload pictures, <strong>Jimp</strong> to add text to the images, <strong>express</strong> for routing, <strong>handlebars</strong> for rendering.
                                    
                                    <div className="mt-4">
                                        <div className="badge badge-pill badge-success mr-1">NodeJS</div>
                                        <div className="badge badge-pill badge-success mr-1">Express</div>
                                        <div className="badge badge-pill badge-success mr-1">Async/Await</div>
                                        <div className="badge badge-pill badge-success mr-1">Multer</div>
                                        <div className="badge badge-pill badge-success mr-1">Jimp</div>
                                        <div className="badge badge-pill badge-danger mr-1">Handlebars</div>
                                        <div className="badge badge-pill badge-warning mr-1">Backend server on Heroku</div>
                                    </div>
                                    </p>
                                    <a className="btn btn-primary mr-2" target="_blank" href={MEME_MAKER_URL}>Website</a>
                                    <a className="btn btn-success" target="_blank" href="https://github.com/nnguyen150468/meme-maker">Github</a>
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
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Twitter Clone</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <a target="_blank" href={TWITTER_URL}>
                                    <img className="img-fluid rounded mb-5" src="./project4.png" alt="twitter clone" />
                                    </a>
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                        <strong>Group</strong> project. Using <strong>pure JavaScript</strong> I designed the <strong>tweet, retweet, comment, hashtag and word 
                                        limit functions</strong>. I also composed and organized the final codes as well as strategized and led the team using git to ensure
                                        least amount of conflicts. I updated the app with an online <strong>mock API</strong> deployed to <strong>Heroku</strong> afterwards.

                                    <div className="mt-4">
                                    <div className="badge badge-pill badge-danger mr-1">Vanilla Javascript</div>
                                    <div className="badge badge-pill badge-danger mr-1">Async/Await</div>
                                    <div className="badge badge-pill badge-danger mr-1">Responsive</div>
                                    <div className="badge badge-pill badge-warning mr-1">Git</div>
                                    <div className="badge badge-pill badge-warning mr-1">Heroku</div>
                                    </div>   
                                    </p>
                                    <a className="btn btn-primary mr-2" target="_blank" href={TWITTER_URL}>Website</a>
                                    <a className="btn btn-success" target="_blank" href="https://github.com/nnguyen150468/twitterClone">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 5--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
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
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Teen-Lóng</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <a target="_blank" href={TEEN_LONG_URL}>
                                    <img className="img-fluid rounded mb-5" src="./project5.png" alt="teen-long" />
                                    </a>
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">

                                        A <strong>full-stack,</strong> open dictionary for Vietnamese slangs where users contribute and vote for the most popular definition of contemporary Vietnamese slangs.
                                        User can sign in with Google or Facebook, create new word, search and filter words by first character, vote or downvote definitions they don't like. Database is hosted on MongoDB.

                                    <div className="mt-4">
                                        <div className="badge badge-pill badge-danger mr-1">ReactJS</div>
                                        <div className="badge badge-pill badge-danger mr-1">React Router</div>
                                        <div className="badge badge-pill badge-success mr-1">NodeJS</div>
                                        <div className="badge badge-pill badge-success mr-1">Mongoose</div>
                                        <div className="badge badge-pill badge-success mr-1">MongoDB NoSQL</div>
                                        <div className="badge badge-pill badge-warning mr-1">Heroku</div>
                                    </div>
                                    </p>
                                    <a className="btn btn-primary mr-2" hreftarget="_blank" href={TEEN_LONG_URL}>Website</a>
                                    <a className="btn btn-success" target="_blank" href="https://github.com/nnguyen150468/teenLong-backend">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 6--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
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
                                    <a target="_blank" href={BUG_CATCHER_URL}>
                                    <img className="img-fluid rounded mb-5" src="./project6.png" alt="game bug catcher" />
                                    </a>
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                        First game I ever made using <strong>HTML Canvas</strong>. This was one of the most challenging assignments
                                        I've ever had as it required a solid understanding of JavaScript and computational thinking.
                                    
                                    <div className="mt-4">
                                        <div className="badge badge-pill badge-danger mr-1">HTML5 Canvas</div>
                                        <div className="badge badge-pill badge-danger mr-1">Vanilla JavaScript</div>
                                        <div className="badge badge-pill badge-danger mr-1">Design and User Effect</div>
                                        <div className="badge badge-pill badge-danger mr-1">Git</div>
                                    </div>
                                    </p>
                                    <a className="btn btn-primary mr-2" target="_blank" href={BUG_CATCHER_URL}>Website</a>
                                    <a className="btn btn-success" target="_blank" href="https://github.com/nnguyen150468/bugCatcherGame">Github</a>
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
