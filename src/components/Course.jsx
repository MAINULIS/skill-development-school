import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id, picture, courseName, duration} = course;
    return (
        <Link>
        <div className='rounded shadow-lg'>
            <img src={picture} alt="course picture" className='object-cover w-full h-56 ' />
            <div className='px-6 py-4 bg-stone-200 text-neutral-600 font-medium'>
                <p className='font-bold text-xl'>{courseName}</p>
                <p>Course Duration: {duration} month</p>
                <button className='inline-flex items-center h-12 px-6 font-bold mt-4 rounded text-neutral-800 bg-stone-500 hover:bg-stone-600 transition-colors duration-200'>About Course</button>
            </div>
        </div>
        </Link>
    );
};

export default Course;