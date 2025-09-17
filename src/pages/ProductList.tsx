import React, { useState } from 'react'
import Header from '../components/Header.tsx'
import ProductCard from '../components/ProductCard.tsx'
import { plants } from '../data/plants'

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Indoor', 'Outdoor', 'Succulents']
  
  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Plant Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of beautiful houseplants, 
            perfect for every space and skill level
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-md">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map(plant => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No plants found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList