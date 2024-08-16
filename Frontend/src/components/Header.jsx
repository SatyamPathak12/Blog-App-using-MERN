import { Navbar, TextInput, Button, Dropdown, Avatar } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

export default function Header() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  return (
    <Navbar className='border-b-2 border-teal-500 bg-gray-50 dark:bg-gray-800'>
      <Navbar.Brand>
        <Link
          to='/'
          className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-gray-800 dark:text-gray-200'
        >
          <span className='px-2 py-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-lg text-white'>
            Blog
          </span>
          App
        </Link>
      </Navbar.Brand>

      <div className='flex items-center lg:order-2 space-x-2 lg:space-x-4'>
        {/* Dark Mode Icon */}
        <Button
          className='w-10 h-10 text-gray-800 dark:text-gray-200 p-2 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition'
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </Button>

        {/* Profile Dropdown */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt='user'
                img={currentUser.profilePicture}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>{currentUser.name}</span>
              <span className='block truncate text-sm font-medium'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Item>Sign out</Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown>
        ) : (
          <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}

        {/* Navbar Toggle for small screens */}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <div className='flex-grow'>
          <form className='hidden lg:inline'>
            <div className='relative'>
              <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
              />
            </div>
          </form>
          <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch/>
          </Button>
        </div>

        {/* Navbar Links */}
        <Navbar.Link active={location === '/'} as={'div'}>
          <Link to='/' className='text-gray-800 dark:text-gray-200'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location === '/About'} as={'div'}>
          <Link to='/About' className='text-gray-800 dark:text-gray-200'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location === '/Projects'} as={'div'}>
          <Link to='/Projects' className='text-gray-800 dark:text-gray-200'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
