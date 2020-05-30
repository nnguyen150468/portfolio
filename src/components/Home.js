import React, {useState} from 'react'
import Header from './Header'
import Portfolio from './Portfolio'
import About from './About'
import Footer from './Footer'
import Contact from './Contact'
import Skills from './Skills'
import Thumbnail from './Thumbnail'
import CopyRight from './CopyRight'
import Modals from './Modals'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Home() {
 
    
    return (
        <div>
            <Header />
            
            <Thumbnail />
            
            <Skills />
        
            <Portfolio />
            <About />
            {/* <Contact /> */}
            <CopyRight />
            <Modals />
            <Footer/>
        </div>
    )
}
