"use strict";

var root = document.querySelector("#root");
var products = [{
  title: "Lorem, ipsum dolor",
  alt: "Image-1"
}, {
  title: "Lorem, ipsum dolor",
  alt: "Image-1"
}, {
  title: "Lorem, ipsum dolor",
  alt: "Image-1"
}, {
  title: "Lorem, ipsum dolor",
  alt: "Image-1"
}, {
  title: "Lorem, ipsum dolor",
  alt: "Image-1"
}, {
  title: "Lorem, ipsum dolor",
  alt: "Image-1"
}];
function Card(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "shopping-item"
  }, /*#__PURE__*/React.createElement("h3", null, props.title), /*#__PURE__*/React.createElement("img", {
    src: "https://source.unsplash.com/random/200x300",
    alt: props.alt
  }), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, /*#__PURE__*/React.createElement("span", null, "In Stock"), /*#__PURE__*/React.createElement("span", null, "Points 1.5/5")), /*#__PURE__*/React.createElement("div", {
    className: "badges"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge-1"
  }, "sport"), /*#__PURE__*/React.createElement("span", {
    className: "badge-2"
  }, "lifestyle")), /*#__PURE__*/React.createElement("button", null, "Add To Cart"));
}
function App() {
  return /*#__PURE__*/React.createElement("main", {
    classNAme: "container"
  }, products.map(function (product) {
    return /*#__PURE__*/React.createElement(Card, {
      props: product
    });
  }));
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
function Info() {
  return /*#__PURE__*/React.createElement("section", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "block-listing"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge-1"
  }, "Random 1"), /*#__PURE__*/React.createElement("span", {
    className: "badge-2"
  }, "Random 2"), /*#__PURE__*/React.createElement("span", {
    className: "badge-3"
  }, "Random 3"), /*#__PURE__*/React.createElement("span", {
    className: "badge-4"
  }, "Random 4")), /*#__PURE__*/React.createElement("div", {
    className: "banner"
  }));
}
Info();