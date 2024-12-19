import Image from 'next/image'
import Link from 'next/link'
import CurrencyImage from '@/assets/Finzo-currency-3.webp'
import paymentImage from '@/assets/finzo-payment.webp'
import bgImage from '@/assets/Finzo-CTA-1.webp'

const TrustUs = () => {
    return (
        <section className='py-16 px-4'>
            <div className="relative flex flex-col md:flex-row justify-between gap-6 max-w-screen-xl m-auto bg-[#E0F1DF] rounded-3xl md:py-20 bg-cover bg-center bg-no-repeat overflow-hidden">
                <Image src={bgImage} alt='payment-image' height={300} width={450} className='absolute object-cover right-16 -top-40 rotate-45 z-0 opacity-40' />
                <div className="flex flex-col justify-evenly gap-6 md:w-[48%] p-4 z-10">
                    <h2 className='text-custom-black-colour text-3xl md:text-5xl font-semibold'>Join million people who already trust us</h2>
                    <p className='text-secondary-colour text-lg'>Easy and fast international business account that saves you money wherever you want to use it.</p>
                    <div className="flex flex-wrap gap-6">
                        <Link href='/' className='w-full md:w-fit bg-primary-colour font-semibold text-white px-6 py-4 rounded-xl ' >Open Account</Link>
                        <Link href='/' className='w-full md:w-fit text-primary-colour font-semibold border-2 px-6 py-4 rounded-xl ' >Book a demo</Link>
                    </div>
                </div>
                <div className="md:w-[48%] p-4 relative">
                    <Image src={paymentImage} alt='payment-image' height={300} width={450} className='object-cover m-auto rounded-3xl border-primary-colour border-b-8' />
                    <Image src={CurrencyImage} alt='payment-image' height={300} width={300} className='-mt-10 object-cover rounded-3xl' />
                </div>
            </div>
        </section>
    )
}

export default TrustUs