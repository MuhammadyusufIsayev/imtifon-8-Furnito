import React from 'react'
import Image from 'next/image'
import pinkSection1 from '@/app/assets/icons/pink-section1.svg'
import pinkSection2 from '@/app/assets/icons/pink-section2.svg'
import pinkSection3 from '@/app/assets/icons/pink-section3.svg'
import pinkSection4 from '@/app/assets/icons/pink-section4.svg'

const SectionPink = () => {
  return (
    <div className="bg-[#FAF3EF] py-8">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-center">
          <Image
            src={pinkSection1}
            alt="High Quality"
            width={50}
            height={50}
            className="mx-auto mb-2"
            style={{ width: 'auto', height: 'auto' }}
          />
          <h3 className="font-semibold">High Quality</h3>
          <p className="text-sm">crafted from top materials</p>
        </div>
        <div className="text-center">
          <Image
            src={pinkSection2}
            alt="Warranty Protection"
            width={50}
            height={50}
            className="mx-auto mb-2"
            style={{ width: 'auto', height: 'auto' }}
          />
          <h3 className="font-semibold">Warranty Protection</h3>
          <p className="text-sm">Over 2 years</p>
        </div>
        <div className="text-center">
          <Image
            src={pinkSection3}
            alt="Free Shipping"
            width={50}
            height={50}
            className="mx-auto mb-2"
            style={{ width: 'auto', height: 'auto' }}
          />
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-sm">Order over 150 $</p>
        </div>
        <div className="text-center">
          <Image
            src={pinkSection4}
            alt="24 / 7 Support"
            width={50}
            height={50}
            className="mx-auto mb-2"
            style={{ width: 'auto', height: 'auto' }}
          />
          <h3 className="font-semibold">24 / 7 Support</h3>
          <p className="text-sm">Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default SectionPink
