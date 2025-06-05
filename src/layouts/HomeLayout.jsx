import React from 'react'
import Banner from '../components/Banner'
import Category from '../pages/Category/Category'
import DescribeBanner from '../components/DescribeBanner'
import FromOurMenu from '../pages/home/FromOurMenu'

const HomeLayout = () => {
  return (
    <div>
        <Banner></Banner>
        <Category/>
        <DescribeBanner title={'Bistro Boss'} description={'Boss Bistro is a chic restaurant serving gourmet pizzas, fresh salads, savory soups, and decadent desserts in an elegant setting. Open daily from 11am to 10pm, we blend quality ingredients with exceptional service for a memorable dining experience. Perfect for both casual meals and special occasions.'}/>
        <FromOurMenu />
    </div>
  )
}

export default HomeLayout