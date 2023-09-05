import React from 'react'
import "./skills.css"
import TechnicalSkills from './TechnicalSkills'


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <TechnicalSkills />
            </div>
        </section>
    )
}

export default Skills