import React from 'react';
import './introduction.scss'
import introductionImg from './../../assets/img/introduction-bg@2x.png'

const Introduction = () => {
    return (
        <div className='introduction'>
            <img src={introductionImg} alt="" />
            <div className="container">
                <div className="introduction-text">
                    <h1>What Happened!</h1>
                    <p>How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                        step to your brand's success. How to create
                        mobile-optimized videos in minutes.</p>
                </div>
            </div>
        </div>
    )
};

export default Introduction;
