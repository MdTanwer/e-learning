'use client';

import TinyEditor from '@/app/utils/tiny';
import { useCreateBlogMutation } from '@/redux/features/blogs/blogsApi';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  SelectHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

const BlogsAdmin = () => {
  const [createBlog, { data, error, isSuccess }] = useCreateBlogMutation();

  const initialState = {
    authorName: '',
    designation: '',
    blogTitle: '',
    category: '',
    shortDescription: '',
    avatar: '',
    thumbnail: '',
    thumbnailCaption: '',
    fullBlogContent: '',
  };
  const [blogFormData, setBlogFormData] = useState({ ...initialState });
  console.log(blogFormData);
  const [editorContent, setEditorContent] = useState('');
  const [avatar, setAvatar] = useState('');
  // console.log(avatar);
  // const [render, setRender] = useState(false);
  const theme = useSelector((store: any) => store.theme.theme);
  console.log(theme);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setBlogFormData((prevFormData) => ({
      ...prevFormData,
      fullBlogContent: editorContent,
    }));
  }, [editorContent]);

  const handleBlogOpenClose = () => {
    setOpen(true);
  };

  const handleThumbnailChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          // setAvatar(reader.result as string);
          setBlogFormData((prevFormData) => ({
            ...prevFormData,
            thumbnail: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBlogChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // setBlogFormData({ ...blogFormData, [name]: value });
    setBlogFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBlogSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('SUBMIT');
    createBlog(blogFormData);
  };

  return (
    <>
      <div className='flex flex-col z-[20px] items-center mt-[1.25rem]'>
        <div className='flex justify-center m-5'>
          <button
            onClick={handleBlogOpenClose}
            className='block cursor-pointer text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Post New Blog
          </button>
        </div>
        {open && (
          <div
            // id='defaultModal'
            // tabIndex={-1}
            // aria-hidden='true'
            className='flex overflow-y-auto overflow-x-hidden  justify-center items-center w-full md:inset-0 h-modal md:h-full'
          >
            <div className='relative p-4 w-full max-w-2xl h-full md:h-auto'>
              <div className='relative p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 sm:p-5'>
                <div className='flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    New Blog
                  </h3>
                  <button
                    onClick={() => setOpen(false)}
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                    // data-modal-toggle='defaultModal'
                  >
                    <svg
                      // aria-hidden='true'
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span className='sr-only'>Close modal</span>
                  </button>
                </div>
                <form>
                  <div className='grid gap-4 mb-4 sm:grid-cols-2'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Author&apos;s Name
                      </label>
                      <input
                        type='text'
                        name='authorName'
                        id='authorName'
                        value={blogFormData.authorName}
                        onChange={handleBlogChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                        placeholder='Full Name'
                        required={true}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='brand'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Designation
                      </label>
                      <input
                        type='text'
                        name='designation'
                        id='designation'
                        value={blogFormData.designation}
                        onChange={handleBlogChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                        placeholder='Your Designation'
                        required={true}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='price'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Blog Title
                      </label>
                      <input
                        type='text'
                        name='blogTitle'
                        id='blogTitle'
                        value={blogFormData.blogTitle}
                        onChange={handleBlogChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                        placeholder='Enter Blog Title'
                        required={true}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='category'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Category
                      </label>
                      <select
                        name='category'
                        id='category'
                        value={blogFormData.category}
                        onChange={handleBlogChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      >
                        <option selected={true}>Select category</option>
                        <option value='TV'>TV/Monitors</option>
                        <option value='PC'>PC</option>
                        <option value='GA'>Gaming/Console</option>
                        <option value='PH'>Phones</option>
                      </select>
                    </div>
                    {/* <div className='flex items-center justify-center w-full'>
                      <label
                        htmlFor='avatar'
                        className='flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                      >
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                          <svg
                            className='w-8 h-8 mb-[1px] text-gray-500 dark:text-gray-400'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 20 16'
                          >
                            <path
                              stroke='currentColor'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                            />
                          </svg>
                          <p className='block mb-[1px] text-lg font-semibold text-gray-900 dark:text-white'>
                            Upload Avatar Image
                          </p>
                          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                            <span className='font-semibold'>
                              Click to upload
                            </span>{' '}
                            or drag and drop
                          </p>
                          <p className='text-xs text-gray-500 dark:text-gray-400'>
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </label>
                      <input
                        name='avatar'
                        id='avatar'
                        type='file'
                        className='hidden'
                        // value={avatar}
                        // value={blogFormData.avatar}
                        onChange={handleThumbnailChange}
                      />
                    </div> */}
                    <div className='flex items-center justify-center w-full sm:col-span-2'>
                      <label
                        htmlFor='thumbnail'
                        className='flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                      >
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                          <svg
                            className='w-8 h-8 mb-[1px] text-gray-500 dark:text-gray-400'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 20 16'
                          >
                            <path
                              stroke='currentColor'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                            />
                          </svg>
                          <p className='block mb-[1px] text-lg font-semibold text-gray-900 dark:text-white'>
                            Upload Blog Thumbnail
                          </p>
                          <p className='text-sm text-gray-500 dark:text-gray-400'>
                            <span className='font-semibold'>
                              Click to upload
                            </span>{' '}
                            or drag and drop{' '}
                            <span className='text-xs text-gray-500 dark:text-gray-400'>
                              (SVG, PNG, JPG or GIF)
                            </span>
                          </p>
                          {/* <p className='text-xs text-gray-500 dark:text-gray-400'>
                            SVG, PNG, JPG or GIF
                          </p> */}
                        </div>
                      </label>
                      <input
                        name='thumbnail'
                        id='thumbnail'
                        type='file'
                        className='hidden'
                        onChange={handleThumbnailChange}
                      />
                    </div>
                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='thumbnailCaption'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Thumbnail Caption
                      </label>
                      <input
                        name='thumbnailCaption'
                        id='thumbnailCaption'
                        value={blogFormData.thumbnailCaption}
                        onChange={handleBlogChange}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                        placeholder={`Write Blog's Short Description`}
                      ></input>
                    </div>
                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='description'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Short Description
                      </label>
                      <textarea
                        name='shortDescription'
                        id='shortDescription'
                        rows={4}
                        value={blogFormData.shortDescription}
                        onChange={handleBlogChange}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                        placeholder={`Write Blog's Short Description`}
                      ></textarea>
                    </div>
                    {/* <div className='sm:col-span-2'>
                      <label
                        htmlFor='description'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Full Description
                      </label>
                      <textarea
                        id='description'
                        rows={4}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                        placeholder={`Write full blog's description`}
                      ></textarea>
                    </div> */}
                    <div className='sm:col-span-2 dark:bg-gray-700 rounded-xl'>
                      <TinyEditor
                        editorContent={editorContent}
                        setEditorContent={setEditorContent}
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleBlogSubmit}
                    // type='submit'
                    className='text-white inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full md:w-fit'
                  >
                    <svg
                      className='mr-1 -ml-1 w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    Add New Blog
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setBlogFormData({ ...initialState });
                      setEditorContent('');
                    }}
                    // type='submit'
                    className='text-white inline-flex justify-center items-center bg-[#b91c1c] hover:bg-[#b91c1c] focus:ring-4 focus:outline-none focus:ring-[#7f1d1d] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#b91c1c] dark:hover:bg-[#b91c1c] dark:focus:ring-[#7f1d1d] ml-0 w-full mt-7 md:mt-0 md:ml-10 md:w-fit'
                  >
                    <svg
                      className='mr-1 -ml-1 w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    Reset Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogsAdmin;
