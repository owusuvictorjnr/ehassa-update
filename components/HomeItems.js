'use client'

import React from 'react'
import SubHeaders from './SubHeaders'
import Image from 'next/image'
import Link from 'next/link'
import { ImBooks } from 'react-icons/im'
import { HiGlobeEuropeAfrica } from 'react-icons/hi2'
import { TbCertificate } from 'react-icons/tb'
import { FaUniversity } from 'react-icons/fa'
import { myData } from '@/utils/data'
import { BsArrowRight } from 'react-icons/bs'

const HomeItems = () => {
  return (
    <>
      <div className="">
        <div className="mt-[3rem] md:mt-[3rem]">
          <div className="sticky z-50 top-[4rem] md:top-[2rem] text-blue-900 text-sm text-center  md:text-xl lg:text-3xl">
            <SubHeaders
              label=" welcome to all nations university school of engineering koforidua
            ghana west africa"
            />
          </div>
        </div>

        <div className="min-h-[20rem]">
          <Image
            src="/images/main.jpg"
            alt="main campus"
            width="1000"
            height="1000"
            className="w-full rounded-md mx-auto  pb-5 h-[20rem] md:h-[50rem] lg:h-[60rem]"
          />
        </div>

        {/* Departments */}
        <div className="sticky z-50 top-[3rem] text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
          <SubHeaders label="our departments " />
        </div>
        <div className="grid grid-cols-1 gap-10 mb-5 mt-[1rem] rounded-lg px-[1rem] pb-5 mx-auto  lg:pl-[3rem] lg:grid-cols-3 md:grid-cols-2">
          {myData.homeScreens.map((department, _index) => {
            return (
              
              // eslint-disable-next-line react/jsx-key
              <div className="">
                <Link href={`/department/${department.slug}`} className="">
                  <Image
                    src={department.image}
                    alt={department.name}
                    className="rounded-md h-[25rem] w-[35rem] mb-5 mt[3rem]  "
                    height="1000"
                    width="1000"
                  />
                </Link>
                <div
                  className="texr-2xl text-black flex justify-center capitalize "
                  key={_index.slug}
                >
                  {department.name}
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-yellow-500 w-full py-2 rounded-full text-blue-900 capitalize text-sm md:text-xl lg:text-2xl lg:w-[20rem]"
                    type="submit"
                  >
                    <h2 className="">more</h2>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* About */}
        <div>
          <div className="sticky top-[3rem] z-50  text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
            <SubHeaders label="about" />
          </div>
          <div className="mb-5">
            <div className="min-h-[30rem] relative">
              <div>
                <div className="flex gap-2 pt-10 px-5 lg:mt-10">
                  <Image
                    src="/logo/anulogo.png"
                    alt="about"
                    height="1000"
                    width="1000"
                    className="h-[3rem] w-[3rem] rounded-full bg-yellow-600"
                  />
                  <div className="pt-3 capitalize text-blue-700 text-sm md:text-lg">
                    all nations university
                  </div>
                </div>
              </div>
              <div className="pt-2 mt-[1rem] flex justify-center  capitalize text-sm text-blue-800 font-bold md:text-2xl lg:text-3xl">
                about the school of engineering and allied science
              </div>

              <div className="pt-5 container mx-auto px-5">
                <p className="text-sm z-50  text-blue-500 md:text-xl lg:px-[10rem]">
                  {' '}
                  We are one of the largest, most diverse universities in the
                  ghana with over 5,000 students in ghana, and a further 1,000
                  studying across 20 countries for all nations University. all
                  nations University was established by dr. donkor in 1983 for
                  the public benefit and it is recognized globally. Throughout
                  our great history, all nations has offered access to a wide
                  range of academic opportunities. As a world leader in higher
                  education, the University has pioneered change in the sector.
                </p>

                <div title="Read More" className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                  >
                    <h2 className="">read more</h2>

                    {/* TODO: Arrow to indicate read more*/}
                  </button>
                </div>
                <div className="mt-[3rem]">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="px-5 py-5">
                      <div className="flex gap-2">
                        <ImBooks size={40} color="red" />
                        <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize lg:text-3xl md:text-xl">
                          library
                        </h2>
                      </div>
                      <div className="">
                        <p className="pt-2 text-sm text-blue-500 md:text-lg lg:text-2xl">
                          We are one of the largest, most diverse universities
                          in the ghana with over 5,000 students in ghana, and a
                          further 1,000 studying across 20 countries for all
                          nations University.
                        </p>
                      </div>
                      <div
                        title="Read More"
                        className="pt-2 flex justify-center"
                      >
                        <button
                          type="submit"
                          className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                        >
                          <h2 className="flex justify-center">
                            <BsArrowRight size={30} />
                          </h2>
                        </button>
                      </div>
                    </div>
                    <div className="px-5 py-5">
                      <div className="flex gap-2">
                        <HiGlobeEuropeAfrica size={40} color="red" />
                        <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize lg:text-3xl md:text-xl">
                          global partners
                        </h2>
                      </div>
                      <div className="">
                        <p className="pt-2 text-sm text-blue-500 md:text-lg lg:text-2xl">
                          We are one of the largest, most diverse universities
                          in the ghana with over 5,000 students in ghana, and a
                          further 1,000 studying across 20 countries for all
                          nations University.
                        </p>
                      </div>
                      <div
                        title="Read More"
                        className="pt-2 flex justify-center"
                      >
                        <button
                          type="submit"
                          className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                        >
                          <h2 className="flex justify-center">
                            <BsArrowRight size={30} />
                          </h2>
                        </button>
                      </div>
                    </div>

                    <div className="px-5 py-5">
                      <div className="flex gap-2">
                        <TbCertificate size={40} color="red" />
                        <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize lg:text-3xl md:text-xl">
                          awards
                        </h2>
                      </div>
                      <div className="">
                        <p className="pt-2 text-sm text-blue-500 md:text-lg lg:text-2xl">
                          We are one of the largest, most diverse universities
                          in the ghana with over 5,000 students in ghana, and a
                          further 1,000 studying across 20 countries for all
                          nations University.
                        </p>
                      </div>
                      <div
                        title="Read More"
                        className="pt-2 flex justify-center"
                      >
                        <button
                          type="submit"
                          className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                        >
                          <h2 className="flex justify-center">
                            <BsArrowRight size={30} />
                          </h2>
                        </button>
                      </div>
                    </div>

                    <div className="px-5 py-5">
                      <div className="flex gap-2">
                        <FaUniversity size={40} color="red" />
                        <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize lg:text-3xl md:text-xl">
                          education services
                        </h2>
                      </div>
                      <div className="">
                        <p className="pt-2 text-sm text-blue-500 md:text-lg lg:text-2xl">
                          We are one of the largest, most diverse universities
                          in the ghana with over 5,000 students in ghana, and a
                          further 1,000 studying across 20 countries for all
                          nations University.
                        </p>
                      </div>
                      <div
                        title="Read More"
                        className="pt-2 flex justify-center"
                      >
                        <button
                          type="submit"
                          className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                        >
                          <h2 className="flex justify-center">
                            <BsArrowRight size={30} />
                          </h2>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*News & Updates*/}
        <div>
          <div className="sticky top-[4rem] text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
            <SubHeaders label="News & Updates" />
          </div>
        </div>

        <div className="min-h-[20rem] mt-[10rem]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <Image
                  src="/images/sir.jpg"
                  alt="event picture"
                  height="1000"
                  width="1000"
                  className="rounded-md w-[30rem] h-[20rem] "
                />
              </div>
              <div className="mt-5 mb-10">
                <p className="text-blue-800 text-sm text-center px-5 md:text-xl lg:text-3xl lg:px-10 hover:text-amber-300 ">
                  Professor Albert joint research on mobile money in Tanzania
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <Image
                  src="/images/sir.jpg"
                  alt="event picture"
                  height="1000"
                  width="1000"
                  className="rounded-md w-[30rem] h-[20rem] "
                />
              </div>
              <div className="mt-5  mb-10">
                <p className="text-blue-800 text-sm text-center px-5 md:text-xl lg:text-3xl lg:px-10 hover:text-amber-300 ">
                  Professor Albert joint research on mobile money in Tanzania
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <Image
                  src="/images/sir.jpg"
                  alt="event picture"
                  height="1000"
                  width="1000"
                  className="rounded-md w-[30rem] h-[20rem] "
                />
              </div>
              <div className="mt-5 mb-10">
                <p className="text-blue-800 text-sm text-center px-5 md:text-xl lg:text-3xl lg:px-10 hover:text-amber-300 ">
                  Professor Albert joint research on mobile money in Tanzania
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <button
            title="Read More"
            type="submit"
            className="bg-yellow-500 flex justify-center mx-auto w-full py-2 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
          >
            <h2 className="flex justify-center">
              <BsArrowRight size={30} />
            </h2>
          </button>
        </div>

        {/* Apply */}
        <div className="bg-yellow-600 h-[5rem">
          <div className="flex gap-2 justify-center items-center">
            <Link href="/">
              <Image
                src="/logo/anulogo.png"
                alt="logo"
                height="100"
                width="100"
                className="rounded-full h-10 w-10 flex items-center"
              />
            </Link>
            <div className="text-sm font-bold text-white hover:text-blue-300 md:text-xl lg:text-3xl">
              <button title="Apply Now" className="capitalize ">
                apply to all nations university school of engineering now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeItems
