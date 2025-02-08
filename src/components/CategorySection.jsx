import React from 'react'
import Bike1 from '../assets/Images/Bike1.jpg'
import Cars from '../assets/Images/Cars.jpg'
import Helmets from '../assets/Images/Helmets.jpg' 
import RidingGear from '../assets/Images/RidingGear.jpg'

const categories = [
  {
    title: 'Bikes',
    imageUrl: Bike1,
  },
  {
    title: 'Cars',
    imageUrl: Cars,
  },
  {
    title: 'Helmets',
    imageUrl: Helmets,
  },
  {
    title: 'Riding Gears',
    imageUrl: RidingGear,
  },
]

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-56 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-3 rounded-lg">
            <p className="text-xl font-bold text-white">{category.title}</p>
            <p className="text-gray-200">View All</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
