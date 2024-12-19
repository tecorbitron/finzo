import React from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
    return (
        <section>
            <div className="max-w-screen-xl m-auto px-4 py-16 text-customBlack">
                <div className="text-center">
                    <p className=" bg-[#CCE8C9] text-primary-colour hover:bg-primary-colour hover:text-white px-4 py-2 rounded-md w-fit mx-auto my-4 transition">
                        PRICING
                    </p>
                    <h3 className='text-3xl md:text-5xl mb-5 font-semibold text-custom-black-colour'>Plans for every budget</h3>
                    <p className='max-w-2xl m-auto text-lg text-secondary-colour'>Whether you’re a small business, or a large corporation, we have a plan that’s right for you.
                    </p>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 py-16">
                    <div className="w-full md:w-[48%] text-secondary-colour rounded-3xl p-8 shadow-md">
                        <h3 className='text-2xl font-semibold mb-2'>Personal</h3>
                        <p className='my-4'>Built-in budgeting and get more from your money with our Standard account.</p>
                        <p className='text-5xl font-medium my-5'>$0<span className='text-base font-normal'>/Month</span> </p>
                        <button className="w-full h-fit m-auto md:my-5 py-4 px-8 bg-primary-colour text-white rounded-lg">
                            Try for free
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full md:w-[96%] bg-primary-colour text-white rounded-3xl">
                        <div className="w-full p-6 border-b sm:border-r border-white">
                            <h3 className='text-2xl font-semibold mb-2'>Business</h3>
                            <p className='my-4'>Give your everyday finances a boost. Get more out of your money for less.</p>
                            <p className='text-5xl font-medium my-5'>$29<span className='text-base font-normal'>/Month</span> </p>
                            <button className="w-full h-fit m-auto md:my-5 py-4 px-8 text-secondary-colour bg-white rounded-lg">
                                Get started
                            </button>
                        </div>
                        <div className="flex flex-col justify-around w-full  p-6">
                            <h3 className='text-sm mb-2'>FEATURES</h3>
                            <p className='flex items-center gap-3 my-3'><Check strokeWidth={3} /> No payments back-office needed</p>
                            <p className='flex items-center gap-3 my-3'><Check strokeWidth={3} /> Faster implementation and global roll-out</p>
                            <p className='flex items-center gap-3 my-3'><Check strokeWidth={3} /> 48 hour support response time</p>
                            <p className='flex items-center gap-3 my-3'><Check strokeWidth={3} /> Always benefit from the best rates and features</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing