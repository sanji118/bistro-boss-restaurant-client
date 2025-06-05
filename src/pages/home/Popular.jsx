
import SectionTitle from '../../components/SectionTitle'
import MenuFoodCard from '../../components/cards/MenuFoodCard'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getMenu } from '../../utils/useMenu'
import { Link } from 'react-router-dom'

const PopularMenu = () => {
    const queryClient = useQueryClient();

    const {
        data: menu = [],
        isLoading,
        error
    } = useQuery({
        queryKey: ['apartments'],
        queryFn: getMenu
    })
    const filteredMenu = menu.filter(menuItem=> menuItem.category === 'popular');
    console.log(filteredMenu.length)
    
  return (
    <div className='my-10'>
        <div>
            <SectionTitle subtitle={'Popular items'} title={'FROM OUR MENU'} />
        </div>
        <div className='grid md:grid-cols-2 gap-6 py-10 px-5 lg:px-0'>
            {
                filteredMenu.map(menuItem =>(
                    <MenuFoodCard key={menuItem._id} menuItem={menuItem} />
                ))
            }
        </div>
        <div className='w-fit mx-auto'>
            <Link to={'/menu'}>
                <button className='btn bg-white border-0 border-b-3 border-black rounded-lg'>View Full Menu</button>
            </Link>
        </div>
    </div>
  )
}

export default PopularMenu;