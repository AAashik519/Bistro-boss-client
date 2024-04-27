import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({items, btnText ,title ,coverImg ,subTitle}) => {
  return (
    <div className="my-10">
        {title &&  <Cover img={coverImg} title={title} subTitle={subTitle}/>}
      <div className="grid md:grid-cols-2 gap-5 my-10">
        {items.slice(0,8).map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="btn   btn-outline border-0 border-b-4 border-l-2 border-r-[1px] uppercase border-t-[1px]  ">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
