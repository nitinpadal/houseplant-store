import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Leaf } from 'lucide-react'
import { useSelector } from 'react-redux'

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
            <Leaf size={32} />
            <span className="text-2xl font-bold">GreenLeaf</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Plants
            </Link>
            <Link 
              to="/cart" 
              className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors font-medium relative"
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              to="/products"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Plants
            </Link>
            <Link 
              to="/cart" 
              className="relative text-gray-700 hover:text-green-600 transition-colors"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header