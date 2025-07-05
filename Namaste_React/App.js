
// This is very complicated so to avoid this we use JSX

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am in h1"),
        React.createElement("h2", {}, "I am in h2")]    // creating aray of chindren
    )
);



// JSX -> Javascript XML

// const heading = React.createElement("h1", {id: "heading"}, "Hello Kaushal")
console.log(parent)  // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);