import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState(""); // * to create a variable we use state
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING#"
    );
    const jsonData = await data.json();
    // console.log(jsonData); use this to see how json data looks and how to get the data
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards); // optional chaining
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if(!isOnline){
    return <h2>🔴 Offline, please check your internet connection</h2>
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" p-2 bg-gray-100 justify-center">
        <input
          type="text"
          className="h-8 p-4 focus-within:bg-yellow-50"
          placeholder="search-restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="p-2 m-2 bg-yellow-400 hover:bg-yellow-600 text-yellow-50 font-bold rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Order Now
        </button>
      </div>
      <div className="flex flex-wrap items-stretch">
        {/** not using --> restaurantList.map()=>  --> as implementing search */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
              style= {{textDecoration: "none"}}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

// Search functionality:
/**
 * 1. Earlier, only showing restaurantList whatever fetched from API
 * 2. But now want to use search/filter a specific item==> Make the list a state variable and pass the search string to display the list
 * 3. make a function to filter data -> 2 params - searchText & restaurants--> then put the data to setRestaurants
 * 4. But as the state of restaurant is changed (to single file) further search won't work
 *
 *
 */
