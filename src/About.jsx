import React from 'react';

function About(){
    return(
        <div id='about' className='container about shadow p-3 mb-5 bg-body rounded'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2>Skills</h2>
                    <div style={{width:'50px',height:'5px',backgroundColor:'violet',border:'1px solid violet'}}></div>
                    <p>HTML5</p>
                    <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width:'90%'}} aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>
                            90%
                        </div>
                    </div>
                    <p>CSS3</p>
                    <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width:'80%'}} aria-valuenow='80' aria-valuemin='0' aria-valuemax='100'>
                            80%
                        </div>
                    </div>
                    <p>JavaScript</p>
                    <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width:'70%'}} aria-valuenow='70' aria-valuemin='0' aria-valuemax='100'>
                            70%
                        </div>
                    </div>
                    <p>PHP</p>
                    <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width:'80%'}} aria-valuenow='80' aria-valuemin='0' aria-valuemax='100'>
                            80%
                        </div>
                    </div>
                    <p>C, C++ & Python</p>
                    <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width:'80%'}} aria-valuenow='80' aria-valuemin='0' aria-valuemax='100'>
                            80%
                        </div>
                    </div>
                    <p>Java</p>
                    <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width:'70%'}} aria-valuenow='70' aria-valuemin='0' aria-valuemax='100'>
                            70%
                        </div>
                    </div>
                    <p>React Js</p>
                    <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width:'50%'}} aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'>
                            50%
                        </div>
                    </div>
                    <p>Mysql</p>
                    <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width:'80%'}} aria-valuenow='80' aria-valuemin='0' aria-valuemax='100'>
                            80%
                        </div>
                    </div>
                    <p>Oracle</p>
                    <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width:'80%'}} aria-valuenow='80' aria-valuemin='0' aria-valuemax='100'>
                            80%
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 me'>
                    <h2>About me</h2>
                    <div style={{width:'100px',height:'5px',backgroundColor:'violet',border:'1px solid violet'}}></div>
                    <p>My name is Siddhesh Pravin Patki. I am currently studying in the final year of my engineering in
                    Computer Technology department from Yeshwantrao Chavan college of Engineering, Nagpur.</p>
                    <p>I am well equipped with various web technologies. I have knowledge of various programming languages including 
                    <b> C, C++, Java, Python</b>. I wish to work in web designing specifically.</p>
                    <p>Email : <b>siddhpp22@gmail.com</b></p>
                    <p>City : <b>Nagpur, Maharashtra</b></p>
                    <p>Education : B.E. in <b>Computer Technology</b></p>
                    <button className='btn btn-primary'>
                        <i class="fa fa-download"></i> 
                        <a href="https://drive.google.com/file/d/1sr5lCHiYJUPmewkem_MZnQlAIUcSc2Gl/view?usp=sharing" download style={{color:'white',textDecoration:'none'}}> Download Resume</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default About