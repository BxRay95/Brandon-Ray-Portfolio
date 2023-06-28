import React from 'react';
import '../App.css';
import Img1Portfolio from './images/Img1Portfolio.jpg'
import Me from './images/Me.jpg'
import CSS from './images/CSS.png'
import html from './images/html5.png'
import javascript from './images/javascript.png'
import kotlin from './images/kotlin.png'
import rails from './images/rails.png'
import ruby from './images/ruby.png'
import reactlogo from './images/react.png'


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
                        <img src={Me} className="self-image" alt="My Self Image" height="2572px" width="3456px"/>     
                    </div>
                    <div className='full-stack-container'>
                        <div className="intro-name">
                            <h1>Hi, I'm <span style={{ color: '#ea1538' }}> Brandon </span></h1>
                        </div>
                        <div className="full-stack-web-developer">
                        </div>
                        <div className="short-motivation">
                            <p> I am a full-stack developer driven by my passion for creating visually stunning and user-friendly applications.
                            </p> 
                        </div>
                        <a href="#my-projects" className="button">View My Work</a>
                    </div>
                    <div className='tech-stack-container'>
                        <img src={javascript} alt="javascript-logo" height="100px" width="100px"/>
                        <img src={CSS} alt="css-logo" height="100px" width="75px"/>
                        <img src={html} alt="html-logo" height="100px" width="100px"/>
                        <img src={kotlin} alt="kotlin-logo" height="100px" width="100px"/>
                        <img src={rails} alt="rails-logo" height="100px" width="100px"/>
                        <img src={ruby} alt="ruby-logo" height="100px" width="100px"/>
                        <img src={reactlogo} alt="react-logo" height="100px" width="100px"/>
                    </div>
                
            </section>
        </>
    );
}

export default HomePage;