import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { ProductType } from "../../types/serverType";
import { useShopingCartContext } from "../../context/ShopingCartContext";
import { loadConfigFromFile } from "vite";

function ProductPage() {
  const params = useParams<{ id: string }>();

  const [product, setProducts] = useState<ProductType>();

  useEffect(() => {
    getProduct(params.id as string).then((res) => {
      setProducts(res);
    });
  }, []);

  const {
    handleIncreaseProductQuty,
    cartContent,
    handleDecreaseProductQuty,
    getProductQuty,
  } = useShopingCartContext();

  return (
    <div>
      <Container>
        <div className=" shadow-lg grid grid-cols-12 mt-4 ">
          <div className="col-span-10 p-4 text-right pb-2">
            <h1 className=" my-8 text-3xl font-bold"> {product?.name} </h1>
            <div className="flex justify-end gap-4">
              <span>تومان</span>
              <span>{product?.price}</span>
            </div>
            <p>{product?.description}</p>
          </div>
          <div className="col-span-2 bg-sky-200 p-2">
            <img className="" src={`../../${product?.srcImg}`} alt="" />

            <div>
              {getProductQuty(Number(params.id)) === 0 ? (
                <Button
                  className="mt-2 w-full"
                  variant="primary"
                  onClick={() => {
                    handleIncreaseProductQuty(Number(params.id));
                  }}
                >
                  Add to cart
                </Button>
              ) : (
                <div className="grid grid-cols-3">
                  <Button
                    className="mt-2 w-full"
                    variant="primary"
                    onClick={() => {
                      handleIncreaseProductQuty(Number(params.id));
                    }}
                  >
                    +
                  </Button>

                  <span className="flex justify-center items-center">
                    {getProductQuty(Number(params.id))}
                  </span>

                  <Button
                    className="mt-2 w-full "
                    variant="primary"
                    onClick={() => {
                      handleDecreaseProductQuty(Number(params.id));
                    }}
                  >
                    -
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
