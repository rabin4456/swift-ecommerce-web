import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import Button from "../button";

const products = [
  {
    id: 1,
    name: "Artwork Tee",
    href: "#",
    price: "$32.00",
    color: "Mint",
    size: "Medium",
    inStock: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg",
    imageAlt: "Front of mint cotton t-shirt with wavey lines pattern.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Charcoal",
    inStock: false,
    leadTime: "7-8 years",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
    imageAlt: "Front of charcoal cotton t-shirt.",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Front of sienna cotton t-shirt.",
  },
];

const Cart = () => {
  return (
    <div className='cartContainer'>
      <div className='cartSubContainer'>
        <form style={{ marginTop: 15 }}>
          <section aria-labelledby='cart-heading'>
            <ul role='list' className='cartlistContainer'>
              {products.map((product) => (
                <li key={product.id} className='cartProduct'>
                  <div className='cartImageContainer'>
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className='cartImage'
                    />
                  </div>

                  <div className='cartItemContainer'>
                    <div>
                      <div className='justifyBetween'>
                        <h4 className='cartItemName'>{product.name}</h4>
                        <p className='cartProductPrice'>{product.price}</p>
                      </div>
                      <p className='cartProductText'>{product.color}</p>
                      <p className='cartProductText'>{product.size}</p>
                    </div>

                    <div className='cartFooterContainer'>
                      <p className='cartProductStatus'>
                        {product.inStock ? (
                          <CheckIcon
                            className='cartCheckIcon'
                            aria-hidden='true'
                          />
                        ) : (
                          <ClockIcon
                            className='cartClockIcon'
                            aria-hidden='true'
                          />
                        )}

                        <span>
                          {product.inStock
                            ? "In stock"
                            : `Will ship in ${product.leadTime}`}
                        </span>
                      </p>
                      <div>
                        <button type='button' className='cartButton'>
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby='summary-heading' style={{ marginTop: 20 }}>
            <div>
              <dl style={{ marginTop: 5, marginBottom: 5 }}>
                <div className='cartSubTotalContainer'>
                  <dt className='cartTotalText'>Subtotal</dt>
                  <dd className='cartTotalText' style={{ marginLeft: 16 }}>
                    $96.00
                  </dd>
                </div>
              </dl>
              <p className='cartInfotext'>
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>
            <div style={{ marginTop: 15 }}>
              <Button label='Checkout' buttonType='secondary' />
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Cart;
