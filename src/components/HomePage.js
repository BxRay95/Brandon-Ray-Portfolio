import React from 'react';
import '../App.css';
import Img1Portfolio from './images/Img1Portfolio.jpg'
import Me from './images/Me.png'

const HomePage = () => {
    return (
    <>
        <section className="home">
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
                    <h2>Full Stack Web Developer</h2>
                </div>
                <div className="short-motivation">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, impedit ea. Possimus aliquam error nostrum itaque nobis, pariatur minima exercitationem sequi suscipit quo ducimus quae porro, quia, ipsum quod molestias!
                    </p> 
                </div>
            </div>
        </section>
    </>
);
}

export default HomePage;
