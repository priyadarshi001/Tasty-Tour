import { useParams } from "react-router-dom"; // to read dynamic URL params
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import "../styles/RestaurantMenu.css";
import StarRateIcon from "@mui/icons-material/StarRate";

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
        {/* <h1>Restaurant id: {params.id} </h1> */}
        <div className="title-container">
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="img" />

          <div className="title-description">
            <h1>{restaurant?.name}</h1>
            <div className="cuisines">
              <p>
                {restaurant?.cuisines[0]} {restaurant?.cuisines[1]}
              </p>
            </div>
            <div className="area">
              <p>
                {restaurant?.area}, {restaurant?.city}
              </p>
            </div>
            <div className="extra-details">
              <div className="restaurant-rating">
                <StarRateIcon style={{ color: "white" }} fontSize = "small" />
                <h4 style={{margin: "0"}}>{restaurant?.avgRating}</h4>
              </div>
              <div className="left-border"></div>
              <h4>{restaurant?.sla?.slaString}</h4>
              <div className="left-border"></div>
              <h4>{restaurant?.costForTwoMsg}</h4>
            </div>
          </div>
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
      </div>
    </>
  );
}
