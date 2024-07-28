import { Navbar, TextInput, Button } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const location = useLocation().pathname;

  return (
    <Navbar className='border-b-2 border-teal-500 bg-gray-50'>
      <Navbar.Brand>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-gray-800'>
          <span className='px-2 py-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-lg text-white'>
            Blog
          </span>
          App
        </Link>
      </Navbar.Brand>

      <div className='flex items-center lg:order-2'>
        <button className='w-12 h-10 text-gray-800'>
          <FaMoon />
        </button>
        <Link to='/signin'>
          <Button gradientDuoTone='purpleToBlue' outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <div className='flex-grow'>
          <form className='hidden lg:inline'>
            <TextInput
              type='text'
              placeholder='Search...'
              rightIcon={AiOutlineSearch}
              className='text-gray-800'
            />
          </form>
        </div>
        <Navbar.Link active={location === "/"} as={'div'}>
          <Link to='/' className='text-gray-800'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location === "/About"} as={'div'}>
          <Link to='/About' className='text-gray-800'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location === "/Projects"} as={'div'}>
          <Link to='/Projects' className='text-gray-800'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

