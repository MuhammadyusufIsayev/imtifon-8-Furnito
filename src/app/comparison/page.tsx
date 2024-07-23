import React from 'react'
import Section1Comparison from '@/app/components/comparison/section1'
import Section2Comparison from '@/app/components/comparison/section2'
import SectionPink from '../components/all/sectionPink'

const Comparison = () => {
  return (
    <div>
      <Section1Comparison />
      <Section2Comparison />
      <SectionPink/>
    </div>
  )
}

export default Comparison