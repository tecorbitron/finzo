import Image from 'next/image'
import React from 'react'
import image1 from '@/assets/Finzo-solutions-1.webp'
import image2 from '@/assets/Finzo-solutions-2.webp'
import image3 from '@/assets/Finzo-solutions-3.webp'

const OtherSolutions = () => {
    return (
        <section className='py-16 px-4'>
            <div className="text-center mb-10">
                <p className=" bg-[#CCE8C9] text-primary-colour hover:bg-primary-colour hover:text-white px-4 py-2 rounded-md w-fit mx-auto my-4 transition">
                    FINZO
                </p>
                <h3 className='text-3xl md:text-5xl mb-5 font-semibold text-custom-black-colour'>Other Solutions</h3>
                <p className='max-w-2xl m-auto text-lg text-secondary-colour'>Whether you’re a small business, or a large corporation, we have a plan that’s right for you.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6 max-w-screen-xl m-auto rounded-3xl">
                <div className="md:-w[30%] p-5 rounded-3xl bg-gray-100">
                    <Image src={image1} alt='solution image' height={200} width={300} className='m-auto w-full object-cover rounded-3xl mb-10' />
                    <h2 className='text-3xl font-semibold mb-4'>Ecommerce</h2>
                    <p className='text-gray-600'>The passage is attributed to an unknown typesetter in the 15th century.</p>
                </div>
                <div className="md:-w[30%] p-5 rounded-3xl bg-gray-100">
                    <Image src={image2} alt='solution image' height={200} width={300} className='m-auto w-full object-cover rounded-3xl mb-10' />
                    <h2 className='text-3xl font-semibold mb-4'>Global Businesses</h2>
                    <p className='text-gray-600'>The passage is attributed to an unknown typesetter in the 15th century.</p>
                </div>
                <div className="md:-w[30%] p-5 rounded-3xl bg-gray-100">
                    <Image src={image3} alt='solution image' height={200} width={300} className='m-auto w-full object-cover rounded-3xl mb-10' />
                    <h2 className='text-3xl font-semibold mb-4'>Creator Economy</h2>
                    <p className='text-gray-600'>The passage is attributed to an unknown typesetter in the 15th century.</p>
                </div>
            </div>
        </section>
    )
}

export default OtherSolutions