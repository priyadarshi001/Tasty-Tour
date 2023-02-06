import { useParams } from "react-router-dom"; // to read dynamic URL params
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const param = useParams();
  const resId = param.id; 
  // console.log(param); // logs id of restaurant

  const restaurant = useRestaurant(resId); // !custom Hook

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        {/* <h1>Restaurant id: {resId}</h1> */}
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt="restaurant-img"
        />
        <h2>{restaurant?.name}</h2>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
        <h3>{restaurant?.sla?.slaString}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {/** restaurant?.menu?.items gives an object over which we cannot map==> Convert it to an array using "Object.values" */}
          {/* {console.log(Object.values(restaurant.menu.items))} */}
          {/** {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))} */}
          {Object.values(restaurant?.menu?.items)
            .filter((item) => item.cloudinaryImageId)
            .map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <img src={IMG_CDN_URL + item.cloudinaryImageId} alt="img" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;