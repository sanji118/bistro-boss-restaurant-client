
import SectionTitle from '../../components/SectionTitle'
import FoodCard from '../../components/cards/FoodCard'

const ChefRecommend = ({chefRecommend}) => {
  return (
    <div className='my-10'>
        <div>
            <SectionTitle title={'CHEF RECOMMENDS'} subtitle={'Should Try'} />
        </div>
        <div className='carousel carousel-center max-w-screen-xl space-x-4 p-4'>
            {
                chefRecommend.map(menuItem =>(
                    <FoodCard key={menuItem._id} menuItem={menuItem} />
                ))
            }
        </div>
    </div>
  )
}

export default ChefRecommend