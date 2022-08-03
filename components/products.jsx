// import React, {useState, useEffect} from "react";
import {data} from "../pages/data.js";
import Product from "./product.jsx";
import { useEffect, useState } from "react";



function Products() {
    const [posts, setPosts] = useState(data);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    console.log(posts);
    
    return (
      <>
      {/* Produkter */}
      <sektion id="products-section">
        <div className={"products-bg"}>
          <h1>View products</h1>
          <div >
            <form action="">
              <button type="submit" className={"products-buttons"}>Price</button>
              <button type="submit" className={"products-buttons"}>New</button>
            </form>
          </div>

          {/* Lista-produkter */}
          <dl className={"products-data"}>
            {data.map((data) => (
              <Product
                key={data.id}
                img={data.img}
                name={data.name}
                description={data.description}
                price={data.price}
              />
            )).slice(0, 4)}
          </dl>
          
          {/* Pagination */}
          <div className={"pagination"} id="list">
            <div className={"products-section"} id="pagination">
                <a href="#" id="btn_prev">❮</a>
                <a href="#" className={"active"}>1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#products-section" id="btn_next">❯</a>
            </div>
          </div>
        </div>
      </sektion>
      </>
    );
  }

export default Products;