import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Contact Me</h4>
                        <p className="lead mb-0">n.dinhnguyen95@gmail.com <br/> Boston, MA<br />USA</p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        {/* <a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fab fa-fw fa-twitter"></i></a> */}
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/nguyen-nguyen-7b21447b/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" target="_blank" href="https://github.com/nnguyen150468"><i class="fab fa-fw fa-github"></i></a>
                    </div>
                    
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}
