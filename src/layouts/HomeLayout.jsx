import Banner from '../pages/home/Banner'
import Category from '../pages/Category/Category'
import PopularMenu from '../pages/home/Popular'
import DescribeBanner from '../pages/home/DescribeBanner'
import CallUs from '../pages/home/CallUs'
import ChefRecommend from '../pages/home/ChefRecommend'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getMenu } from '../utils/useMenu'

const HomeLayout = () => {
    const queryClient = useQueryClient();

    const {
        data: menu = [],
        isLoading,
        error
    } = useQuery({
        queryKey: ['menu'],
        queryFn: getMenu
    })
    const popularMenu = menu.filter(menuItem=> menuItem.category === 'popular');
    const chefRecommend = menu.filter(menuItem=> menuItem.category === 'offered')
  return (
    <div>
        <Banner></Banner>
        <Category/>
        <DescribeBanner title={'Bistro Boss'} description={'Boss Bistro is a chic restaurant serving gourmet pizzas, fresh salads, savory soups, and decadent desserts in an elegant setting. Open daily from 11am to 10pm, we blend quality ingredients with exceptional service for a memorable dining experience. Perfect for both casual meals and special occasions.'}/>
        <PopularMenu popularMenu={popularMenu}/>
        <CallUs/>
        <ChefRecommend chefRecommend={chefRecommend}/>
    </div>
  )
}

export default HomeLayout