import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img alt="cuisine" src={IMG_CDN_URL + cloudinaryImageId} />
      </div>

      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{lastMileTravelString} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
