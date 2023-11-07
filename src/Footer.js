import React from 'react'
import "./Footer.css"
import logo from "../src/myimage.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <hr className='divider' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="footerwrapper">
                            <div className='footerlogo'>
                                <img src={logo} alt="logo"></img>
                            </div>
                            <div>
                                <h1 className='logoname'>INBIO</h1>
                            </div>

                        </div>
                        <div className="socialicon">
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                            <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                        </div>
                    </div>
                    <div className='col-md-3 footerlinks'>
                        <h2>PRODUCT</h2>
                        <ul>
                            <li>Database</li>
                            <li>Authentication</li>
                            <li>Storage</li>
                            <li>Support</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className='col-md-3 footerlinks'>
                        <h2>RESOURCES</h2>
                        <ul>
                            <li>Authentication</li>
                            <li>System Status</li>
                            <li>Terms of service</li>
                            <li>Pricing</li>
                            <li>over right</li>
                        </ul>
                    </div>
                    <div className='col-md-2 footerlinks'>
                        <h2>DEVELOPERS</h2>
                        <ul>
                            <li>Documentation</li>
                            <li>Authentication</li>
                            <li>API Reference</li>
                            <li>Support</li>
                            <li>Open Source</li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr className='divider' />
        </>
    )
}

export default Footer
