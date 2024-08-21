import { useState, useEffect } from "react";
import { RESTAURENT_INFO_API } from "./constants";

const useRestaurentMenu = (resID) => {
  const [resInfo, setResInfo] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURENT_INFO_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;
