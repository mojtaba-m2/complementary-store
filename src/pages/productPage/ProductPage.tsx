import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function ProductPage() {
  const params = useParams();

  return (
    <div>
      <Container>
        <div className=" shadow-lg grid grid-cols-12 mt-4 ">
          <div className="col-span-10 p-4 text-right pb-2">
            <h1 className=" my-8 text-3xl font-bold">عنوان محصول </h1>
            <div className="">
              <span>تومان</span>
              <span>500</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              eum ab voluptatem? Adipisci nihil corrupti consequuntur ipsum
              animi voluptatibus dolorem in quibusdam, rerum deleniti dolor
              labore consequatur laborum qui eligendi laboriosam non. Rerum
              animi voluptas asperiores harum aperiam nihil debitis explicabo
            </p>
          </div>
          <div className="col-span-2 bg-sky-200 p-2">
            <img
              className=""
              src="https://www.earth.com/assets/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2021%2F09%2F03053849%2FIndian-wolf-1400x850.jpg&w=1080&q=75"
              alt=""
            />

            <div>
              <Button style={{ padding: "6px 12px" }} variant="primary">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
