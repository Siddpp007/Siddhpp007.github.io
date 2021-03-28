import React from 'react';

function Footer(){
    return(
        <div>
            <div id='contact' className='container-fluid footer'>
                <div className='container footer1 shadow p-3 mb-5 bg-body rounded'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>Send a message</h2>
                            <div style={{width:'150px',height:'5px',backgroundColor:'violet',border:'1px solid violet'}}></div>
                            <form action="">
                                <input className='form-control' type="text" placeholder='Your Name' /> <br/>
                                <input className='form-control' type="text" placeholder='Your Email' /> <br/>
                                <textarea placeholder='Your Message' className='form-control' cols="30" rows="10"></textarea> <br/>
                                <button className='btn btn-primary'>Send message</button>
                            </form>
                        </div>
                        <div className='col-lg-6'>
                            <h2>Connect with me</h2>
                            <div style={{width:'150px',height:'5px',backgroundColor:'violet',border:'1px solid violet'}}></div>
                            <h5>If you want to talk about my project or want to work with me, connect with me on any platform you want. I'd like to hear from you, or just write your message in the <b>Send a message</b> area.</h5>
                            <div className='social-icon'>
                                <span><a class="social" href="https://github.com/Siddpp007"><i style={{fontSize:'50px'}} aria-hidden="true" class="fa fa-github" data-toggle="tooltip" title="GitHub"></i></a></span>
                                <span><a class="social" href="https://www.linkedin.com/in/siddhesh-patki-15884b17a/"><i style={{fontSize:'50px'}} aria-hidden="true" class="fa fa-linkedin" data-toggle="tooltip" title="LinkedIn"></i></a></span>
                                <span><a class="social" href="https://www.instagram.com/siddhesh_patki/"><i style={{fontSize:'50px'}} aria-hidden="true" class="fa fa-instagram" data-toggle="tooltip" title="Instagram"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer