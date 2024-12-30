import HomeCaroscel from '@/components/shared/home/home-carosels'
import data from '@/lib/data'
import React from 'react'

const Page = () => {
  return <HomeCaroscel items={data.carousels}/>
}

export default Page