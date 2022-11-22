import React from 'react';
import { projectdata } from './projectdata';
const Project = () => {
  return (
    <section className='bg-[#0a192f] ' id='work'>
      <div className="container px-4 mx-auto ">
      <div className='pt-10 text-center'>
              
                <h2 className='inline text-gray-100 text-4xl font-bold border-b-4 border-[#47B5FF] mb-5'>Projects</h2>
                <p className='text-[#47b5ff] text-lg font-semibold my-4'>I have Created many websites</p>
            </div>

         


            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-44">
            {projectdata.map((work)=>{
                const {id,image,btn1,btn2,text,url,codeUrl}= work
                return (
                    <div key={id} className='text-gray-300 bg-transparent rounded-md shadow-lg same-height '>
                    <img src={image} alt="" className='w-full h-56 img' />
                       <div className='px-4'>
                    
                        <div className='flex items-center justify-between gap-4 my-4'>
                            <a target='_blank' rel="noopener noreferrer" href={url} className='btn btn-primary  px-5 py-2 rounded text-[#0a192f]  font-semibold bg-[#47b5ff]'>{btn1}</a>
                            <a href={codeUrl} className='btn border-[#47B5FF] border px-5 py-2 rounded hover:text-[#0a192f] font-semibold hover:bg-[#47b5ff]'>{btn2}</a>
                            
                        </div>
                        <p className='mb-3 text-lg font-semibold text-[#47b5ff]'>{text}</p>
                       </div>
                    </div>
                )
            })}
            </div>
           <div>
          
           </div>
 
      </div>
    </section>
  )
}

export default Project;
