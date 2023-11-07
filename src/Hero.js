import React from 'react'
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import image from './professional.jpg'

function Hero() {
    return (
        <div class="container mt-4" id="home">
            <div class="row">
                <div class="col col-md-5">
                    <div>
                        <div className='left-box'>
                            <div className='usericon'>
                                <span className='spanicon'><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                            <h1>Hi, I'm <span>InBio</span></h1>
                            <p>Web designer and developer working for envato.com in Paris, France.</p>
                            <div className='contactbox'>
                                <div><span><FontAwesomeIcon icon={faFile} />Web designer & developer</span></div>
                                <div><span><FontAwesomeIcon icon={faEnvelope} />john.slady@gmail.com</span></div>
                                <div><span><FontAwesomeIcon icon={faLocationDot} />Paris fan</span></div>
                            </div>
                        </div>
                        <div className=' left-box-two'>
                            <p>Download my curriculum vitae:</p>
                            <div className='actionBtn'>
                                <button>DOWNLOAD CV</button>
                                <button>CONTACT ME</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col col-md-7">
                    <div className=' right-box'>
                        <img className='rounded' src={image} alt="image"></img>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero