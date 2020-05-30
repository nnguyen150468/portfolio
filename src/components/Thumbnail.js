import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Thumbnail() {
    return (
        <header id="page-top" className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            {/* <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" /> */}
            
             <h1 className="masthead-heading text-uppercase mb-0">NGUYEN NGUYEN</h1>
            

            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            
            <p className="masthead-subheading font-weight-light mb-0">Artist - Software Engineer</p>
            <a id="view-resume" className="masthead-subheading font-weight-light mb-0 mt-5 p-2" href="https://drive.google.com/file/d/1hHGkE4W4Lt-d1F7VTJkXLsvea8q_tmr2/view?fbclid=IwAR2JLhBbPWtz_FZxmBfdF9BhwcfhA3qiNza4D_NNz8VzVhaCcYaX3NW-PYQ" target="_blank"
            style={{ color:"white", border: "4px solid white"}}>
                View Resume</a>
        </div>
    </header>
    )
}
