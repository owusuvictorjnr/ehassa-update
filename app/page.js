import React from 'react'
import layout from '@/app/layout'
import HomeItems from '@/components/HomeItems'

const HomePage = () => {
  return (
    <layout>
      <div title="home">
        <HomeItems />
      </div>
    </layout>
  )
}

export default HomePage
