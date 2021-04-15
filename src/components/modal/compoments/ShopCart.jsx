import widthPriceFormat from 'hoc/widthPriceFormat'
import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCart, incrementCart, decrementCart } from '../../../redux/reducers/cartReducer'
export default function ShopCart() {
  const cart = useSelector(state => state.cart)
  let ammout = new Intl.NumberFormat('vn').format(cart.amount)
  return ReactDOM.createPortal(
    <div className="modal fixed-right fade" id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-vertical" role="document">
        {/* Full cart (add `.d-none` to disable it) */}
        <div className="modal-content">
          {/* Close */}
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart ({cart.num})</strong>
          </div>
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush">
            {
              cart.list.map(e => <React.Fragment key={e._id}> {widthPriceFormat(CartItem, e)} </React.Fragment>)
            }
            {/* <CartItem key={e._id} {...e}/> */}
          </ul>
          {/* Footer */}
          <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
            <strong>Subtotal</strong> <strong className="ml-auto">{ammout} VND</strong>
          </div>
          {/* Buttons */}
          <div className="modal-body">
            <Link className="btn btn-block btn-dark" to="/checkout">Continue to Checkout</Link>
            <a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">View Cart</a>
          </div>
        </div>
        {/* Empty cart (remove `.d-none` to enable it) */}
        <div className="modal-content d-none">
          {/* Close */}
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart (0)</strong>
          </div>
          {/* Body */}
          <div className="modal-body flex-grow-0 my-auto">
            {/* Heading */}
            <h6 className="mb-7 text-center">Your cart is empty 😞</h6>
            {/* Button */}
            <a className="btn btn-block btn-outline-dark" href="#!">
              Continue Shopping
              </a>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal_page')
  )
}
export function CartItem({ name, images, real_price_text, _id, cartNum }) {

  let dispatch = useDispatch()
  function remove(e) {
    e.preventDefault();
    dispatch(removeCart(_id))

  }
  function increment(e) {
    e.preventDefault();
    dispatch(incrementCart(_id))

  }
  function decrement(e) {
    e.preventDefault();
    dispatch(decrementCart(_id))

  }

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          {/* Image */}
          <a href="./product.html">
            <img className="img-fluid" src={images?.[0]?.medium_url} alt="..." />
          </a>
        </div>
        <div className="col-8">
          {/* Title */}
          <p className="font-size-sm font-weight-bold mb-6">
            <a className="text-body" href="./product.html">{name}</a> <br />
            <span className="text-muted">{real_price_text} VND</span>
          </p>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            <button onClick={decrement}> -</button>
            <input className="cartNum" value={cartNum} />

            <button onClick={increment}> +</button>
            {/* Remove */}
            <a className="font-size-xs text-gray-400 ml-auto" href="#!" onClick={remove}>
              <i className="fe fe-x" /> Remove
        </a>
          </div>
        </div>
      </div>
    </li>
  )
}

