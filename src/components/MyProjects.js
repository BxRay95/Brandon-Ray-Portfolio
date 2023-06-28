import React from 'react'
import Pokellection from './images/Pokellection.mp4'
import TreasureHuntGame from './images/TreasureHuntGame.mp4'
import CSS from './images/CSS.png'
import html from './images/html5.png'
import javascript from './images/javascript.png'
import kotlin from './images/kotlin.png'
import rails from './images/rails.png'
import ruby from './images/ruby.png'
import reactlogo from './images/react.png'
import rspec from './images/rspec.png'
import androidstudio from './images/androidstudio.png'
import jestlogo from './images/jestlogo.png'
import postgresql from './images/postgresql.png'

const MyProjects = () => {
    return (
        <>
            <section class="my-projects-section" id="my-projects">
                <h1 className='my-projects-header'>My Projects</h1>
                <div className="my-projects" >
                    <div className='pokellection-project-container'>
                        <video src={Pokellection} width="600" height="400" controls="controls" className='pokellection-project'/>
                        <div className='view-buttons'> 
                            <a href='https://bsj2-development-pokellection.onrender.com' target="_blank" class="view-project-button"> View Site </a>
                            <a href='https://github.com/BSJ2-Development/pokellection' target="_blank" class="view-project-button"> View Code</a>
                        </div>
                    </div>
                    <div className='treasure-hunt-project-container'>
                        <video src={TreasureHuntGame} width="600" height="400" controls="controls" className='pokellection-project'/>
                        <div className='view-buttons'> 
                            <a href='https://bxray95.github.io/Treasure-Hunt-Game/' target="_blank" class="view-project-button"> View Site </a>
                            <a href='https://github.com/BxRay95/Treasure-Hunt-Game' target="_blank" class="view-project-button"> View Code</a>
                        </div>
                    </div>
                </div>
                <section className='my-skills' id='skills'>
                    <h1 className='skills-header'>My Skills</h1>
                    <div className='skills-container'>
                        <div className='javascript-container'>
                        <img src={javascript} alt="javascript-logo" height="100px" width="100px"/>
                            <h3>Javascript</h3>
                        </div>

                        <div className='css-container'>
                        <img src={CSS} alt="css-logo" height="100px" width="100px"/>
                            <h3>CSS</h3>
                        </div>

                        <div className='html-container'>
                        <img src={html} alt="html-logo" height="100px" width="100px"/>
                            <h3>Html</h3>
                        </div>

                        <div className='kotlin-container'>
                        <img src={kotlin} alt="kotlin-logo" height="100px" width="100px"/>
                            <h3>Kotlin</h3>
                        </div>

                        <div className='rails-container'>
                        <img src={rails} alt="rails-logo" height="100px" width="100px"/>
                            <h3>Rails</h3>
                        </div>

                        <div className='ruby-container'>
                        <img src={ruby} alt="ruby-logo" height="100px" width="100px"/>
                            <h3>Ruby</h3>
                        </div>

                        <div className='react-logo-container'>
                        <img src={reactlogo} alt="react-logo" height="100px" width="100px"/>
                            <h3>React</h3>
                        </div>

                        <div className='androidstudio-logo-container'>
                        <img src={androidstudio} alt="androidstudio-logo" height="100px" width="100px"/>
                            <h3>Android Studio</h3>
                        </div>
                        
                        <div className='postgresql-logo-container'>
                        <img src={postgresql} alt="postgresql-logo" height="100px" width="100px"/>
                            <h3>Postgresql</h3>
                        </div>

                        <div className='rspec-logo-container'>
                        <img src={rspec} alt="rspec-logo" height="100px" width="100px"/>
                            <h3>RSPEC</h3>
                        </div>

                        <div className='jest-logo-container'>
                        <img src={jestlogo} alt="jest-logo" height="100px" width="100px"/>
                            <h3>Jest</h3>
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}

export default MyProjects