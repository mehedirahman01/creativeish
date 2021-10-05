import React, { useEffect, useState } from 'react';
import HomeCourse from '../HomeCourse/HomeCourse';

// Home Page All Courses
const HomeCourses = () => {
    const [courses, setCourses] = useState([])
    // Copy First 4 Courses
    const selectedCourses = courses.slice(0, 4)

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className="container my-5">
            <h1 className="my-4">Our Most In-Demand Courses</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    selectedCourses.map(course => <HomeCourse
                        key={course.id}
                        course={course}></HomeCourse>)
                }
            </div>

        </div>
    );
};

export default HomeCourses;