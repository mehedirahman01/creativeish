import React, { useEffect, useState } from 'react';
import HomeCourse from '../HomeCourse/HomeCourse';

const HomeCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className="container my-5">
            <h1 className="my-4">Our Most In-Demand Courses</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    courses.slice(0, 4).map(course => <HomeCourse course={course}></HomeCourse>)
                }
            </div>

        </div>
    );
};

export default HomeCourses;