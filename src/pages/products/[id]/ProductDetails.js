import React from 'react';
import { FaShareAlt, FaHeart } from 'react-icons/fa';

function ProductDetails() {
  return (
    <div className="bg-green-50 min-h-screen flex justify-center items-center py-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex md:flex-row flex-col max-w-2xl">
        {/* Image Section */}
        <div className="relative md:w-1/2 w-full bg-green-200 p-6">
          <div className="absolute top-4 left-4 flex space-x-2">
            <button className="bg-white bg-opacity-50 rounded-full p-2 text-green-600 hover:bg-opacity-75">
              <FaShareAlt />
            </button>
          </div>
          <div className="absolute top-4 right-4">
            <button className="bg-white bg-opacity-50 rounded-full p-2 text-red-600 hover:bg-opacity-75">
              <FaHeart />
            </button>
          </div>
          <img
            src="https://via.placeholder.com/400x400.png?text=Green+Apples"
            alt="Delicious Green Apples"
            className="w-full h-auto object-contain"
          />
          <div className="flex justify-around mt-4">
            <img
              src="https://via.placeholder.com/80x80.png?text=Green+Apple+1"
              alt="Green Apple 1"
              className="w-20 h-20 rounded-md object-cover cursor-pointer border-2 border-green-400"
            />
            <img
              src="https://via.placeholder.com/80x80.png?text=Green+Apple+Slice"
              alt="Green Apple Slice"
              className="w-20 h-20 rounded-md object-cover cursor-pointer border-2 border-transparent hover:border-green-400"
            />
            <img
              src="https://via.placeholder.com/80x80.png?text=Whole+Green+Apple"
              alt="Whole Green Apple"
              className="w-20 h-20 rounded-md object-cover cursor-pointer border-2 border-transparent hover:border-green-400"
            />
            <img
              src="https://via.placeholder.com/80x80.png?text=Another+Green+Apple"
              alt="Another Green Apple"
              className="w-20 h-20 rounded-md object-cover cursor-pointer border-2 border-transparent hover:border-green-400"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Delicious Apples</h2>
            <p className="text-sm text-gray-500 mb-3">COD 4500</p>
            <p className="text-3xl font-semibold text-green-600 mb-4">R$ 7.93</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">SELECT A COLOR</h3>
              <div className="flex space-x-3">
                <button className="w-8 h-8 rounded-full bg-green-400 shadow-md cursor-pointer border-2 border-green-600"></button>
                <button className="w-8 h-8 rounded-full bg-yellow-400 shadow-md cursor-pointer border-2 border-transparent hover:border-yellow-600"></button>
                <button className="w-8 h-8 rounded-full bg-red-400 shadow-md cursor-pointer border-2 border-transparent hover:border-red-600"></button>
                <button className="w-8 h-8 rounded-full bg-red-600 shadow-md cursor-pointer border-2 border-transparent hover:border-red-800"></button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">BENEFITS</h3>
              <ul className="list-disc pl-5 text-gray-600 text-sm">
                <li>Apples are nutritious</li>
                <li>Apples may be good for weight loss</li>
                <li>Apples may be good for bone health</li>
                <li>They're linked to a lowest risk of diabetes</li>
              </ul>
            </div>
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;