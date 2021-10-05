import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

// All Courses
const Courses = () => {
    const [courses, setCourses] = useState([])

    // Load Data
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className="container my-5">
            <h1 className="my-4">Explore Our Courses</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}></Course>)
                }
            </div>

        </div>
    );
};

export default Courses;