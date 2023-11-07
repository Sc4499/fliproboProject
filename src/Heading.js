import React from 'react'
import './Heading.css';

const Heading = (prop) => {
    return (
        <>
            <hr className='divider' />
            <div className='heading'>
                <p>{prop.subtitle}</p>
                <h1>{prop.title}</h1>

            </div>
        </>
    )
}

export default Heading
