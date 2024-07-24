import { Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const location = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white '>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Blog</span>
        App
      </Link>
      
      <form className='hidden lg:inline'>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
        />
      </form>

      <button className='w-12 h-10 lg:hidden'>
        <AiOutlineSearch />
      </button>

      <div className='flex gap-2 md:order-2'>
        <button className='w-12 h-10'>
          <FaMoon />
        </button>

        <Link to='/signin'>
          <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full">
            Sign In
          </button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active= {location==="/"} as={'div'}>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active= {location==="/About"} as={'div'}>
          <Link to='/About'>
            About
          </Link>
        </Navbar.Link >
        <Navbar.Link active= {location==="/Projects"} as={'div'}>
          <Link to='/Projects'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

