import React from 'react'

const HtmlCategories = ({filteredCategories,categories,toggle}) => {
    console.log(categories)
  return (
    <div className='flex flex-col gap-4 '>
        {categories.map((categorys,index)=>{
          const {category,id} = categorys
            return (
                <button key={id} className={ `''px-4 py-2 text-lg font-medium''${index === toggle && 'px-4 py-2 text-lg font-medium text-gray-100 bg-[#0a192f] rounded'}`} onClick={()=>filteredCategories(index)}>{category}</button>
            )
        })}
      
    </div>
  )
}

export default HtmlCategories
