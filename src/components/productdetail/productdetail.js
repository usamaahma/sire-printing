import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail1 from "./productdetail1";
import ProductDetailSpec from "./productdetailspec";
import ProductDetailStock from "./productdetailstock";
import ProductDetailFinishing1 from "./productdetailfinishing1";
import ProductDetailRelatedProduct from "./productdetailrelatedproducts";
import ProductDetailTxt from "./productdetailtxt";
import { products } from "../../utils/axios";

function ProductDetail() {
  const { id } = useParams(); // URL se product ka naam aur ID le raha hai
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await products.get(`${id}`);
        setProductData(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ProductDetail1 product={productData} />
      <ProductDetailSpec product={productData} />
      <ProductDetailStock product={productData} />
      <ProductDetailFinishing1 product={productData} />
      <ProductDetailRelatedProduct product={productData} />
      <ProductDetailTxt product={productData} />
    </div>
  );
}

export default ProductDetail;
