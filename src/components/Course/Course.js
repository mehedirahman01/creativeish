import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const bookmark = <FontAwesomeIcon icon={faBookmark} />

const Course = (props) => {
    const { title, instructor, time, enrolled, courseImage } = props.course
    return (
        <div class="col">
            <div class="card h-100">
                <img src={courseImage} class="card-img-top" alt="..." />
                <div className="d-flex justify-content-between mx-3 pt-4">
                    <p>{enrolled} students</p>
                    <p>{time}</p>
                </div>
                <div class="card-body pt-0">
                    <h5 class="card-title">{title}</h5>
                </div>
                <div class="card-footer">
                    <small class="text-muted">
                        <div className="d-flex justify-content-between">
                            <h6>{instructor}</h6>
                            <h6>{bookmark}</h6>
                        </div>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Course;