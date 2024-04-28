import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price,recipe } = item
  return (
    <div className="mt-2 " >
      <div className="card  bg-base-100 shadow-xl h-[500px]  ">
  
          <img
            src={image}
            alt="Shoes"
          />
      
        <p className="bg-black text-white absolute right-4 top-4 px-3 py-1 rounded ">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
          <button className="btn   btn-outline border-0 border-b-4 border-l-2 border-r-[1px] uppercase border-t-[1px]  ">
          Add to Cart
        </button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
