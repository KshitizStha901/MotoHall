import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mockData'
import FrontCar from '../assets/Images/FrontCar.jpg'
import InfoSection from '../components/infoSection'
import CategorySection from '../components/CategorySection'
import Intro from '../assets/Images/Intro.mov'
import { setProducts } from '../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
useDispatch

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state=> state.product)
  useEffect(()=>{
    dispatch(setProducts(mockData))
  })
  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12'>
          <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5 '>SHOP BY CATEGORIES</div>
          <ul className='space-y-4 bg-gray-100 p-3 border'>
            {Categories.map((category, index) => (
              <li className='flex items-center text-sm font-medium' key={index}>
                <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
          <img src={FrontCar} alt='' className='h-full w-full'/>
          <div className='absolute top-16 left-8'>
            <p className='text-white mb-4'> MOTO | NEPAL</p>
            <h2 className='text-3xl text-red-600 font-bold'> WELCOME TO MOTONEPAL</h2>
            <p className='text-xl mt-2.5 font-bold text-white'> RIDE THE FUTURE TODAY</p>
            <button className='bg-gray-300 px-8 py-1.5 text-black mt-4 hover:bg-orange-600 transform transition-transform duration-300 hover:scale-105'>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />

      <div className="w-full h-96 overflow-hidden relative">
        <video className="w-full h-full object-cover" src={Intro} autoPlay loop muted></video>
      </div>
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 1g:grid-cols-5 gap-6">
          {
            products.products.slice(0,5).map(((products)=>(
              <ProductCard product={product} />
            )))
          }
        </div>

      </div>
    </div>
  )
}

export default Home
