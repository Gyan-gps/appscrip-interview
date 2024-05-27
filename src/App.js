import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS } from "./redux/action";
import { useEffect } from "react";

function App() {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products);
  const getAllProducts = async () => {
    fetch("https://dummyjson.com/products")
      .then((json) => json.json())
      .then((res) => {
        // console.log(res.products);
        dispatch({
          type: GET_PRODUCTS,
          payload: res.products,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="App">
      <div className="cardList">
        {products === null ? (
          <h1>loading...</h1>
        ) : products.length === 0 ? (
          <h1>Empty product List</h1>
        ) : (
          products.map((product) => (
            <div key={product.id} className="card">
              <div className="imgdiv">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                />
                <div className="ratingdiv">
                  <div>{product.rating}</div>
                  <div className="star">&#9733;</div>
                  <div>123</div>
                </div>
              </div>
              <div className="descdiv">
                <div className="title">{product.title}</div>
                <div className="desc">{product.description.slice(0, 30)}</div>
                <div className="pricediv">
                  <div className="price">
                    RS.{" "}
                    {Math.round(
                      product.price * (100 - product.discountPercentage)
                    ) / 100}
                  </div>
                  <del className="pprice">Rs. {product.price}</del>
                  <div className="pdiscount">
                    ({product.discountPercentage} % OFF)
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
