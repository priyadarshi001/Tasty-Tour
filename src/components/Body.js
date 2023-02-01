import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
}

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

  // if(filteredRestaurants?.length === 0) return <h2> No Restaurant matched!! </h2>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search-food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/** not using --> restaurantList.map()=>  --> as implementing search */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
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
