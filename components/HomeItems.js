import React from 'react'
import SubHeaders from './SubHeaders'

const HomeItems = () => {
  return (
    <>
      <div className="flex flex-col min-h-[35rem]">
        <div className="mt-[3rem] md:mt-[2.3rem]">
          <div className="sticky top-[1rem] md:top-[2rem] text-blue-900 text-sm text-center  md:text-xl lg:text-3xl">
            <SubHeaders
              label=" welcome to all nations university school of engineering koforidua
            ghana west africa"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeItems
