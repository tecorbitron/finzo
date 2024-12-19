import FAQ from '@/components/home/FAQ'
import Pricing from '@/components/home/Pricing'
import TrustUs from '@/components/home/TrustUs'
import PricePlans from '@/components/pricing/PricePlans'
import React from 'react'

const pricing = () => {
  return (
    <div>
      <Pricing />
      <PricePlans />
      <FAQ />
      <TrustUs />
    </div>
  )
}

export default pricing