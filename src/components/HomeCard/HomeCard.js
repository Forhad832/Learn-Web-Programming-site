import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({title,text,link}) => {
  return (
    <div className='py-20 text-center ' >
        <div className="flex justify-center">
            <div className="block w-full mx-auto text-center bg-white rounded-lg shadow-lg md:w-2/5">
            
                <div className="p-6">
                <h5 className="mb-5 text-5xl font-bold text-gray-900">{title}</h5>
                <p className="mb-4 text-base text-gray-700">
                {text}
                </p>
               <Link to={link}> <button type="button" class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">আরো জানুন</button></Link>
                </div>
            
            </div>
            
</div>
    </div>
  )
}

export default HomeCard
