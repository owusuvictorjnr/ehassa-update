'use client'

import SubHeaders from '@/components/SubHeaders'
import jsonData from '@/utils/data.json'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export async function getServerSideProps(context) {
  const department = jsonData[context.params.slug]
  return {
    props: {
      department,
    },
  }
}

const HomeScreen = ({ department }) => {
  const [data, setData] = useState(jsonData)
  const { query } = useRouter()
  const { slug } = query

  useEffect(() => {
    const dept = jsonData[slug]
    setData(dept)
  }, [slug])

  console.log(department.executives)

  return (
    <div>
      <div className="mt-[7rem]">
        <SubHeaders label="about" program={department.programmes} />
      </div>

      <div className="grid  grid-cols-1  lg:grid-cols-4 px-12 md:grid-cols-2 mb-5 rounded-lg border border-gray-100 shadow md:pl-[9rem] pr-20 gap-5 bg-[#023047]"></div>
    </div>
  )
}

export default HomeScreen
