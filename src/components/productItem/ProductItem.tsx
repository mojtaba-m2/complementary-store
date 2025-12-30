import { ProductsType } from "../../types/serverType";

type TProductItem = ProductsType;

function ProductItem({ name, srcImg, description, price }: TProductItem) {
  return (
    <div className="border shadow-md rounded">
      <img className="rounded" src={srcImg} alt="" />
      <div className="p-3 text-lg md:text-base">
        <h2 className="text-center font-bold md:font-semibold">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-slate-600 font-bold md:font-semibold">
            تومان
          </span>
          <span className="font-bold md:font-semibold">{price}</span>
        </div>
        <div className="mt-3">
          <p className="line-clamp-2 md:line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
