import React, { useState } from 'react'
import "./Tabed.css"
import Timeline from './Timeline';
import Progressbar from './Progressbar';
import Heading from './Heading';

const Tabed = () => {

    const [activeCity, setActiveCity] = useState('Education');

    const openCity = (cityName) => {
        const cities = document.getElementsByClassName('city');
        for (let i = 0; i < cities.length; i++) {
            cities[i].style.display = 'none';
        }

        const selectedCity = document.getElementById(cityName);
        if (selectedCity) {
            selectedCity.style.display = 'block';
            setActiveCity(cityName);
        }
    };
    return (
        <>
            <Heading
                subtitle="7+ YEARS OF EXPERIENCE"
                title="My Resume"
            />
            <div className='container mt-5' id="portfolio">
                <div className="buttonaction">
                    <button className="active1" onClick={() => openCity('Education')}>Education</button>
                    <button className="active2" onClick={() => openCity('Professional Skills')}>Professional Skills</button>
                    <button className="active3" onClick={() => openCity('Experience')}>Experience</button>
                    <button className="active4" onClick={() => openCity('Interview')}>Interview</button>
                </div>

                <div id="Education" className={`tabContainer city ${activeCity === 'Education' ? '' : 'hidden'}`}>
                    <Timeline />
                </div>

                <div id="Professional Skills" className={`tabContainer city ${activeCity === 'Professional Skills' ? '' : 'hidden'}`}>
                    <Progressbar />
                </div>

                <div id="Experience" className={`tabContainer city ${activeCity === 'Experience' ? '' : 'hidden'}`}>
                    <Timeline />
                </div>
                <div id="Interview" className={`tabContainer city ${activeCity === 'Interview' ? '' : 'hidden'}`}>
                    <Timeline />
                </div>
            </div>
        </>
    );
};



export default Tabed
