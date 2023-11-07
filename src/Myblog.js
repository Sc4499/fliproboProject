import React, { useEffect, useState } from 'react'
import './Myblog.css'
import cardDetails from './education.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Heading from './Heading'

const Myblog = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <Heading
                subtitle="VISIT MY BLOG AND KEEP YOUR FEEDBACK"
                title="My Blog"
            />
            {cardDetails ? (<div className='container mt-5' id="myblog">
                <div className='row'>
                    {cardDetails.map((item, index) => {
                        return (

                            <div className="col-md-4 mb-4" key={index} >
                                <div class="card cardmainwrapper" style={isMobile ? { width: '20.5rem' } : { width: '21.5rem' }}>
                                    <div className='imagewrapper'>
                                        <img src={item.image} class="card-img-top" alt="image-logo" />
                                    </div>
                                    <div class="card-body cardDetails">
                                        <div className='wishlistsec'>
                                            <a>{item.title}</a>
                                            <span><FontAwesomeIcon icon={faHeart} /> &nbsp;{item.wishlist}</span>
                                        </div>

                                        <p class="card-text">{item.desc}</p>
                                    </div>
                                </div>
                            </div>


                        )

                    })}
                </div>

            </div>) : (
                <p>Loading...</p>
            )}

        </>

    )
}

export default Myblog
