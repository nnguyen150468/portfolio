import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CopyRight() {
    return (
        <div>
        {/* // <!-- Copyright Section--> */}
        <section className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright © Nguyen Nguyen {new Date().getFullYear()}</small></div>
        </section>
        {/* // <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
        <div className="scroll-to-top d-lg-none position-fixed">
            <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
        </div>
        </div>
    )
}
