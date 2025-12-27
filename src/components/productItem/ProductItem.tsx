function ProductItem() {
  return (
    <div className="border shadow-md rounded">
      <img
        className="rounded"
        src="https://www.earth.com/assets/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2021%2F09%2F03053849%2FIndian-wolf-1400x850.jpg&w=1080&q=75"
        alt=""
      />
      <div className="p-3">
        <h2 className="text-center">product</h2>
        <div className="flex justify-between items-center">
          <span>تومان</span>
          <span>500</span>
        </div>
        <div className="mt-3">
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio,
            ipsam quia quaerat sint exercitationem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
