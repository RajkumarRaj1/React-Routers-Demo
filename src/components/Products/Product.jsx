import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  useEffect 
    (() => {
      const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      };
      getProducts();
    },
    []);
  return (
    <div className="h-fit container mx-auto overflow-auto">
      <div className="flex flex-col justify-center items-center h-fit">
        <h1 className="text-3xl font-bold">welcome to page products</h1>
        <div className="flex gap-8 flex-wrap justify-center">
          {products.map((product) => (
            <div key={product.id} className="card w-32 bg-base-100 shadow-xl">
              <figure>
                <img src={product.image} alt="Shoes" className="w-32 h-24" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <button className="border-2 cursor-pointer p-8 rounded">
                  Buy Now
                </button>
                      <button className="border-2 cursor-pointer p-8 rounded"
                          onClick={() => {
                              navigate(`/products/${product.id}`);
                           }}>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
