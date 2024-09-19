import React, { useState } from "react";
import CategoryItems from "./CategoryItems";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleShowItems = (showItems) => {
    setShowIndex();
  };

  return (
    <div>
      {/* header */}
      <div key={data?.title} className="border-b-2 mb-5 shadow-lg">
        <div
          className="flex justify-between p-3 cursor-pointer bg-slate-200 rounded-t-lg"
          onClick={handleShowItems}
        >
          <h1 className="text-xl font-bold">{`${data?.title} (${data?.itemCards?.length})`}</h1>
          <span>🔽</span>
        </div>

        {/* body */}
        {showItems && <CategoryItems items={data?.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
