import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <div className="about__icon">
                    <i class="uil uil-award"></i>
                </div>
                <h3 className="about__title">Hard Worker</h3>
                <span className="about__subtitle">Self Motivated</span>
            </div>

            <div className="about__box">
                <div className="about__icon">
                    <i class="uil uil-smile"></i>
                </div>
                <h3 className="about__title">Friendly</h3>
                <span className="about__subtitle">Team Player</span>
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