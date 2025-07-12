import Restaurant_Card from "./Restaurant_Card";
import resList from "../utils/mockData";


const Body = () => {

  let listOfRestaurants = [
    {
    info: {
      id: "565580",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d2e6497c-c00e-47ce-8fcb-e0e3617a9d7b_565580.JPG",
      costForTwo: "₹400 for two",
      cuisines: ["Fast Food", "Burgers", "Rolls & Wraps"],
      avgRating: 3.5,
    },
  },
  {
    info: {
      id: "565581",
      name: "Dominos",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d2e6497c-c00e-47ce-8fcb-e0e3617a9d7b_565580.JPG",
      costForTwo: "₹400 for two",
      cuisines: ["Fast Food", "Burgers", "Rolls & Wraps"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "565582",
      name: "Pizzhut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d2e6497c-c00e-47ce-8fcb-e0e3617a9d7b_565580.JPG",
      costForTwo: "₹400 for two",
      cuisines: ["Fast Food", "Burgers", "Rolls & Wraps"],
      avgRating: 4.1,
    },
  },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          listOfRestaurants = listOfRestaurants.filter((res)=>{
            // Filter Logic here
           return res.info.avgRating > 4
          });
          console.log(listOfRestaurants)
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
