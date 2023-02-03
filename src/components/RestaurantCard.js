import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <>
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 hover:bg-gray-50 rounded-lg">
        <div className="card-image">
          <img alt="cuisine" src={IMG_CDN_URL + cloudinaryImageId} />
        </div>

        <h3 className="font-bold text-xl">{name}</h3>
        <h5 className="font-thin ">{cuisines.join(", ")}</h5>
        <h5>{lastMileTravelString} minutes</h5>
      </div>
    </>
  );
};

export default RestaurantCard;
