import React from "react";
import { CDN_URL } from "../utils/constants";

const CategoryItems = ({ items }) => {
  return (
    <div className="p-5 bg-slate-50 mb-3">
      {items?.map((itemDish) => (
        <div
          key={itemDish?.card?.info?.id}
          className="flex justify-between mb-5 border-b-2 p-4"
        >
          <div className="w-8/12">
            <p className="text-lg font-bold">
              {itemDish?.card?.info?.category}
            </p>
            <p className="font-semibold mb-3">
              ₹
              {itemDish?.card?.info?.defaultPrice
                ? itemDish?.card?.info?.defaultPrice / 100
                : itemDish?.card?.info?.price / 100}
            </p>
            <p>{itemDish?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <img
              className="w-full rounded-lg"
              src={CDN_URL + itemDish?.card?.info?.imageId}
              alt="dish-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;
