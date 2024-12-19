import Image from 'next/image'
import Link from 'next/link'
import image1 from '@/assets/Finzo-tutorial-1.webp'
import { Play } from 'lucide-react'

const BuildMarketplace = () => {
    return (
        <section className='py-16 px-4'>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-6 max-w-screen-xl m-auto py-20">
                <div className="relative md:w-[46%] bg-white border-b-8 rounded-3xl shadow-md ">
                    <Image src={image1} alt='tutorial image' width={200} height={200} quality={100} className='w-full p-5 rounded-[40px]' />
                    <p className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-primary-colour">
                        <Play className='bg-white rounded-full p-8' size={90} /></p>
                </div>
                <div className="flex flex-col justify-center gap-10 md:w-[46%] p-4 z-10">
                    <h2 className='text-custom-black-colour text-3xl md:text-5xl font-semibold'>Learn how to build a marketplace with Finzo</h2>
                    <p className='text-secondary-colour text-lg'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again.</p>
                    <Link href='/' className='bg-primary-colour w-fit font-semibold text-white px-6 py-4 rounded-xl ' >Watch Now</Link>
                </div>
            </div>
        </section>
    )
}

export default BuildMarketplace