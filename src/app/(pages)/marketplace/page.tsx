import Statistics from '@/components/home/Statistics'
import TrustUs from '@/components/home/TrustUs'
import BuildMarketplace from '@/components/marketplace/BuildMarketplace'
import ManageMarketplace from '@/components/marketplace/ManageMarketplace'
import MarketplaceHero from '@/components/marketplace/MarketplaceHero'
import OtherSolutions from '@/components/marketplace/OtherSolutions'
import React from 'react'

const Marketplace = () => {
  return (
    <div className='bg-gray-50'>
      <MarketplaceHero />
      <Statistics />
      <ManageMarketplace />
      <BuildMarketplace />
      <OtherSolutions />
      <TrustUs />
    </div>
  )
}

export default Marketplace