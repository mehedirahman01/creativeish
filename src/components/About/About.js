import React from 'react';
import img from '../../images/about.jpg'

// About Page Style
const aboutStyle = {
    backgroundImage: `url(${img})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat'
}

// About Page
const About = () => {
    return (
        <div>
            <div style={aboutStyle} className="d-flex align-items-center justify-content-center">
                <div className="bg-white p-3">
                    <h1>Welcome to Creativeish. We're glad and grateful that you're here.</h1>
                    <h6>We're a team of enthusiastic people who are trying to make skill development easy and accessible to you. We started our journey at the beginning of the year and got huge response from people all over the world. Thank you for inspiring us to work hard. Stay with us.</h6>
                </div>
            </div >
        </div>
    );
};

export default About;