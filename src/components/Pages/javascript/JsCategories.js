import React from 'react'

const JsCategories = ({categories,filteredCategories,toggle}) => {
  return (
    <div className='flex flex-col gap-2'>
      {categories?.map((category,index)=>{
        return (
            <button className={`'px-4 py-2  text-lg font-medium' ${index === toggle && 'px-4 py-2  text-lg font-medium text-gray-100 bg-green-600 rounded'}`} onClick={()=> filteredCategories(index)}>{category}</button>
        )
      })}
    </div>
  )
}

export default JsCategories
