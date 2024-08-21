import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurentMenu = () => {
  const { resID } = useParams();

  const recommendedResInfo = useRestaurentMenu(resID);

  const RestaurantName = recommendedResInfo?.cards[0]?.card?.card.text;

  const categories =
    recommendedResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log({ recommendedResInfo });

  return (
    <>
      <section className="w-5/12 mx-auto ">
        <div className="">
          <h1 className="text-4xl font-bold mb-5">{RestaurantName}</h1>
        </div>

        {categories?.map((category) => (
          <RestaurantCategory
            key={category?.card.card.title}
            data={category?.card?.card}
          />
        ))}
      </section>
    </>
  );
};

export default RestaurentMenu;
