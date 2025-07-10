import React from "react";
import ReactDOM from "react-dom/client";

/*
// 1)  React Element => Object
// const heading = React.createElement("h1", {id: "heading"}, "namaste react");

// console.log(heading)

//JSX - It is HTML-like or XML-like Syntax
// creating HTML tag inside jsx
const jsxHeading = <div>             
    <h1 className="head">Hello Namaste React</h1> 
    <h2 className="name">kaushal gawali</h2>
    </div>
            
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)
// root.render(heading)

*/

// 2)  React Component

// const HeadingComponet = () => {
//     return <h1 className="heading">This React Functional component</h1>
// }

//OR we can declare like this
// const HeadingComponet2 = () => <h1 className="heading">This React Functional component</h1>

// OR
/*
const Title = () => {
    return <h1 className="title">Namaste React using JSX!!</h1>
}

const elem = (
    <h1>React Components</h1>
)

const salary = 10000;
// Component composition
const HeadingComponet3 = () => (
    <div id="container">
        {salary}
        {elem}
        {Title()}
        <Title />   
        <Title></Title>
        <h1 className="heading">This React Functional component</h1>
    </div>
);
    
// we render component like this
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet3/ >);

*/

// Building food delivery App project
/* 
* Header
*  - Logo
*  - Nav Items
* Body
*  - Search
*  - RestaurantContainer
*    - RestaurantCard
*      - img
*      - Name, star rating, cuisine, delevery time
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact


*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://dynamic.brandcrowd.com/asset/logo/e94a6dd4-56ea-4145-a63c-19d59312e922/logo-search-grid-2x?logoTemplateVersion=1&v=637829909691300000"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const info = {
  id: "395927",
  name: "NIC Ice Creams",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/75ae6455-c34d-40c7-83fe-b7ca02cedd9f_395927.JPG",
  locality: "ARABINDA SARANI",
  areaName: "Hatibagan",
  costForTwo: "₹120 for two",
  cuisines: ["Ice Cream", "Desserts"],
  avgRating: 4.8,
  veg: true,
  parentId: "6249",
  avgRatingString: "4.8",
  totalRatingsString: "6.3K+",
  sla: {
    deliveryTime: 31,
    lastMileTravel: 3,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "3.0 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2025-07-10 23:00:00",
    opened: true,
  },
  badges: {
    textExtendedBadges: [
      {
        iconId: "guiltfree/GF_Logo_android_3x",
        shortDescription: "brand",
        fontColor: "#7E808C",
      },
    ],
  },
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {
        badgeObject: [
          {
            attributes: {
              description: "",
              fontColor: "#7E808C",
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
            },
          },
        ],
      },
    },
  },
  aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹148",
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "--",
    },
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <Restaurant_Card
          resName="Meghana Foods"
          cuisine="Birynai, North Indian, Asian" // These are props
        />

        <Restaurant_Card resName="KFC" cuisine="Burger, Fast foods" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

/*
// This is very complicated so to avoid this we use JSX

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Namaste React bhaii"),
        React.createElement("h2", {}, "I am in h2")]    // creating aray of chindren
    )
);



// JSX -> Javascript XML

// const heading = React.createElement("h1", {id: "heading"}, "Hello Kaushal")
console.log(parent)  // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


*/
