import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';


const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className="container my-5">
            <h1 className="my-4">Explore Our Courses</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    courses.map(course => <Course course={course}></Course>)

                }
            </div>

        </div>
    );
};

export default Courses;