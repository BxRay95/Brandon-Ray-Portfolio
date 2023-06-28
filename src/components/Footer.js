import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <h5 className='social-header'>Find me on social media: </h5>
            <div className='social-links'>
                <div className='github-logo-container'>
                    <a href="https://github.com/BxRay95" target="_blank">
                        <img src={github} alt='github-logo' height="75px" width="75px"/>
                    </a>
                </div>
                <div className='linkedin-logo-container'>
                    <a href="https://www.linkedin.com/in/brandon-ray95/" target="_blank">
                        <img src={linkedin} alt='linkedin-logo' height="75px" width="75px" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer