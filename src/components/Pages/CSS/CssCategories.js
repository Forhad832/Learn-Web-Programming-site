import React from 'react';

const CssCategories = ({categories,filteredCategories,toggle}) => {
 console.log(toggle)


  return (
    <div className='flex flex-col gap-2'>
    {categories.map((categorys,index)=>{
     
        const {category,id} = categorys;
        return (
         <button key={id} className={`'px-4 py-2 text-lg font-medium' ${index === toggle && 'px-4 py-2 text-lg font-medium text-gray-100 bg-green-600 rounded'}`} onClick={()=>filteredCategories(index)}>{category}</button>
        )
    })}
  
</div>
  )
}

export default CssCategories
