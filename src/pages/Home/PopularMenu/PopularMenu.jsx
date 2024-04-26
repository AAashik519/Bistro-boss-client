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


    </div>
  )
}

export default PopularMenu