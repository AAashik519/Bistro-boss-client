import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import axios from 'axios'
import MenuItem from '../../Shared/MenuItem/MenuItem'

const PopularMenu = () => {
    const [menu, setMenu]= useState([])
    console.log(menu);
    useEffect(()=>{
  
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
        const popularItem =data.filter(item=> item.category === 'popular')
        setMenu(popularItem)
        })
    },[])

  return (
    <div className='my-10'>
        <SectionTitle subHeading={'---Check it out---'} heading={'From Our Menu'} />

        <div className='grid md:grid-cols-2 gap-5'>
            {
                menu.map((item => <MenuItem  item={item} key={item._id}/>))
            }
            
        </div>
       <div className='flex justify-center items-center mt-10'>
       <button className="btn   btn-outline border-0 border-b-4 border-l-2 border-r-[1px] border-t-[1px]  ">View Full Menu</button>
       </div>


    </div>
  )
}

export default PopularMenu