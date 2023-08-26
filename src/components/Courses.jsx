import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData ();
    console.log(courses)
    return (
        <div className='px-4 mx-auto py-12'>
            <p className='text-4xl font-bold flex items-center justify-center mx-auto pb-10 text-stone-800 hover:text-neutral-700'>Our Courses</p>
            <div className='grid grid-cols-3 gap-6 mb-8'>
                {
                    courses.map(course => <Course
                    key={course.id}
                    course ={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;