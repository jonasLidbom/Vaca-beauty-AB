import {data} from "../pages/data.js";
import Product from "./product.jsx";
import Pagination from "./pagination.jsx";

export default function Products() {
    return (
      <>
      {/* Produkter */}
      <sektion id="products-section">
        <div class="products-bg">
          <h1>View products</h1>
          <div >
            <form action="">
              <button type="submit" class="products-buttons">Price</button>
              <button type="submit" class="products-buttons">New</button>
            </form>
          </div>

          {/* Lista-produkter */}
          <dl class="products-data">
            {data.map((data) => (
              <Product
                key={data.id}
                img={data.img}
                name={data.name}
                description={data.description}
                price={data.price}
              />
            ))}
          </dl>
          <Pagination
            pages={5}
          />
        </div>
      </sektion>
      </>
    );
  }