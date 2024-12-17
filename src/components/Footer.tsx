import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '@/assets/logo-light.webp';


const Footer = () => {
  return (
    <footer className="bg-primary-colour text-[#FFFFFFD4] py-10">
      <div className="flex flex-wrap justify-between gap-4 px-4 max-w-screen-xl m-auto">
        {/* Platform Section */}
        <div className="w-2/5 md:w-fit mb-6 md:mb-0">
          <h3 className="text-lg mb-4 text-white">Platform</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Multi-virtual Card
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Investment
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Learn
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions Section */}
        <div className="w-2/5 md:w-fit mb-6 md:mb-0">
          <h3 className="text-lg mb-4 text-white">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Exchange & Pro
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Wallet
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Commerce
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Taxes
              </Link>
            </li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="w-2/5 md:w-fit mb-6 md:mb-0">
          <h3 className="text-lg mb-4 text-white">Features</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Transfer
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Investor Index
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Exchange
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="w-2/5 md:w-fit mb-6 md:mb-0">
          <h3 className="text-lg mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Career
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="mb-6 md:mb-0 w-full md:w-80">
          <h3 className="text-lg mb-4 text-white">Follow our newsletter</h3>
          <div className="relative md:flex items-center bg-white p-2 rounded-md">
            <input
              type="email"
              placeholder="Your work email"
              className="rounded-lg focus:outline-none text-gray-800 p-3 w-full"
            />
            <button className="md:absolute right-2 bg-[#CCE8C9] text-primary-colour hover:bg-primary-colour hover:text-white px-4 py-2 rounded-md w-full md:w-auto transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-teal-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm px-4 gap-6 text-center">
        <div>
          <Link href="/" className="text-2xl font-bold ">
            <Image src={logo} alt='logo'
              width={120} height={120} className='object-center object-cover' />
          </Link>
        </div>
        <div>
          &copy; 2024 UiCore Pro WordPress Theme. All Rights Reserved.
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
