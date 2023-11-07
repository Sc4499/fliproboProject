import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Heading from './Heading';
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial from './education.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
        <>

            <div
                className={className}
                style={{ ...style, display: "block", width: "60px", height: "60px", borderRadius: "50%" }}
                onClick={onClick}
            />
        </>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", width: "60px", height: "60px", zIndex: 2, borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}
const Testimonial = () => {
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

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Heading
                subtitle="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                title="My Portfolio"
            />
            {testimonial ? (
                <div className='container mb-5 mt-5' id="testi">
                    <Slider {...settings}>
                        {testimonial.map((item, index) => {
                            return (
                                <div key={index} >
                                    <div class="card cardmainwrapper" style={isMobile ? { width: '19.5rem' } : { width: '21.5rem' }}>
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

                    </Slider>
                </div>) : (
                <p>LOADING...</p>
            )
            }
        </>


    )
}

export default Testimonial
