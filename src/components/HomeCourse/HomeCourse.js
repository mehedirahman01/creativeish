import React from 'react';

// Home Page Single Course
const HomeCourse = (props) => {
    const { title, instructor, time, price, enrolled, courseImage } = props.course
    return (
        <div className="col">
            <div className="card h-100">
                <img src={courseImage} className="card-img-top" alt="..." />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-light"><div className="d-flex justify-content-between">
                        <p className="m-0">{enrolled} students</p>
                        <p className="m-0">{time}</p>
                    </div></li>
                </ul>
                <div className="card-body pt">
                    <h5 className="card-title">{title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-light"><div className="d-flex justify-content-between">
                        <h6 className="fw-normal">{instructor}</h6>
                        <h6 className="fw-normal">{price}$</h6>
                    </div></li>
                </ul>
                <div className="card-footer bg-transparent">
                    <small className="text-muted">
                        <button className="btn btn-success">Enroll</button>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default HomeCourse;