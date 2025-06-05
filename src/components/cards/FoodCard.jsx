import React from 'react'

const FoodCard = ({menuItem}) => {
  const {_id, name, recipe, image, category, price} = menuItem;


  return (
    <div className='carousel-item'>
      <div class="card bg-base-300 w-96 shadow-sm rounded-none">
        <figure>
          <img
            src={image}
            alt={name} />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{recipe}</p>
          <div class="card-actions">
            <button class="btn border-0 border-b-3 border-yellow-600 rounded-lg text-yellow-600">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCard