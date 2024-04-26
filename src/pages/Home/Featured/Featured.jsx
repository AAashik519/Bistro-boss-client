import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import featuredImg from  '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
  return (
    <div className='feature-item   text-white p-5'>
        <SectionTitle subHeading={'---Check it Out'} heading={'From our MEnu'} />

        <div className='md:flex justify-center items-center pt-8 pb-20 px-16 gap-20'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div>
                <p>March 20,2024</p>
                <p className='uppercase'>Where Can i get Some?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab incidunt vel recusandae aliquam ipsam, similique nisi eveniet adipisci error excepturi, ducimus ratione labore odio exercitationem voluptate amet nam harum minima. Perspiciatis ullam veniam, nam nostrum dolore, adipisci, repellendus ex minus ipsam fugit nesciunt modi asperiores numquam cupiditate qui magnam.</p>
                <button className="btn  btn-outline border-0 border-b-4 border-l-2 border-r-[1px] border-t-[1px]  ">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Featured