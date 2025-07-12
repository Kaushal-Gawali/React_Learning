import Restaurant_Card from "./Restaurant_Card";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  // Local state variable - super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);



  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = listOfRestaurants.filter((res)=>{
            // Filter Logic here
           return res.info.avgRating > 4
          });
          setlistOfRestaurants(filteredList);
        }}>
          Top rated Restaurant         
        </button>

      </div>
            <div className="res-container">
        
        {
          listOfRestaurants.map((restaurant) => (
            <Restaurant_Card key={restaurant.info.id} resData={restaurant}/>          // passing props using map() function
          ))
        }

      </div>
    </div>
  );
};

export default Body;
