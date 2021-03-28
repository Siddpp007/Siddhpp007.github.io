import React, { useEffect } from 'react';
import Typed from 'react-typed';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ParticlesBg from 'particles-bg';
import AOS from 'aos'

function Preview(){

    const textlines = ['Front End Developer','Back End Developer','Computer Engineer']

    return(
        <div>
            <div className='preview'>
                <ParticlesBg type='lines' bg={true} />
                <h1 style={{marginTop:'100px'}}>Hello, My name is <strong>Siddhesh Pravin Patki</strong></h1>
                <h1 style={{marginTop:'50px',color:'orange'}}><Typed strings={textlines} typeSpeed={80} backSpeed={80} loop /></h1>
                <button className='btn btn-primary'><h5><a href="#work">Click here to See My Work</a></h5></button>
                <div className='social-icon'>
                    <span style={{padding:'30px'}}><a class="social" href="https://github.com/Siddpp007"><i aria-hidden="true" class="fa fa-github" data-toggle="tooltip" title="GitHub"></i></a></span>
                    <span style={{padding:'30px'}}><a class="social" href="https://www.linkedin.com/in/siddhesh-patki-15884b17a/"><i aria-hidden="true" class="fa fa-linkedin" data-toggle="tooltip" title="LinkedIn"></i></a></span>
                    <span style={{padding:'30px'}}><a class="social" href="https://www.instagram.com/siddhesh_patki/"><i aria-hidden="true" class="fa fa-instagram" data-toggle="tooltip" title="Instagram"></i></a></span>
                </div>
            </div>
            
        </div>
    )
}
export default Preview