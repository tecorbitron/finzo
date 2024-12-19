import Image from "next/image";
import React from "react";
import icon1 from "@/assets/Finzo-flow-icon.webp";
import icon2 from "@/assets/Finzo-service-icon.webp";
import icon3 from "@/assets/Finzo-subscription-icon.webp";
import icon4 from "@/assets/Finzo-refund-icon.webp";

const ManageMarketplace = () => {
    return (
        <section className="bg-[#F9FBFB] py-16 px-4">
            <div className="flex flex-col lg:flex-row justify-between max-w-screen-xl m-auto relative z-10">
                {/* Left Section */}
                <div className="flex flex-col items-start justify-between lg:w-1/2 lg:max-w-md lg:text-left mb-8 lg:mb-0">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-custom-black-colour">Manage your marketplace with Finzo&apos;s superior features
                        </h2>
                    </div>
                    <button className="mt-6 px-6 py-3 bg-primary-colour text-white rounded-lg shadow transition">
                        ▶ Watch Video Guide
                    </button>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 flex flex-wrap  justify-center lg:justify-end items-center">
                    {/* Grid Items */}
                    <div className=" w-1/2 mb-8 px-4">
                        <div className="bg-green-100 p-4 rounded-full w-fit">
                            <Image src={icon1} alt="icon" width={30} height={30} className="object-contain" />
                        </div>
                        <h3 className="text-lg font-bold mt-4 text-gray-800">Control your flow</h3>
                        <p className="text-gray-500 mt-2">
                            Security teams work to keep your money safe
                        </p>
                    </div>

                    <div className="w-1/2 mb-8 lg:mb-4 px-4">
                        <div className="bg-green-100 p-4 rounded-full w-fit">
                            <Image src={icon2} alt="icon" width={30} height={30} className="object-contain" />
                        </div>
                        <h3 className="text-lg font-bold mt-4 text-gray-800">Manage service</h3>
                        <p className="text-gray-500 mt-2">
                            We use top uthentication to protect your account
                        </p>

                    </div>

                    <div className="w-1/2 px-4">
                        <div className="bg-green-100 p-4 rounded-full w-fit">
                            <Image src={icon3} alt="icon" width={30} height={30} className="object-contain" />
                        </div>
                        <h3 className="text-lg font-bold mt-4 text-gray-800">Launch subscriptions</h3>
                        <p className="text-gray-500 mt-2">
                            Hold money with established financial institutions.
                        </p>
                    </div>

                    <div className="w-1/2 px-4">
                        <div className="bg-green-100 p-4 rounded-full w-fit">
                            <Image src={icon4} alt="icon" width={30} height={30} className="object-contain" />
                        </div>
                        <h3 className="text-lg font-bold mt-4 text-gray-800">Handle refunds</h3>
                        <p className="text-gray-500 mt-2">
                            Place all your accounts, all in one place, easy to access.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ManageMarketplace;
