import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { Plus } from 'lucide-react'

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  
  const isInCart = cartItems.some(item => item.id === plant.id)

  const handleAddToCart = () => {
    dispatch(addToCart(plant))
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={plant.image} 
          alt={plant.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
          {plant.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{plant.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{plant.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">${plant.price}</span>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
              isInCart 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-green-500 text-white hover:bg-green-600 transform hover:scale-105 shadow-md hover:shadow-lg'
            }`}
          >
            <Plus size={16} />
            <span>{isInCart ? 'Added' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard