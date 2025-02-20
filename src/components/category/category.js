import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category1 from "./category1";
import CategoryText from "./categorytxt";
import { products } from "../../utils/axios";

function Category() {
  const { categoryId } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(categoryId, "data");
    const fetchProduct = async () => {
      try {
        const response = await products.get(`/category/${categoryId}`);
        setCategoryProducts(response.data);
      } catch (err) {
        console.error("Failed to load product details:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [categoryId]);
  return (
    <div>
      <Category1 categoryProduct={categoryProducts} />
      <CategoryText categoryTxt={categoryId} />
    </div>
  );
}

export default Category;
