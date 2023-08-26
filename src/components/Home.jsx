import React from 'react';
import hero from "../assets/hero.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container '>
            <div className=' absolute text-center '>
            <img className=" object-cover object-center h-screen w-screen" alt="hero" src={hero} />
            </div>
            <div className='text-center justify-center relative  top-50% left-50% transform translate-x-0 translate-y-64'>
               <h2 className=' text-white text-5xl font-semibold'><span className='text-cyan-950 hover:text-cyan-900 '> Education</span> for everyone</h2>
               <p className='text-slate-400 text-2xl font-medium'>Skill development plays a pivotal role in personal growth. It enhances an individual's ability to adapt to changes, solve complex problems, and make informed decisions.</p>
               <Link
              to='/about'
              className='inline-flex text-3xl items-center justify-center font-bold text-slate-950 transition-colors duration-200 hover:text-stone-900 '
            >
              Learn More
            </Link>
            </div>
               
                </div>
                );
};

                export default Home;