import React from 'react'
import SubHeaders from './SubHeaders'
import Image from 'next/image'

const HomeItems = ({ title }) => {
  return (
    <>
      <div className="flex flex-col min-h-[35rem]" title={'home'}>
        <div className="mt-[3rem] md:mt-[3rem]">
          <div className="sticky top-[1rem] md:top-[2rem] text-blue-900 text-sm text-center  md:text-xl lg:text-3xl">
            <SubHeaders
              label=" welcome to all nations university school of engineering koforidua
            ghana west africa"
            />
          </div>
        </div>

        <div className="min-h-[20rem]">
          <div>
            <Image
              src="/images/main.jpg"
              alt="main campus"
              width="1000"
              height="1000"
              className="w-full rounded-md  mx-auto flex justify-center px-5 pb-5 mt-[1rem] h-[20rem] md:w-full md:h-[30rem] lg:h-[40rem]"
            />
          </div>
        </div>

        {/* Departmenets */}

      </div>
    </>
  )
}

export default HomeItems
