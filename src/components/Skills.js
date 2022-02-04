import React from 'react'
import ProgressBar from 'react-animated-progress-bar';


export default function Skills() {
    // const progressBar = document.getElementsByClassName('progress-bar')[0]
    
    // setInterval(() => {
    //     console.log('progressBar', progressBar)
    //     // const computedStyle = getComputedStyle(progressBar)
    //     // const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    //     // progressBar.style.setProperty('--width', width + .1)
    // }, 5)

    const skills = [
        {
            name: "HTML, CSS, Bootstrap",
            level: 94
        }, 
        {
            name: "JavaScript",
            level: 95
        },
        {
            name: "ReactJS, React-Router, Redux",
            level: 95
        }, 
        {
            name: "NodeJS, Express, Handlebars",
            level: 90
        },
        {
            name: "MongoDB NoSQL",
            level: 85
        },
        {
            name: "English",
            level: 99
        },
        {
            name: "Vietnamese",
            level: 99
        }
    ]

    return (
        <section className="page-section" id="skills">
            <div className="container">
                {/* <!-- Contact Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Contact Section Form--> */}
                <div className="row">
                <div className="left col-md-6 col-sm-12">
                    <div className="skill-bars mb-4 mr-3 html" 
                    data-label="HTML"></div>
                    <div className="skill-bars mb-4 mr-3 css" 
                    data-label="CSS"></div>
                    <div className="skill-bars mb-4 mr-3 bootstrap" 
                    data-label="Bootstrap"></div>
                    <div className="skill-bars mb-4 mr-3 javascript"
                    data-label="JavaScript"></div>
                </div>
                <div className="right col-md-6 col-sm-12">
                    <div className="skill-bars mb-4 mr-3 reactjs"
                    data-label="ReactJS"></div>
                    <div className="skill-bars mb-4 mr-3 nodejs"
                    data-label="NodeJS"></div>
                    <div className="skill-bars mb-4 mr-3 mongodb"
                    data-label="MongoDB NoSQL"></div>
                    <div className="skill-bars mb-4 mr-3 git"
                    data-label="Git"></div>
                    {/* {skills.map(el => <ProgressBar style={{width: "80%", marginBottom: "1em"}} now={el.level} label={`${el.name}`} />)} */}
                </div>
                </div>
                <div className="d-flex justify-content-around pie-chart">
                <div className="text-center">
                    <ProgressBar 
                    // hollowBackgroundColor="black"
                    width="500" 
                    fontColor="gray"
                    trackWidth="18" 
                    percentage="99" />
                    Time Management
                </div>
                <div className="text-center">
                    <ProgressBar 
                    // hollowBackgroundColor="black"
                    width="500" 
                    fontColor="gray"
                    trackWidth="18" 
                    percentage="99" />
                    Building Connections
                </div>
                <div className=" text-center">
                <ProgressBar 
                    width="500" 
                    fontColor="gray"
                    trackWidth="18" 
                    percentage="93" />
                    Teamwork
                    </div>
                    <div className="text-center">
                <ProgressBar 
                    width="500" 
                    fontColor="gray"
                    trackWidth="18" 
                    percentage="94" />
                    Communication
            </div>
            
                </div>
            </div>
        </section>
    )
}

