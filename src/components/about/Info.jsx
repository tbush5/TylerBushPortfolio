import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <div className="about__icon">
                    <i class="uil uil-award"></i>
                </div>
                <h3 className="about__title">Entreprenuer</h3>
                <span className="about__subtitle">Self-Starter/ Self-Learner</span>
            </div>

            <div className="about__box">
                <div className="about__icon">
                    <i class="uil uil-smile"></i>
                </div>
                <h3 className="about__title">Customer Service</h3>
                <span className="about__subtitle">6+ years of experience</span>
            </div>

            <div className="about__box">
                <div className="about__icon">
                    <i class="uil uil-university"></i>
                </div>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">B.S. Computer Science</span>
            </div>
        </div>
    )
}

export default Info