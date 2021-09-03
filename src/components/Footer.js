import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Footer(props) {
  // using npm package useForm, destructure needed methods
  const { handleSubmit, register, formState: { errors }} = useForm();
  // conditional check using hook to display success message
  const [isSubmitted, setSubmit] = useState(false);

  // declare var onSubmit which will handle the email input submission
  const onSubmit = (data) => {
    //if we do receive data as a argument,
    if (data) {
      // set conditonal hook to true
      setSubmit(true);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      fetch(
        'https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge',
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const SuccessMessage = () => {
    return (
      <p className='success-message'>
        <span class='result-text'>
          Thank you for subscribing to our Newsletter!
        </span>
      </p>
    );
  };

  const ErrorMessage = () => {
    return (
      <p className='error-message'>
        <span className='result-text'>
          Please enter a valid email.
        </span>
      </p>
    );
  };

  // if app is done fetching from api, run functionality
  if (props.isLoaded) {
    return (
      <div className='footer'>
        <p id='sign-up-title'>Sign up for our Newsletter</p>
        <form className='email-form' onSubmit={handleSubmit(onSubmit)}>
          {!errors.email && isSubmitted ? <SuccessMessage /> : ''}
          {errors.email && <ErrorMessage />}
          <input
            id='email'
            type='text'
            name='email'
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9._%+=]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            placeholder='Email'
          />
          <input type='submit' value='SUBMIT' id='submit-btn' />
        </form>
        <div className='copyright-footer'>
          <p>
            © 2021 &#x2015; SPARTA PLAESENT -{' '}
            <a href='/#' className='social-media-links'>
              INSTAGRAM
            </a>{' '}
            -{' '}
            <a href='/#' className='social-media-links'>
              FACEBOOK
            </a>{' '}
            -{' '}
            <a href='/#' className='social-media-links'>
              TWITTER
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    // if not loaded, return nothing
    return '';
  }
}

export default Footer;
