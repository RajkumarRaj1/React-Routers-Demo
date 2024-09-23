import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const getProductDetail = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    getProductDetail();
  }, []);
  return (
    <div className="h-fit container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-50 h-50" />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-700">{product.price}</p>
          <p className="text-gray-700">
            Rating:{product.rating?.rate}({product.rating?.count}reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
