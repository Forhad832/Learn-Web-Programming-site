import React, { useState } from 'react';

import Top from '../../TopHead/Top';
import CssCategories from './CssCategories';
import { cssdata } from './cssdata';
const CSS = () => {
    const newCategories = cssdata.filter((item)=> item.category);
  
    
   
  
    const[index,setIndex] = useState(0)
    const {id,title,desc,titleTwo} = cssdata[index]
    
    const handleICreament =()=>{
        setIndex((old)=> old + 1)
       
    }
  return (
    <div className='container px-4 mx-auto md:px-0'>
         <Top  title='সিএসএস'/>
        <div className="grid grid-cols-12 sm:gap-10 py-20">
          
            <div className='col-span-12 md:col-span-9 '>
            
            <div className="flex flex-col-reverse justify-between min-h-full md:flex-col">

            <article key={id}>
                <h3 className='mb-8 text-4xl font-bold '>{title}</h3>
                {desc.map((des)=>{
                    return (
                        <p className='mb-10 text-lg'>{des}</p>
                    )
                })}
                {titleTwo.map((itemTwo)=>{
                    const {head,text,input} = itemTwo;
                    return (
                        <div>
                            <h3 className='mb-5 text-2xl font-semibold text-[#0a192f]'>{head}</h3>
                            {text.map((para)=>{
                                return (
                                    <p className='mb-10 text-lg'>{para}</p>
                                )
                            })}
                          
                            <div className="mb-10">
                            {input?.map((inputText)=>{
                                return (
                                  
                                     <div className='w-full p-2 text-black bg-sky-400 first-of-type:text-white'>
                                        <code>{inputText}</code>
                                    </div>
                                  
                                )
                            })}
                            </div>
                            </div>
                       
                    )
                })}
                       
                            
            </article>
            <article>
               <div className='flex justify-between mb-10'>
                    <button onClick={()=>{setIndex((previous)=>previous -1)}}  disabled={index===0 ? true : false} className='px-3 py-2 text-gray-100 bg-[#0a193d] rounded shadow-lg'>Prev</button>


                    <button onClick={handleICreament}  disabled={index===21 ? true : false}  className='px-3 py-2 text-gray-100 bg-[#0a193d] rounded shadow-lg'>next</button>
                </div>
               </article>
            </div>
           
            </div>
            <div className="hidden md:block md:col-span-3 categiry">
              <div className="w-5/6 mx-auto">
              <CssCategories toggle={index} categories={newCategories} filteredCategories={setIndex}/>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default CSS
