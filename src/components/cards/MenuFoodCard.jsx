

const MenuFoodCard = ({menuItem}) => {
    const {_id, name, recipe, image, category, price} = menuItem;

  return (
    <div className='flex gap-8'>
        <div>
            <img src={image} alt={name} className='rounded-tl-none rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]' />
        </div>
        <div>
            <h2 className="cinzel text-xl">{name} ------------------ </h2>
            <p className="opacity-50">{recipe}</p>
        </div>
        <div><p className="text-yellow-600 text-xl">${price}</p></div>
    </div>
  )
}

export default MenuFoodCard