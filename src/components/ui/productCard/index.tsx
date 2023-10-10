import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api";
import Button from "../button";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCTS_TO_CART } from "../../../features/products/productsSlice";

const ProductCard = () => {
  const { data } = useQuery(["allProducts"], getProducts);
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data, "===products==");
  console.log(product, "===product==");

  return (
    <div className=''>
      <div className='productCartContainer'>
        <h2 className='sr-only'>Products</h2>

        <div className='productContainer'>
          {data?.products.map((product: any) => (
            <div key={product.id} className='ProductItem'>
              <div className='imgContainer'>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className='image'
                />
              </div>
              <div className='detailContainer'>
                <h3 className='productName'>{product?.title}</h3>
                <p className='productDescription'>{product.brand}</p>

                <p className='productDescription'>{product?.description}</p>
                <div className='flex-container'>
                  <p className='productDescription'>{product?.category}</p>
                  <p className='text'>{product?.stock} pieces</p>

                  <div style={{ width: "100%" }}>
                    <Button
                      label='Add to cart'
                      onClick={() =>
                        dispatch(ADD_PRODUCTS_TO_CART(product))
                      }
                    />
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        columnGap: 12,
                        alignItems: "center",
                      }}
                    >
                      <p className='textBold'>${product?.price}</p>
                      <p className='productDiscountDescription'>
                        ({product?.discountPercentage}% off)
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        columnGap: 5,
                        alignItems: "center",
                      }}
                    >
                      <span
                        className='fa fa-star'
                        style={{ color: "orange" }}
                      />
                      <p className='productRating'>{product?.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
