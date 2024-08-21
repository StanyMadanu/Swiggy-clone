import React, { useEffect, useState } from "react";
import RestuarentCard, { Promoted } from "./RestuarentCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { ALL_RESTAURENTS } from "../utils/constants";

const Body = () => {
  const [topRatingRes, setTopRatingRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedCard = Promoted(RestuarentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ALL_RESTAURENTS);
    const json = await data.json();

    const restuarentsList =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setFilteredRes(restuarentsList);
    setTopRatingRes(restuarentsList);
  };

  const handleFilter = () => {
    let filteredData = topRatingRes.filter((item) => item.info.avgRating > 4.5);
    setTopRatingRes(filteredData);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    let filteredSearch = topRatingRes.filter((restuarent) =>
      restuarent.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRes(filteredSearch);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return <>You're offline..! Please check your connection..</>;

  return (
    <div className="mx-10 m-auto">
      <div className="flex gap-4 my-10">
        <div className="search">
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              className="border border-black pl-3 mr-3"
              type="text"
              placeholder="Seach item..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="bg-orange-300 px-3 py-1 rounded-md">
              Search
            </button>
          </form>
        </div>
        <button
          onClick={handleFilter}
          className="bg-gray-200 px-3 py-1 rounded-md"
        >
          Top Rating Restuarant
        </button>
      </div>

      <div className="flex gap-5 flex-wrap">
        {filteredRes?.map((item) => (
          <Link to={"/restaurent/" + item.info.id} key={item.info.id}>
            {item?.info?.isOpen ? (
              <PromotedCard resData={item} />
            ) : (
              <RestuarentCard resData={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
