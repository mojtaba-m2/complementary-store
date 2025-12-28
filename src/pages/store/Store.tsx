import { Link, useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";

function Store() {
  return (
    <div>
      <Container>
        <h1 className="text-right mt-6 text-base font-medium md:text-2xl ">
          محصولات پر فروش
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div>
            <Link to={`/product/${1}`}>
              <ProductItem />
            </Link>
          </div>
          <div>
            <Link to={`/product/${1}`}>
              <ProductItem />
            </Link>
          </div>
          <div>
            <Link to={`/product/${1}`}>
              <ProductItem />
            </Link>
          </div>
          <div>
            <Link to={`/product/${1}`}>
              <ProductItem />
            </Link>
          </div>
          <div>
            <Link to={`/product/${1}`}>
              <ProductItem />
            </Link>
          </div>
          <div>
            <Link to={`/product/${1}`}>
              <ProductItem />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Store;
