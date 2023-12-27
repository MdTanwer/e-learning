'use client';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Image from 'next/image';
import { useState } from 'react';
import BlogDetails from './BlogDetails';

export type paramsType = {
  params: { blogId: String };
};

const Page = ({ params }: paramsType) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(6);
  const [route, setRoute] = useState('Login');

  return (
    <>
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <BlogDetails params={params} />
      <Footer />
    </>
  );
};

export default Page;
