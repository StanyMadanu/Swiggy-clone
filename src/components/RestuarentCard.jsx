import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestuarentCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.info;

  const { loginUser } = useContext(UserContext);

  return (
    <div className="w-[250px] h-[350px] p-5 bg-purple-50 rounded-lg">
      <div className="">
        <img
          className="rounded-lg w-[100%] h-[150px]"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>

      <h4 className="font-semibold text-lg my-3 mb-0">{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Rating</h5>
      <h5>{sla.deliveryTime} minutes</h5>
      <h5 className="font-bold">User: {loginUser}</h5>
    </div>
  );
};

export default RestuarentCard;

export const Promoted = (RestuarentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute px-4 m-5 bg-green-500 text-white rounded-lg">
          Open now
        </label>
        <RestuarentCard {...props} />
      </div>
    );
  };
};
