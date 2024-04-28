import { Helmet } from "react-helmet-async";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
    const categories =['salad','pizza','soup','dessert','drinks']
    const category = useParams()
    const initialIndex= categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    // console.log(tabIndex);
    // console.log(category);
    // console.log(initialIndex);
    const [menu] = useMenu()
    const dessert=menu.filter(item =>item.category === 'dessert')
    const pizza=menu.filter(item =>item.category === 'pizza')
    const salad=menu.filter(item =>item.category === 'salad')
    const soup=menu.filter(item =>item.category === 'soup')
    const drinks=menu.filter(item =>item.category === 'drinks')

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        img={orderCover}
        title={"Order Shop"}
        subTitle={"Would you like to try a Dish"}
      />
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)} >
          <TabList className="flex  justify-center gap-6 mt-5    " >
            <Tab>Salad</Tab>
            <Tab>Pizza </Tab>
            <Tab>Soups </Tab>
            <Tab>Desserts </Tab>
            <Tab>Drinks </Tab>
          </TabList>

          <TabPanel >
           <OrderTab items={salad} />
          </TabPanel>
          <TabPanel >
           <OrderTab items={soup} />
          </TabPanel>
          <TabPanel >
           <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel >
           <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel >
           <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel >
           <OrderTab items={drinks} />
          </TabPanel>
         
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
