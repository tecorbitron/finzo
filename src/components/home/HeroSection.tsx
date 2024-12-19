import Image from 'next/image'
import Link from 'next/link'
import heroImage1 from '@/assets/finzo-hero-image.webp'
import CurrencyImage2 from '@/assets/finzo-hero-image2.webp'

const HeroSection = () => {
  return (
    <section className='px-4'>
      <div className="flex flex-col md:flex-row justify-between gap-6 max-w-screen-xl m-auto rounded-3xl md:pb-20 md:pt-10 ">
        <div className="flex flex-col justify-evenly gap-6 md:w-[48%] p-4 z-10">
          <p className="text-sm bg-[#CCE8C9] text-primary-colour hover:bg-primary-colour hover:text-white px-4 py-2 rounded-md w-fit transition">MODERN BANK</p>
          <h2 className='text-custom-black-colour text-4xl md:text-6xl font-semibold'>We are building future banking just for you.</h2>
          <p className='text-secondary-colour text-lg'>Easy and fast international business account that saves you money wherever you want to use it, everywhere.</p>
          <div className="flex flex-wrap gap-6">
            <Link href='/' className='w-full md:w-fit bg-primary-colour font-semibold text-white px-6 py-4 rounded-xl ' >Get Started Now</Link>
            <Link href='/' className='w-full md:w-fit text-primary-colour font-semibold border-2 px-6 py-4 rounded-xl ' >Learn More</Link>
          </div>
        </div>
        <div className="md:w-[48%] p-4 relative">
          <Image src={heroImage1} alt='payment-image' height={300} width={450} className='object-cover m-auto rounded-3xl' />
          <Image src={CurrencyImage2} alt='payment-image' height={300} width={360} className='absolute shadow-md bottom-0 w-60 md:w-auto md:bottom-10 lg:-bottom-10 object-cover rounded-3xl border-b-8' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection