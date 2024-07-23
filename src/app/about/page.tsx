import React from 'react'
import Section1About from '../components/about/section1'
import Section2About from '../components/about/section2'
import SectionPink from '../components/all/sectionPink'

const About = () => {
  return (
    <div>
      <Section1About />
      <Section2About/>
      <SectionPink/>
    </div>
  )
}

export default About