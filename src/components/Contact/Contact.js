import React from 'react';

// Contact Page
const Contact = () => {
    return (
        <div className="container my-5 py-5 w-50">
            <h1>Contact us through this form</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                <label htmlFor="floatingTextarea2">Your Text</label>
            </div>
            <button type="submit" className="btn btn-success my-3">Send</button>
        </div >
    );
};

export default Contact;