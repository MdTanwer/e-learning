import React, { ChangeEvent, FormEvent, useState } from 'react';
import { styles } from '../styles/style';
import { useCreateMessageMutation } from '@/redux/features/contactUs/contactUsApi';
import { FcHome } from 'react-icons/fc';
import { FcIphone } from 'react-icons/fc';
import { FcInvite } from 'react-icons/fc';
import { FcIpad } from 'react-icons/fc';
import BlogCard from '../components/BlogsCard/BlogsCard';
import { useGetAllBlogsQuery } from '@/redux/features/blogs/blogsApi';

const Blogs = () => {
  const { isLoading, data, refetch } = useGetAllBlogsQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  console.log(data?.blogs);
  // const initialState = {
  //   name: '',
  //   email: '',
  //   phoneNo: '',
  //   subject: '',
  //   message: '',
  // };

  // const [createMessage, { data, error, isSuccess }] =
  //   useCreateMessageMutation();

  // const [contactFormData, setContactFormData] = useState({ ...initialState });

  // console.log(contactFormData);

  // const handleFormChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e?.target;
  //   setContactFormData({ ...contactFormData, [name]: e.target.value });
  // };

  // const contactFormSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   const resp = await createMessage({
  //     ...contactFormData,
  //     status: '',
  //     updateId: '',
  //     updatedAt: '',
  //     description: '',
  //   });
  //   console.log(resp);
  //   console.log('submitted🔥🔥🔥🔥🔥');
  // };
  return (
    <div className='text-black dark:text-white'>
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        {/* Get in */}
        <span className='text-gradient'>Blogs</span>
      </h1>
      <h2 className='800px:!text-[25px] text-[15px] text-black dark:text-white font-[500] font-Poppins text-center py-2 mx-5'>
        Unlocking Knowledge, Empowering Minds: Explore Our Blog for Insightful
        Learning Journeys!
      </h2>

      <br />
      <div className='grid grid-cols-1 justify-start items-center gap-10 mx-5 mb-10 md:grid md:grid-cols-4 md:justify-start md:items-start md:mx-20 md:gap-10'>
        {data?.blogs?.map((blog: any, i: number) => (
          <BlogCard key={i} blog={blog} />
        ))}
        {/* <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard /> */}
      </div>
    </div>
  );
};

export default Blogs;
