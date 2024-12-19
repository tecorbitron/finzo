import TrustUs from '@/components/home/TrustUs'
import Integration from '@/components/payments/Integration'
import PaymentsGrid from '@/components/payments/PaymentsGrid'
import PaymentsHero from '@/components/payments/PaymentsHero'
import Revenue from '@/components/payments/Revenue'
import Testimonials from '@/components/payments/Testimonials'
import React from 'react'

const Payments = () => {
  return (
    <div>
      <PaymentsHero />
      <PaymentsGrid />
      <Integration />
      <Revenue />
      <Testimonials />
      <TrustUs /> 
    </div>
  )
}

export default Payments