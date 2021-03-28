import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
function Work(){

    useEffect(()=>{
        AOS.init()
    },[])

    return(
        <div className='work' id='work'>
            <div>
                <h1>Work</h1>
                <div style={{width:'70px',height:'5px',backgroundColor:'violet',border:'1px solid violet',margin:'0 auto'}}></div>
            </div>
            <div data-aos="fade-in" className='container work-body'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h2>Internship</h2>
                        <div style={{width:'70px',height:'5px',backgroundColor:'violet',border:'1px solid violet'}}></div>
                        <h5 style={{marginTop:'30px'}}>Arcskill Technologies, Banglore</h5>
                        <p>Web Designer</p>
                        <p>06/2020 - 08/2020</p>
                        <ul>
                            <li>Worked closely to buold an e-learning website.</li>
                            <li>Optimized user interface solutions for the website.</li>
                            <li>Assisted with the fellow teammates to optimize the HTML&CSS code.</li>
                        </ul>
                    </div>
                    <div className='col-lg-5 research'>
                        <h2>Research Paper</h2>
                        <div style={{width:'70px',height:'5px',backgroundColor:'violet',border:'1px solid violet'}}></div>
                        <h5 style={{marginTop:'30px'}}><b>A voice controlled web application</b></h5>
                        <p>E-ICAIML 2020</p>
                        <p>Received <b>Best Paper Award</b> in International Conference on Recent Trends in Machine Learning and Artificial
                        Intelligence in the field of Science & Technology</p>
                    </div>
                </div>

                <div className='row project justify-content-center'>
                    <div>
                        <h3>projects</h3>
                        <div style={{width:'70px',height:'5px',backgroundColor:'violet',border:'1px solid violet',margin:'0 auto'}}></div>
                    </div>
                    <div className='row justify-content-center' style={{marginTop:'20px'}}>
                        <div className='col-lg-5'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h5><b>Seminar on IoT Integrated with Google Assistant (2019)</b></h5>
                                    </div>
                                    <div className='card-text'>
                                        <p>A model based on the home automation which operates a LED through the Google Assistant.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h5><b>An Enhanced E-Commerce Using AI – Mini Project (2020)</b></h5>
                                    </div>
                                    <div className='card-text'>
                                        <p>A model based on the home automation which operates a LED through the Google Assistant.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h5><b>Asset Management System – Principal Global Hackathon (2020)</b></h5>
                                    </div>
                                    <div className='card-text'>
                                        <p>This project is made under the Hackathon Conducted by Principal Global Services wherein an Asset
                                        Management System is built for proper allocation, de-allocation, reallocation, tracking, availability, employee
                                        details, reports and survey of assets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h5><b>A VOICE CONTROLLED WEB APPLICATION-MAJOR PROJECT(ONGOING)</b></h5>
                                    </div>
                                    <div className='card-text'>
                                        <p>An Ecommerce Web Application which completely operates on user's speech input.</p>
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
export default Work