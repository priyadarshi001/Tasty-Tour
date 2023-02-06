// ! Custom Hooks
// fetch the restaurant and returns data

import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";


const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // fetch data
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data);
    console.log(json.data);
  }

  // * return data
  return restaurant;
};

export default useRestaurant;
