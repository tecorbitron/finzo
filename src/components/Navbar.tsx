"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.webp';


const Navbar = () => {

  const [isMenu, setIsMenu] = useState(false);


  return (
    <nav className='bg-white border px-4'>
      <div className="flex justify-between items-center h-fit space-x-8 text-primary-colour py-8 max-w-screen-xl m-auto">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl font-bold ">
            <Image src={logo} alt='logo'
              width={120} height={120} className='object-center object-cover' />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="relative hover:border-primary-colour h-6 before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[2px] before:bg-primary-colour before:transition-all before:duration-300 hover:before:w-full"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="relative hover:border-primary-colour h-6 before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[2px] before:bg-primary-colour before:transition-all before:duration-300 hover:before:w-full"
            >
              Pricing
            </Link>
            <Link
              href="/payments"
              className="relative hover:border-primary-colour h-6 before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[2px] before:bg-primary-colour before:transition-all before:duration-300 hover:before:w-full"
            >
              Payments
            </Link>
            <Link
              href="/marketplace"
              className="relative hover:border-primary-colour h-6 before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[2px] before:bg-primary-colour before:transition-all before:duration-300 hover:before:w-full"
            >
              Marketplace
            </Link>
          </div>

        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="#"
            className="relative hover:border-primary-colour h-6 before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[2px] before:bg-primary-colour before:transition-all before:duration-300 hover:before:w-full"
          >
            Login
          </Link>
          <Link href="/sign-up" className="bg-primary-colour text-white px-4 py-2 rounded-xl font-medium">Sign Up</Link>
        </div>
        <div className="flex md:hidden items-center gap-5">
          <Link href="/sign-up" className="bg-primary-colour text-white px-4 py-2 rounded-xl font-medium">Sign Up</Link>
          <div onClick={() => setIsMenu(!isMenu)} className="hover:text-gray-300 cursor-pointer">
            <Menu />
          </div>
        </div>
      </div>

      {/* for mobile screen  */}
      {isMenu && <nav className='fixed top-0 left-0 z-50 md:hidden h-screen w-full text-black bg-white px-4 font-semibold '>
        <div className="flex justify-between items-center py-8">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold ">
              <Image src={logo} alt='logo'
                width={120} height={120} className='object-center object-cover' />
            </Link>
          </div>
          <div onClick={() => setIsMenu(!isMenu)} className="md:hidden hover:text-gray-300 cursor-pointer">
            <X />
          </div>
        </div>
        {/* Nav items  */}
        <div className="flex flex-col text-custom-black-colour text-lg space-y-8 mt-5">
          <Link href="/" className="">Home</Link>
          <Link href="/pricing" className="">Pricing</Link>
          <Link href="/payments" className="">Payments</Link>
          <Link href="/marketplace" className="">Marketplace</Link>
        </div>
        <Link href="/sign-up" className="absolute bottom-10 bg-primary-colour w-11/12 text-white text-center py-2 rounded-xl font-medium">Sign Up</Link>
      </nav>}

    </nav>
  );
};

export default Navbar;
