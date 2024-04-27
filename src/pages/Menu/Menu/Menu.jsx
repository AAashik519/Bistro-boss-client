import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladsImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
    const [menu] = useMenu()
    const dessert=menu.filter(item =>item.category === 'dessert')
    const pizza=menu.filter(item =>item.category === 'pizza')
    const salad=menu.filter(item =>item.category === 'salad')
    const soup=menu.filter(item =>item.category === 'soup')
    const offered=menu.filter(item =>item.category === 'offered')
    console.log(dessert,pizza,salad,soup,offered);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>
      {/* main cover  */}
      <Cover img={menuImg} title={'Our Menu'} subTitle={'Would you Like to try a dish?'}/>
       {/* Offer Category  */}
      <SectionTitle subHeading={"---Don't Miss---"}  heading={"Today's Offer"}/>
      <MenuCategory items={offered} btnText='Order Your favourite Food' />

        {/* Dessert Category  */}
        <MenuCategory items={dessert} coverImg={desertImg} title={'Desserts'}  subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam itaque alias harum amet, earum laudantium.
        '  btnText='Order Your favourite Food' />
        {/* Pizza Category  */}
        <MenuCategory items={pizza} coverImg={pizzaImg} title={'Pizza'}  subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam itaque alias harum amet, earum laudantium.
        '  btnText='Order Your favourite Food' />

        {/* salad Category  */}
        <MenuCategory items={salad} coverImg={saladsImg} title={'Salads'}  subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam itaque alias harum amet, earum laudantium.
        '  btnText='Order Your favourite Food' />
        {/* Soup Category  */}
        <MenuCategory items={soup} coverImg={soupImg} title={'Soups'}  subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam itaque alias harum amet, earum laudantium.
        '  btnText='Order Your favourite Food' />

    </div>
  );
};

export default Menu;
