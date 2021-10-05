import React from 'react';
import img from '../../images/banner.png'

// Cover Page Style
const coverStyle = {
    backgroundImage: `url(${img})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat'
}

// Cover Page
const Cover = () => {
    return (
        <div>
            <div style={coverStyle} className="d-flex align-items-center justify-content-center">
                <div>
                    <h1>Any People. Anywhere.</h1>
                    <h1>Can Learn Any Skill.</h1>
                    <h4>Access to the world's best experts who make it easy to learn new skills</h4>
                    <button className="btn btn-danger mt-5">Become a Member</button>
                </div>
            </div >
        </div >
    );
};

export default Cover;