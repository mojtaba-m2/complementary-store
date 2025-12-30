import { Link, useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { ProductsType } from "../../types/serverType";

function Store() {
  const [products, setProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-right mt-6 text-base font-medium md:text-2xl ">
          محصولات پر فروش
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
