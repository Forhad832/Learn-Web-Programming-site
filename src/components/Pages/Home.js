import React, { useState } from 'react';

import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { homedata } from './Homedata';
import HTML from './HTML/HTML';
const Home = () => {
  const [search,setSearch] = useState('');
  const [home,setHome] = useState(homedata)
  const handleChange =(e)=>{
    setSearch(e.target.value);
   
  }
  const handleSearch = (searchValue)=>{
    let newValue = searchValue.toLowerCase();
  
    if(newValue === `html`){
     return <HTML />

   }

}
const handleSubmit = (e)=>{
	e.preventDefault();
	const filtered = homedata.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()))
	setHome(filtered)
}

  return (
 <>
<section className='bg-[#333] '>
	<div className="container px-4 mx-auto md:px-0">
		<div className="flex flex-col items-center justify-center h-screen text-center text-gray-50">
			<h2 className='mb-4 text-5xl font-bold'>কোড শিখুন </h2>
			<h2 className='mb-10 text-3xl'>ফরহাদের সাথে</h2>
			<div className='flex'>
				<form onSubmit={handleSubmit} className='flex'>
				<input value={search} onChange={handleChange} className='px-4 py-3 text-[#0a192f] outline-none  rounded-l-md w-80 placeholder:px-2' type="text"  placeholder='অনুসন্ধান করুন' />
				<button type='submit' onClick={handleSearch}  className='px-4 py-3 bg-green-600 rounded-r-md'>
					<ImSearch size={25}/>
				</button>
				</form>
			</div>
		</div>
	</div>
</section>


		{/* <HomeCard title='এইচটিএমএল' tiltetwo='html' text='ওয়েব পেজ তৈরির ভাষা' link='/html'/> */}

		{home.map((item)=>{
			const {id,title,text,link} = item
			return(
				<section className={`${id === 1 && 'bg-[#B4CDE6]'} ${id===2 && 'bg-[#06283D]'}
				${id===3 && 'bg-[#F0DB4F]'}`}>
	   <div className="container px-4 py-20 mx-auto md:px-0">
				<article  className="block w-full py-10 mx-auto text-center bg-white rounded-lg shadow-lg md:w-2/5" key={id}>
					<h2 className="mb-5 text-5xl font-bold text-gray-900">{title}</h2>
					<h4 className="mb-4 text-base text-gray-700">{text}</h4>
					<Link to={link}> <button type="button" class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">আরো জানুন</button></Link>
				</article>
				</div>
			</section>
			)
		})}


</>
  )
}

export default Home
