import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-16 border-b-2 shadow flex flex-row-reverse justify-between items-center">
      <ul className="flex flex-row-reverse">
        <li>
          <Link to={"/"}>خانه</Link>
        </li>
        <li>
          <Link to={"/store"}>فروشگاه</Link>
        </li>
      </ul>

      <div>
        <button>سبد خرید</button>
      </div>
    </div>
  );
}

export default Navbar;
