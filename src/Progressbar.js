import React from 'react'
import "./Progressbar.css"

const Progressbar = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6'>
                    <p className='top-titles'>Features</p>
                    <h1 className="title-text">Design Skill</h1>

                    <div className="skill-box">
                        <span className="title">FIGMA</span>
                        <div className="skill-bar">
                            <span className="skill-per html">
                                <span className="tooltip">95%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">ADOBE XD</span>
                        <div className="skill-bar">
                            <span className="skill-per css">
                                <span className="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">PHOTOSHOP</span>
                        <div className="skill-bar">
                            <span className="skill-per javascript">
                                <span className="tooltip">60%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">ADOBE ILLUSTRATOR</span>
                        <div className="skill-bar">
                            <span className="skill-per nodejs">
                                <span className="tooltip">40%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">Design</span>
                        <div className="skill-bar">
                            <span className="skill-per reactjs">
                                <span className="tooltip">70%</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <p className='top-titles'>Features</p>
                    <h1 className="title-text">Development Skill</h1>

                    <div className="skill-box">
                        <span className="title">HTML</span>
                        <div className="skill-bar">
                            <span className="skill-per html">
                                <span className="tooltip">95%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">CSS</span>
                        <div className="skill-bar">
                            <span className="skill-per css">
                                <span className="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">JavaScript</span>
                        <div className="skill-bar">
                            <span className="skill-per javascript">
                                <span className="tooltip">60%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">SCSS</span>
                        <div className="skill-bar">
                            <span className="skill-per nodejs">
                                <span className="tooltip">40%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">ReactJS</span>
                        <div className="skill-bar">
                            <span className="skill-per reactjs">
                                <span className="tooltip">70%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Progressbar
