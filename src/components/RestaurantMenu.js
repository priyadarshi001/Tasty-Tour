import { useParams } from "react-router-dom"; // to read dynamic URL params
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

export default function RestaurantMenu() {
  const params = useParams();
  // const {id} = useParams(); // this also works  // then just use {id}
  // console.log(par); // this will give the id of this page

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        params.id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-container">
        <h1>Restaurant id: {params.id} </h1>
        <p> {restaurant.name} </p>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="img" />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        {/** restaurant?.menu?.items gives an object over which we cannot map==> Convert it to an array using "Object.values" */}
        {/* {console.log(Object.values(restaurant.menu.items))} */}
        <ul>
          {Object.values(restaurant?.menu?.items)
            .filter((item) => item.cloudinaryImageId)
            .map(
              (
                item // displaying only those items whose images came
              ) => (
                <li key={item.id}>
                  {item.name}
                  <img src={IMG_CDN_URL + item.cloudinaryImageId} alt="img" />
                </li>
              )
            )}
        </ul>
      </div>
    </>
  );
}
