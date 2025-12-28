import Button from "../button/Button";

function CartItem() {
  return (
    <div className="flex flex-row-reverse mt-4">
      <img
        className="rounded w-32 object-cover"
        src="https://www.earth.com/assets/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2021%2F09%2F03053849%2FIndian-wolf-1400x850.jpg&w=1080&q=75"
        alt=""
      />

      <div className="mr-4">
        <h3 className="text-right">عنوان محصول</h3>

        <div className="mt-2">
          <Button className="mr-2" variant="danger">
            Remove
          </Button>

          <Button variant="primary">+</Button>
          <span className="mx-2">{2}</span>
          <Button variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
