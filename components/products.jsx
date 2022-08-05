import React, {useState} from "react";
import {data} from "../pages/data.js";
import Product from "./product.jsx";
import Pagination from "./pagination.jsx";


function Products() {
    const [posts, setPosts] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const previousPage = () => setCurrentPage(currentPage - 1);
    
    const pageNumbers = [];

    for(let i = 1; i <=Math.ceil(posts.length / postsPerPage); i++){
        pageNumbers.push(i);
    }

    
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
            {currentPosts.map((data) => (
              <Product
                key={data.id}
                img={data.img}
                name={data.name}
                description={data.description}
                price={data.price}
              />
            ))}
          </dl>
          {/* Pagination */}

          <nav>
              <ul className="pagination justify-content-center">
                  <li className="page-item">
                      <a onClick={previousPage} className={`page-link ${currentPage === 1 ? "disabled" : ""}`} aria-label="Previous">
                          <span aria-hidden="true">❮</span>
                      </a>
                  </li>
                      {pageNumbers.map(number => (
                          <li key={number} class="page-item">
                              <a onClick={() => paginate(number)} className={`page-link ${currentPage === number ? "active" : ""}`} id={number}>
                                  {number}
                            
                              </a>
                          </li>
                      ))}
                  <li className="page-item">
                      <a onClick={nextPage} className={`page-link ${currentPage === pageNumbers.length ? "disabled" : ""}`} aria-label="Next">
                          <span aria-hidden="true">❯</span>
                      </a>
                  </li>
              </ul>
          </nav>
    
          {/* <Pagination
            postsPerPage = {postsPerPage} totalPosts={posts.length} paginate={paginate} 
          /> */}

        </div>
      </sektion>
      </>
    );
  }

export default Products;