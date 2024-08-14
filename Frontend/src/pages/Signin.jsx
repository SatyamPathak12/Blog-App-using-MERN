import { Alert, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { signinStart, signinSuccess, signinFailure } from '../redux/user/userSlice';




export default function Signin() {
  const [formData, setFormData] = useState({});
  const {loading, error:error}=useSelector(state=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signinFailure('please fill all the field'));
    }

    try {
       dispatch(signinStart());

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
       dispatch(signinFailure(data.message));
      }
      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate('/');
      }
      

    } catch (error) {
      dispatch(signinFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen mt-20 bg-gray-50'>
      <div className='flex p-6 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-8'>
        {/* Left side */}
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-gray-800 text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-lg text-white'>
              Blog
            </span>
            App
          </Link>
          <p className='text-sm mt-5 text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            perspiciatis provident molestias! Quam nulla perferendis iste
            temporibus ab dolor quod reprehenderit, dolore voluptatem! Earum
            doloremque harum temporibus ab beatae reiciendis!
          </p>
        </div>

        {/* Right side */}
        <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@gmail.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='cyanToBlue'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Dont have an account?</span>
            <Link to='/signup' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {error && (
            <Alert className='mt-5' color='failure'>
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
