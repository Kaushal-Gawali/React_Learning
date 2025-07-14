import Restaurant_Card from "./Restaurant_Card";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

  // Local state variable - super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterdRestaurant, setfilterdRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body rndered");

  useEffect(() => {
    fetchData();           // inside usEffect we called callback() function
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    // optional chaining
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterdRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // conditional rendering
  if(listOfRestaurants.length === 0) {
    return <Shimmer />;
  }


  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" 
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />

          <button 
          onClick={()=>{
            // filter the restaurant cards and update the UI
            // searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setfilterdRestaurant(filteredRestaurant);
          }}>
            
          search</button>
        </div>

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
          filterdRestaurant.map((restaurant) => (
            <Restaurant_Card key={restaurant.info.id} resData={restaurant}/>          // passing props using map() function
          ))
        }

      </div>
    </div>
  );
};

export default Body;
