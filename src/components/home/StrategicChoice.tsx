import Image from "next/image";
import React from "react";
import icon1 from "@/assets/Finzo-lock-icon.webp";
import icon2 from "@/assets/Finzo-auth-icon.webp";
import icon3 from "@/assets/Finzo-bank-icon.webp";
import icon4 from "@/assets/Finzo-user-icon.webp";
import bgImage from '@/assets/Finzo-CTA-1.webp'

const StrategicChoice = () => {
    return (
        <section className="relative overflow-hidden bg-[#F9FBFB] py-20 px-4">
            <Image src={bgImage} alt='payment-image' height={300} width={450} className='absolute object-cover -bottom-20 rotate-180 md:right-96 z-0 opacity-40' />
            <div className="flex flex-col lg:flex-row justify-between max-w-screen-xl m-auto relative z-10">
                {/* Left Section */}
                <div className="flex flex-col items-start justify-between lg:w-1/2 lg:max-w-md lg:text-left mb-8 lg:mb-0">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-custom-black-colour">We are a strategic choice</h2>
                        <p className="text-primary-colour mt-4">
                            We’re on a mission to bring transparency to finance and show you upfront.
                        </p>
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
                        <h3 className="text-lg font-bold mt-4 text-gray-800">Security Teams</h3>
                        <p className="text-gray-500 mt-2">
                            Security teams work to keep your money safe.
                        </p>
                    </div>

                    <div className="w-1/2 mb-8 lg:mb-4 px-4">
                        <div className="bg-green-100 p-4 rounded-full w-fit">
                            <Image src={icon2} alt="icon" width={30} height={30} className="object-contain" />
                        </div>
                        <h3 className="text-lg font-bold mt-4 text-gray-800">Authentication</h3>
                        <p className="text-gray-500 mt-2">
                            We use top authentication to protect your account.
                        </p>

                    </div>

                    <div className="w-1/2 px-4">
                        <div className="bg-green-100 p-4 rounded-full w-fit">
                            <Image src={icon3} alt="icon" width={30} height={30} className="object-contain" />
                        </div>
                        <h3 className="text-lg font-bold mt-4 text-gray-800">Safety Funds</h3>
                        <p className="text-gray-500 mt-2">
                            Hold money with established financial institutions.
                        </p>
                    </div>

                    <div className="w-1/2 px-4">
                        <div className="bg-green-100 p-4 rounded-full w-fit">
                            <Image src={icon4} alt="icon" width={30} height={30} className="object-contain" />
                        </div>
                        <h3 className="text-lg font-bold mt-4 text-gray-800">Account Place</h3>
                        <p className="text-gray-500 mt-2">
                            Place all your accounts, all in one place, easy to access.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default StrategicChoice;
