
import React from "react";
import ProductList from "./ProductList";

const API_URL = "https://api.jsonbin.io/v3/b/679d36a5acd3cb34a8d62ea0";


async function getProducts() {
  try {
    const res = await fetch(API_URL, { cache: "force-cache" }); // SSG with cache
    const data = await res.json();
    return data.record.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const ProductSection = async () => {
  const productList = await getProducts();

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-4 text-xl">Our Latest Products</h2>
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductSection;
