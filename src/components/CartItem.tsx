import React from 'react'
import { useDispatch } from 'react-redux'
import { increase, decrease, deleteItem } from '../redux/cartSlice'
import { Plus, Minus, Trash2 } from 'lucide-react'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)} each</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => dispatch(decrease(item.id))}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            disabled={item.quantity === 1}
          >
            <Minus size={14} />
          </button>
          
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          
          <button
            onClick={() => dispatch(increase(item.id))}
            className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
        
        <div className="text-right">
          <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
          <button
            onClick={() => dispatch(deleteItem(item.id))}
            className="text-red-500 hover:text-red-700 transition-colors mt-1"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem