import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import clientImage1 from '@/assets/Finzo-testimonials-1.webp'
import clientImage2 from '@/assets/Finzo-testimonials-2.webp'
import clientImage3 from '@/assets/Finzo-testimonials-3.webp'

const Testimonials = () => {
    return (
        <section className='py-16 px-4'>
            <div className="text-center mb-10">
                <p className=" bg-[#CCE8C9] text-primary-colour hover:bg-primary-colour hover:text-white px-4 py-2 rounded-md w-fit mx-auto my-4 transition">
                    FINZO
                </p>
                <h3 className='text-3xl md:text-5xl mb-5 font-semibold text-custom-black-colour'>Don&apos;t take our word for it.</h3>
                <p className='max-w-2xl m-auto text-lg text-secondary-colour'>Whether you’re a small business, or a large corporation, we have a plan that’s right for you.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6 max-w-screen-xl m-auto rounded-3xl">
                <div className="md:-w[30%] p-5 rounded-3xl bg-gray-100">
                    <div className="flex gap-1 text-gray-600">
                        <Star /><Star /><Star /><Star />
                    </div>
                    <p className='text-gray-600 my-4'>I would recommend Finzo for anyone trying to get the word out about their business. It has saved me so much time!</p>
                    <div className="flex gap-4">
                        <Image src={clientImage1} alt='client image' width={50} height={50} className='rounded-full' />
                        <div>
                            <p>Stephanie Sharkey</p>
                            <p className='text-gray-600 text-sm'>Mostow Co.</p>
                        </div>
                    </div>
                </div>
                <div className="md:-w[30%] p-5 rounded-3xl bg-gray-100">
                    <div className="flex gap-1 text-gray-600">
                        <Star /><Star /><Star /><Star />
                    </div>
                    <p className='text-gray-600 my-4'>I would recommend Finzo for anyone trying to get the word out about their business. It has saved me so much time!</p>
                    <div className="flex gap-4">
                        <Image src={clientImage2} alt='client image' width={50} height={50} className='rounded-full' />
                        <div>
                            <p>Stephanie Sharkey</p>
                            <p className='text-gray-600 text-sm'>Mostow Co.</p>
                        </div>
                    </div>
                </div>
                <div className="md:-w[30%] p-5 rounded-3xl bg-gray-100">
                    <div className="flex gap-1 text-gray-600">
                        <Star /><Star /><Star /><Star />
                    </div>
                    <p className='text-gray-600 my-4'>I would recommend Finzo for anyone trying to get the word out about their business. It has saved me so much time!</p>
                    <div className="flex gap-4">
                        <Image src={clientImage3} alt='client image' width={50} height={50} className='rounded-full' />
                        <div>
                            <p>Stephanie Sharkey</p>
                            <p className='text-gray-600 text-sm'>Mostow Co.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6 max-w-screen-xl m-auto rounded-3xl mt-5">
                <div className="md:-w[30%] p-5 rounded-3xl bg-gray-100">
                    <div className="flex gap-1 text-gray-600">
                        <Star /><Star /><Star /><Star />
                    </div>
                    <p className='text-gray-600 my-4'>I would recommend Finzo for anyone trying to get the word out about their business. It has saved me so much time!</p>
                    <div className="flex gap-4">
                        <Image src={clientImage1} alt='client image' width={50} height={50} className='rounded-full' />
                        <div>
                            <p>Stephanie Sharkey</p>
                            <p className='text-gray-600 text-sm'>Mostow Co.</p>
                        </div>
                    </div>
                </div>
                <div className="md:-w[30%] p-5 rounded-3xl bg-gray-100">
                    <div className="flex gap-1 text-gray-600">
                        <Star /><Star /><Star /><Star />
                    </div>
                    <p className='text-gray-600 my-4'>I would recommend Finzo for anyone trying to get the word out about their business. It has saved me so much time!</p>
                    <div className="flex gap-4">
                        <Image src={clientImage2} alt='client image' width={50} height={50} className='rounded-full' />
                        <div>
                            <p>Stephanie Sharkey</p>
                            <p className='text-gray-600 text-sm'>Mostow Co.</p>
                        </div>
                    </div>
                </div>
                <div className="md:-w[30%] p-5 rounded-3xl bg-gray-100">
                    <div className="flex gap-1 text-gray-600">
                        <Star /><Star /><Star /><Star />
                    </div>
                    <p className='text-gray-600 my-4'>I would recommend Finzo for anyone trying to get the word out about their business. It has saved me so much time!</p>
                    <div className="flex gap-4">
                        <Image src={clientImage3} alt='client image' width={50} height={50} className='rounded-full' />
                        <div>
                            <p>Stephanie Sharkey</p>
                            <p className='text-gray-600 text-sm'>Mostow Co.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials