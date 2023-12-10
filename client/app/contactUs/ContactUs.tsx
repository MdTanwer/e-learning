import React from 'react';
import { styles } from '../styles/style';

const ContactUs = () => {
  return (
    <div className='text-black dark:text-white'>
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        Get in
        <span className='text-gradient'>Touch</span>
      </h1>
      <h2 className='800px:!text-[25px] text-[15px] text-black dark:text-white font-[500] font-Poppins text-center py-2'>
        Looking for help? Fill the form and start a new adventure.
      </h2>

      <br />
      <div className='flex flex-col justify-start items-center gap-20 md:flex md:flex-row md:justify-start md:items-start md:mx-20'>
        <div className='w-[95%] md:w-[50%]'>
          <section className='bg-white dark:bg-gray-900'>
            <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
              <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
                Let’s Connect
              </h2>
              {/* <p className='mb-8 lg:mb-16 font-Poppins text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p> */}
              <form action='#' className='space-y-8'>
                <div>
                  <label
                    htmlFor='fullName'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Your Full Name
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='Full Name'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='name@flowbite.com'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='Let us know how we can help you'
                    required
                  />
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Your message
                  </label>
                  <textarea
                    id='message'
                    rows={6}
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    placeholder='Leave a comment...'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='bg-gradient-to-r from-blue-500 to-[#521088] text-white py-3 px-5 text-sm font-medium text-center   dark:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
        <div className='w-[95%] md:w-[50%]'>
          <p className='text-[18px] font-Poppins'>
            Are you ready to take your programming skills to the next level?
            Look no further than Becodemy, the premier programming community
            dedicated to helping new programmers achieve their goals and reach
            their full potential.
            <br />
            <br />
            As the founder and CEO of Becodemy, I know firsthand the challenges
            that come with learning and growing in the programming industry.
            That&apos;s why I created Becodemy &ndash; to provide new
            programmers with the resources and support they need to succeed.
            <br />
            <br />
            Our YouTube channel is a treasure trove of informative videos on
            everything from programming basics to advanced techniques. But
            that&apos;s just the beginning. Our affordable courses are designed
            to give you the high-quality education you need to succeed in the
            industry, without breaking the bank.
            <br />
            <br />
            At Becodemy, we believe that price should never be a barrier to
            achieving your dreams. That&apos;s why our courses are priced low
            &ndash; so that anyone, regardless of their financial situation, can
            access the tools and knowledge they need to succeed.
            <br />
            <br />
            But Becodemy is more than just a community &ndash; we&apos;re a
            family. Our supportive community of like-minded individuals is here
            to help you every step of the way, whether you&apos;re just starting
            out or looking to take your skills to the next level.
            <br />
            <br />
            With Becodemy by your side, there&apos;s nothing standing between
            you and your dream job. Our courses and community will provide you
            with the guidance, support, and motivation you need to unleash your
            full potential and become a skilled programmer.
            <br />
            <br />
            So what are you waiting for? Join the Becodemy family today and
            let&apos;s conquer the programming industry together! With our
            affordable courses, informative videos, and supportive community,
            the sky&apos;s the limit.
          </p>
          <br />
          <span className='text-[22px]'>Shahriarsajeeb&apos;s</span>
          <h5 className='text-[18px] font-Poppins'>
            Founder and CEO of Becodemy
          </h5>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
