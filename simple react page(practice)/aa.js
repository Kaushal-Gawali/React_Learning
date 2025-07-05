const h1 = React.createElement("h1",  {className:"header1"}, "Hello everyone")   // react cha element "object" asto
const p1 = React.createElement("p", {className:"paragrapg1"}, "My name is kaushal")
const p2 = React.createElement("p", {className:"paragrapg2"}, "I am from yeola")
const para = React.createElement("p", {style: {color:"red"}, className:"footer_para"}, "@this is my paragraph inside footer")
const footer = React.createElement("footer", {className:"footer"}, [para])    // creating paragraph inside footer
const div = React.createElement("div", {}, [h1,p1,p2,footer])


const root = ReactDOM.createRoot(document.getElementById("root")) // reactDOM used for dom manipulation

root.render(div)

console.log(div)


