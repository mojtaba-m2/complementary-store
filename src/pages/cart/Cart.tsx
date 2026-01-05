import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShopingCartContext } from "../../context/ShopingCartContext";

function Cart() {
  const { cartContent } = useShopingCartContext();

  return (
    <>
      <Container>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="text-right bg-gray-200 rounded mt-6 p-6">
          <p>قیمت کل : 1000</p>
          <p>تخفیف شما : 200</p>
          <p>قیمت نهایی : 800</p>

          <Button className="mt-2" variant="success">
            ثبت سفارش
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Cart;
