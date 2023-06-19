import React from 'react'
import Pokellection from './images/Pokellection.mp4'
import TreasureHuntGame from './images/TreasureHuntGame.mp4'

const MyProjects = () => {
    return (
        <>
                <section class="my-projects-section" id="my-projects">
                    <h1 className='my-projects-header'>My Projects</h1>
                    <div className="my-projects" >
                        <div className='pokellection-project-container'>
                            <video src={Pokellection} width="600" height="400" controls="controls" className='pokellection-project'/>
                            <a href='https://bsj2-development-pokellection.onrender.com' target="_blank" class="view-project-button"> Click to View </a>
                        </div>

                        <div className='treasure-hunt-project-container'>
                            <video src={TreasureHuntGame} width="600" height="400" controls="controls" className='pokellection-project'/>
                            <a href='https://bxray95.github.io/Treasure-Hunt-Game/' target="_blank" class="view-project-button"> Click to View </a>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default MyProjects