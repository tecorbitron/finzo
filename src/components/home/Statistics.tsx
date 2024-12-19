import React from 'react'
import bgImage from '@/assets/Finzo-CTA-1.webp'
import Image from 'next/image'


const Statistics = () => {
    return (
        <section className='py-16 px-4'>
            <div className="relative overflow-hidden flex justify-around gap-6 flex-wrap text-white bg-primary-colour max-w-screen-xl m-auto py-28 rounded-3xl p-8 text-center">
                <div className="md:-w[30%]">
                    <h2 className='text-6xl font-bold mb-4'>75K+</h2>
                    <p className='text-gray-300 text-xl'>Satisfied Users Globally</p>
                </div>
                <div className="md:-w[30%]">
                    <h2 className='text-6xl font-bold mb-4'>12%</h2>
                    <p className='text-gray-300 text-xl'>Benefical Cashback</p>
                </div>
                <div className="md:-w[30%]">
                    <h2 className='text-6xl font-bold mb-4'>190+</h2>
                    <p className='text-gray-300 text-xl'>Countries Supported</p>
                </div>
                <Image src={bgImage} alt='payment-image' height={300} width={450} className='absolute -top-16 -right-16 rotate-90 opacity-45' />
            </div>
        </section>
    )
}

export default Statistics