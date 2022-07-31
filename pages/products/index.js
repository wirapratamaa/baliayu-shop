import React from "react";
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { product } from "../../data/productsData";

const Products = () => {
  return (
    <Layout title="Products Page">
      <div className="flex flex-wrap flex-1">
        {product.map((item, i) => (
          <div
            key={item.id}
            className="flex justify-center md:w-1/2 lg:w-1/3 w-full md:px-3 px-2"
          >
            <ProductCard id={item.id} p_name={item.p_name} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
