import React from 'react';
import Image from 'next/image';
import { BlogType } from '@/app/blogs/Blogs';
import { clientServer } from '@/app/utils/server';

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[25rem]'>
      <div className='h-[10rem] overflow-hidden'>
        <a href={`${clientServer}/blogs/${blog?._id}`}>
          <Image
            className='rounded-t-lg object-cover'
            src={blog?.thumbnail}
            // fill={true}
            width={500}
            height={300}
            // src={require('../../../public/assests/image-1.jpg')}
            alt='blogs image'
          />
        </a>
      </div>

      <div className='p-5'>
        <a href={`${clientServer}/blogs/${blog?._id}`}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {blog?.blogTitle}
          </h5>
        </a>
        <h6 className='mb-2 text-xs font-semibold tracking-tight text-gray-900 dark:text-white'>
          {blog?.authorName}
        </h6>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {blog?.shortDescription}
        </p>
        <a
          href={`${clientServer}/blogs/${blog?._id}`}
          className='bg-gradient-to-r from-blue-500 to-[#521088] inline-flex items-center justify-center md:justify-start px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full md:w-fit'
        >
          Read more
          <svg
            className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
