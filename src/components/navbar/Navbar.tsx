import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShopingCartContext } from "../../context/ShopingCartContext";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  const { cartQuty } = useShopingCartContext();
  return (
    <div className="h-16 border-b-2 shadow flex items-center">
      <Container>
        <div className="flex flex-row-reverse justify-between items-center">
          <ul className="flex flex-row-reverse">
            <li className="ml-6">
              <Link to={"/"}>خانه</Link>
            </li>
            <li className="ml-6">
              <Link to={"/store"}>فروشگاه</Link>
            </li>
          </ul>

          <div className="relative">
            <Link to={"/cart"}>
              <button>
                <ShoppingCart className="size-7" />
              </button>

              {cartQuty !== 0 ? (
                <span className="absolute bg-lime-700 text-white size-5 rounded-full flex justify-center items-center -top-2 -right-5 text-sm">
                  {cartQuty}
                </span>
              ) : (
                ""
              )}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
