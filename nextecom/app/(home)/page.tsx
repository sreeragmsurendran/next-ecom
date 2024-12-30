import { HomeCard } from '@/components/shared/home/home-cards'
import HomeCaroscel from '@/components/shared/home/home-carosels'
import ProductSlider from '@/components/shared/product/product-slider'
import { Card, CardContent } from '@/components/ui/card'
import { getAllCategories, getProductsByTag, getProductsForCard } from '@/lib/actions/product.actions'
import data from '@/lib/data'
import { toSlug } from '@/lib/utils'
import React from 'react'

const Page = async () => {


  const categories = (await getAllCategories()).slice(0, 4)
  const newArrivals = await getProductsForCard({
    tag: 'new-arrival',
    limit: 4,
  })
  const featureds = await getProductsForCard({
    tag: 'featured',
    limit: 4,
  })
  const bestSellers = await getProductsForCard({
    tag: 'best-seller',
    limit: 4,
  })

  const todaysDeals = await getProductsByTag({
    tag:"todays-deal"
  })
  const cards = [
    {
      title: 'Categories to explore',
      link: {
        text: 'See More',
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: 'Explore New Arrivals',
      items: newArrivals,
      link: {
        text: 'View All',
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: 'Discover Best Sellers',
      items: bestSellers,
      link: {
        text: 'View All',
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: 'Featured Products',
      items: featureds,
      link: {
        text: 'Shop Now',
        href: '/search?tag=new-arrival',
      },
    },
  ]


  return <>
  <HomeCaroscel items={data.carousels}/>
  <div className='md:p4 md:space-y-4 bg-border'>
    <HomeCard cards={cards}/>
    <Card>
      <CardContent>
        <ProductSlider title="Today's Deals" products={todaysDeals} />
      </CardContent>
    </Card>
  </div>
  </> 
}

export default Page