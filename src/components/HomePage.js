import React from 'react';
import '../App.css';
import Img1Portfolio from './images/Img1Portfolio.jpg'
import Me from './images/Me.png'

const HomePage = () => {
    return (
        <>
            <section className="#home" id='#'>
                <div className='cherry-blossum-img'>
                    <img src={Img1Portfolio} alt="My Image" height="550px" width="800px" style={{ borderRadius: '30px' }} />         
                </div>
                <div>
                    <div className="self-image-grey-container">
                        <p className="about-me-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, tenetur enim ratione neque maxime ipsam pariatur totam laudantium quos quaerat? </p>
                    </div>           
                    <div className="self-image">
                        <img src={Me} alt="My Self Image" />     
                    </div>
                </div>
                <div className='full-stack-container'>
                    <div className="intro-name">
                        <h1>Hi, I'm <span style={{ color: '#ea1538' }}> Brandon </span></h1>
                    </div>
                    <div className="full-stack-web-developer">
                        <br /> 
                        <h2>Full Stack Software Developer</h2>
                    </div>
                    <div className="short-motivation">
                        <p>As a brand new software developer armed with the latest skills and knowledge, I am eager to embark on this thrilling journey as a software developer. I am confident in my ability to tackle complex coding challenges, collaborate with fellow developers, and contribute meaningfully to innovative projects. Ready to make my mark in the industry, I am motivated to continuously learn and grow as a professional software developer.
                        </p> 
                        <a href="#my-projects" className="button">Click Here To See My Work</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;