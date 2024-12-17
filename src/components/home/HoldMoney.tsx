import Image from 'next/image'
import Link from 'next/link'
import CurrencyImage1 from '@/assets/Finzo-currency-3.webp'
import CurrencyImage2 from '@/assets/Finzo-currency-4.webp'
import CurrencyImage3 from '@/assets/Finzo-currency-1.webp'
import bgImage from '@/assets/Finzo-CTA-2.webp'

const HoldMoney = () => {
    return (
        <section className='md:py-20 px-4'>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-6 max-w-screen-xl m-auto py-20">
                <div className="relative md:w-[46%]">
                    <div className=" p-4 relative bg-[#E0F1DF] rounded-3xl overflow-hidden md:h-[500px]">
                        <Image src={bgImage} alt='payment-image' height={300} width={450} className='mt-40' />
                    </div>
                    <Image src={CurrencyImage1} alt='payment-image' height={300} width={300} className='object-cover rounded-3xl absolute top-6 right-8 shadow-md' />
                    <Image src={CurrencyImage2} alt='payment-image' height={300} width={300} className='object-cover rounded-3xl absolute top-40 -left-16 border-b-8 border-primary-colour shadow-md' />
                    <Image src={CurrencyImage3} alt='payment-image' height={300} width={300} className='object-cover rounded-3xl absolute bottom-10 md:-right-16 right-1 shadow-md' />
                </div>
                <div className="flex flex-col justify-evenly gap-6 md:w-[46%] p-4 z-10">
                    <p className="text-sm bg-[#CCE8C9] text-primary-colour hover:bg-primary-colour hover:text-white px-4 py-2 rounded-md w-fit  my-4 transition">
                        MODERN BANK
                    </p>
                    <h2 className='text-custom-black-colour text-3xl md:text-5xl font-semibold'>Hold and send money in 190+ currencies.</h2>
                    <p className='text-secondary-colour text-lg'>Create an account for your chosen currency in seconds. Get great prices with limit and stop orders</p>
                    <Link href='/' className='bg-primary-colour w-fit font-semibold text-white px-6 py-4 rounded-xl ' >Learn More</Link>
                </div>
            </div>
        </section>
    )
}

export default HoldMoney