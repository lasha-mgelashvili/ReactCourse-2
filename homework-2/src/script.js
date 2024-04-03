const root = document.querySelector("#root");

const products = [
  { title: "Lorem, ipsum dolor", alt: "Image-1" },
  { title: "Lorem, ipsum dolor", alt: "Image-1" },
  { title: "Lorem, ipsum dolor", alt: "Image-1" },
  { title: "Lorem, ipsum dolor", alt: "Image-1" },
  { title: "Lorem, ipsum dolor", alt: "Image-1" },
  { title: "Lorem, ipsum dolor", alt: "Image-1" },
];

function Card(props) {
  return (
    <div className="shopping-item">
      <h3>{props.title}</h3>
      <img src="https://source.unsplash.com/random/200x300" alt={props.alt} />
      <div className="description">
        <span>In Stock</span>
        <span>Points 1.5/5</span>
      </div>
      <div className="badges">
        <span className="badge-1">sport</span>
        <span className="badge-2">lifestyle</span>
      </div>
      <button>Add To Cart</button>
    </div>
  );
}

function App() {
  return (
    <main classNAme="container">
      {products.map((product) => (
        <Card props={product} />
      ))}
    </main>
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));

function Card(section) {
  return (
    <section className="container">
      <div className="block-listing">
        <span className="badge-1">Random 1</span>
        <span className="badge-2">Random 2</span>
        <span className="badge-3">Random 3</span>
        <span className="badge-4">Random 4</span>
      </div>
      <div className="banner"></div>
    </section>
  );
}

