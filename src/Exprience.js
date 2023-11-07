import React from 'react'
import './Exprience.css'
import carddata from './record.json'
import Heading from './Heading'

const Exprience = ({ myEducation = false }) => {
    console.log(carddata)


    return (

        <>

            {myEducation ? (<Heading
                subtitle="PHD, MASTER AND BACHELO"
                title="Education"
            />) : (<Heading
                subtitle="OVER 10 YEARS OF EXPERIENCE"
                title="My Experience"
            />)
            }
            {carddata ? (<div className='container' id={myEducation ? "about" : "expone"}>
                {carddata.map((item, index) => {
                    return (
                        < div key={index} class="card mb-3 cardWrapper border-0" >
                            <div class="row g-0">

                                <div class="col-md-3">
                                    <img src={item.image} class="img-fluid rounded cardimage" alt="logo" />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <span className='duretion'>{item.duretion}</span>
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text designation">{item.designation}</p>
                                        <p class="card-text desc">{item.desc}</p>
                                    </div>
                                </div >
                                <div class="col-md-3">
                                    <div className='actionBtnCard'>
                                        <button>CONTACT ME</button>
                                    </div>
                                </div >

                            </div>


                        </div>
                    )

                })}
            </div>
            ) : (
                <p>Loading...</p>
            )

            }

        </>



    )
}

export default Exprience
