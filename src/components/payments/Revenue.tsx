import Image from 'next/image'
import Link from 'next/link'
import CurrencyImage from '@/assets/Finzo-revenue-2.webp'
import paymentImage from '@/assets/Finzo-revenue-1.webp'
import bgImage from '@/assets/Finzo-CTA-1.webp'

const Revenue = () => {
    return (
        <section className='py-16 px-4'>
            <div className="flex flex-col md:flex-row justify-between gap-6 max-w-screen-xl m-auto md:py-20">
                <div className="flex flex-col justify-evenly gap-6 md:w-[40%] p-4 z-10">
                    <p className="text-sm bg-[#CCE8C9] text-primary-colour hover:bg-primary-colour hover:text-white px-4 py-2 rounded-md w-fit  my-4 transition">
                        REVENUE
                    </p>
                    <h2 className='text-custom-black-colour text-3xl md:text-5xl font-semibold'>Maximize the growth of business revenue</h2>
                    <p className='text-secondary-colour text-lg'>Moving money should never take more than a few taps. Transfers are always free between friends.</p>
                    <Link href='/' className='bg-primary-colour w-fit font-semibold text-white px-6 py-4 rounded-xl ' >Learn More</Link>
                </div>
                <div className="relative md:w-[46%]">
                    <div className=" p-4 border relative bg-primary-colour rounded-3xl overflow-hidden md:h-[500px]">
                        <Image src={bgImage} alt='payment-image' height={300} width={450} className='opacity-20 rotate-180 ml-40 mt-40' />
                    </div>
                    <Image src={paymentImage} alt='payment-image' height={300} width={400} className='border-b-8 shadow-md object-cover rounded-3xl absolute top-10 md:-left-32' />
                    <Image src={CurrencyImage} alt='payment-image' height={300} width={300} className='object-cover rounded-3xl absolute bottom-20 right-1' />
                </div>
            </div>
        </section>
    )
}

export default Revenue