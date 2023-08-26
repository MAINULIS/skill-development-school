import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='bg-slate-950 px-4 mx-auto py-5'>
            <div className=' flex items-center justify-between'>
                {/* logo section */}
                <Link to="/" className='inline-flex'>
                <BookOpenIcon className="h-7 w-7 text-sky-800" />
                <span className='ml-2 font-bold tracking-wide text-zinc-700 text-xl'>
                    Skill Development School
                </span>
                </Link>
                

                {/* Nav Items section */}
                <ul className='flex items-center space-x-8'>
                    <li>
                        <NavLink to ="/"
                        className={({isActive}) => (isActive ? 'active' : 'default')}
                        > Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses"
                        className={({isActive}) => (isActive ? 'active' : 'default')}
                        >Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                        className={({isActive}) => (isActive ? 'active' : 'default')}
                        >About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/contact"
                            className={({isActive}) => (isActive ? 'active' : 'default')}
                        >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;