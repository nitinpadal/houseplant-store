import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, ArrowRight } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1400375/pexels-photo-1400375.jpeg?auto=compress&cs=tinysrgb&w=1200')"
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Leaf size={60} className="text-green-400 mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold">
              GreenLeaf
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Houseplants
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Bring nature indoors with our carefully curated collection of premium houseplants. 
            From low-maintenance succulents to statement tropical plants, we help you create 
            your perfect green sanctuary.
          </p>
          
          <Link
            to="/products"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Get Started</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose GreenLeaf?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're passionate about helping you bring the beauty and benefits of plants into your home
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-selected plants from trusted growers, ensuring the highest quality for your home
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Care Guides</h3>
              <p className="text-gray-600">
                Detailed care instructions and ongoing support to help your plants thrive
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe Delivery</h3>
              <p className="text-gray-600">
                Specially designed packaging ensures your plants arrive healthy and happy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage