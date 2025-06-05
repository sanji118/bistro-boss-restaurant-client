import SectionTitle from '../../components/SectionTitle'
import MenuFoodCard from '../../components/cards/MenuFoodCard'
import { Link } from 'react-router-dom'

const PopularMenu = ({popularMenu}) => {
    const slicedMenu = popularMenu.slice(0,6)
  return (
    <div className='my-10'>
        <div>
            <SectionTitle subtitle={'Popular items'} title={'FROM OUR MENU'} />
        </div>
        <div className='grid md:grid-cols-2 gap-6 py-10 px-5 lg:px-0'>
            {
                slicedMenu.map(menuItem =>(
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