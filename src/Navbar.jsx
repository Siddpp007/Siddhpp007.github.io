import React , {useState} from 'react'
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

export default function Navbar() {

    return (
        <div>
            <nav className='navbar navbar-expand-lg'>
                <div className='col-lg-7' style={{margin:'0 auto'}}>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
