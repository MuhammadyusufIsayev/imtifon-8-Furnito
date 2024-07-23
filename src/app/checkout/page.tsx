import React from 'react'
import Section1Checkout from '../components/checkout/section1'
import Section2Checkout from '../components/checkout/section2'
import SectionPink from '../components/all/sectionPink'

const Checkout = () => {
  return (
    <div>
        <Section1Checkout/>
        <Section2Checkout/>
        <SectionPink />
    </div>
  )
}

export default Checkout