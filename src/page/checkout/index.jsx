import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import widthPriceFormat from 'hoc/widthPriceFormat'
import useFormValiDate from '../../core/useFormValiDate'
import { CartItem} from '../../components/modal/compoments/ShopCart'
import {shipingChange} from '../../redux/reducers/cartReducer'
export default function Checkout() {
    const cart = useSelector(state => state.cart)
    let total=new Intl.NumberFormat('vn').format(cart.shiping_price + cart.amount)
    let amout=new Intl.NumberFormat('vn').format(cart.amount)

    let { form, error, inputChang, check } = useFormValiDate({
        firtName: '',
        lastName: '',
        email:'',
        phone:'',
        Companyname:'',
        Country:'',
        ship_country:'',
        ship_Address1:'',
        ship_Address2:'',
        ship_City:'',
        ship_Postcode:'',
        ship_diffrent_address:false,
        shiping:cart.shiping_opiton,
        
        note:''



    
      }, {
        rule: {
            firtName: {
            required: true,
           
    
          },
          lastName: {
            required: true,
           
    
          },
          email:{
            required: true,
            pattern: 'email'
          },
          
          phone:{
            required: true,
            pattern:'phone'
           
          },
          
          Country:{
            required: true,
           
          },
          ship_country:{
            required: true,
           
          },
          ship_City:{
            required: true,
           
          }
          ,
          ship_Postcode:{
            required: true,
           
          }
          
        
        },
        messager: {
            firtName: {
            required: " Firt Name không được để trống"
          },
          lastName: {
            required: " Last Name không được để trống"
          },
          email: {
            required: " Email không được để trống"
          },
          phone: {
            required: "Số điện thoại không được để trống"
          } ,
          
          Country: {
            required: "Country  không được để trống"
          },
          ship_country: {
            required: "Country  không được để trống"
          },
          ship_City: {
            required: "City không được để trống"
          },
          ship_Postcode: {
            required: "Trường này không được để trống"
          },
         
         


        }
      })
    
    
  
      function btn_CheckOut() {
      let  error 
        if(form.ship_diffrent_address){
            error = check();
        }
        else{

        }
        if (Object.keys(error).length === 0) {
            alert('Thành Công')
    
        }
      }
      let dispatch=useDispatch()
      function _shipingChange(e){
         
        let {value}=e.target,
           price=parseInt(e.target.dataset.price);
        dispatch(shipingChange({
            shiping_opiton:value,
            shiping_price:price
        }))

      }
 
  
      function InputGroup({  name, title, placeholder }){

        let ramdomID = "id-" + (Math.round(Math.random() * 100000))
        return(
            <div className="form-group">
            <label htmlFor="checkoutBillingLastName">{title} </label>
            <input className="form-control form-control-sm" id={ramdomID} type="text" placeholder={placeholder} name={name} onChange={inputChang} value={form[name]} />
            { error[name] ? <p className="error_form">   {error[name]} </p> : null}
                </div>
        )
    }
  
    return (
        <div>
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-4">Checkout</h3>
                            {/* Subheading */}
                         
                            <p className="mb-10">
                                Already have an account? <a className="font-weight-bold text-reset" href="#!">Click here to login</a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7">
                            {/* Form */}
                            <form>
                                {/* Heading */}
                                <h6 className="mb-7">Billing Details</h6>
                                {/* Billing details */}
                                <div className="row mb-9">
                                    <div className="col-12 col-md-6">
                               
                                    <InputGroup name="firtName" title="Firt Name*" placeholder="Firt Name " />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Last Name */}
                                        <InputGroup name="lastName" title="Last Name  *" placeholder="Last Name" />
                                  
                                    </div>
                                    <div className="col-12">
                                        {/* Email */}
                                        <InputGroup name="email" title="Email*" placeholder="Nhập Email" />
                                    </div>
                                    <div className="col-12">
                                        {/* Company Name */}
                                        <InputGroup name="Companyname" title="Company name " placeholder="Company name" />
                                      
                                    </div>
                                    <div className="col-12">
                                        {/* Country */}
                                        {/* <div className="form-group">
                                            <label htmlFor="checkoutBillingCountry">Country *</label>
                                            <input className="form-control form-control-sm" id="checkoutBillingCountry" type="text" placeholder="Country" required />
                                        </div> */}
                                        <InputGroup name="Country" title="Country " placeholder="Nhập Country " />
                                    </div>
                                    <div className="col-12">
                                        {/* Address Line 1 */}
                                        <InputGroup name="ship_Address1" title="Address Line 1 " placeholder="Nhập Address Line 1 " />
                                    </div>
                                    <div className="col-12">
                                        {/* Address Line 2 */}
                                        <InputGroup name="ship_Address2" title="Address Line 2 " placeholder="Nhập Address Line 2 " />
                                     
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Town / City */}
                                        <InputGroup name="ship_City" title=" Town /City  *" placeholder=" Nhập Town /City" />
                                        
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* ZIP / Postcode */}
                                        <InputGroup name="ship_Postcode" title="ZIP / Postcode *" placeholder=" Nhập ZIP / Postcode " />
                                     
                                    </div>
                                    <div className="col-12">
                                        {/* Mobile Phone */}
                                        <InputGroup name="phone" title=" Mobile Phone*" placeholder=" Nhập Mobile Phone" />
                                      
                                    </div>
                              
                                </div>
                                {/* Heading */}
                                <h6 className="mb-7">Shipping Details</h6>
                                {/* Shipping details */}
                                <div className="table-responsive mb-6">
                                    <table className="table table-bordered table-sm table-hover mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingStandard" name="shipping" type="radio" data-price={30000} checked={form.shiping === "standard" }  value="standard"  onChange={inputChang} onClick={_shipingChange} />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingStandard">
                                                            Standard Shipping
                              </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 5 - 7 working days</td>
                                                <td>30,000 vnd</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingExpress" name="shipping" type="radio" data-price={40000} checked={form.shiping === "express" }  value="express"  onChange={inputChang} onClick={_shipingChange} />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingExpress">
                                                            Express Shipping
                              </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 3 - 5 working days</td>
                                                <td>40,000 vnd</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingShort" name="shipping" type="radio" data-price={50000} checked={form.shiping === "shipping" }  value="shipping"  onChange={inputChang} onClick={_shipingChange} />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingShort">
                                                            1 - 2 Shipping
                              </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 1 - 2 working days</td>
                                                <td>50,000 vnđ</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingFree" name="shipping" type="radio" data-price={0}  checked={form.shiping === "free" }  onChange={inputChang} onClick={_shipingChange}  value="free"  />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingFree">
                                                            Free Shipping
                              </label>
                                                    </div>
                                                </td>
                                                <td>Living won't the He one every subdue
                                                meat replenish face was you morning
                            firmament darkness.</td>
                                                <td>$0.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Address */}
                                <div className="mb-9">
                                    {/* Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="checkoutShippingAddress" type="checkbox" onChange={inputChang} name="ship_diffrent_address" checked={form.ship_diffrent_address} />
                                        <label className="custom-control-label font-size-sm" data-toggle="collapse" data-target="#checkoutShippingAddressCollapse" htmlFor="checkoutShippingAddress">
                                            Ship to a different address?
                      </label>
                                    </div>
                                    {/* Collapse */}
                                    <div className="collapse" id="checkoutShippingAddressCollapse">
                                        <div className="row mt-6">
                                            <div className="col-12">
                                                {/* Country */}
                                                <InputGroup name="ship_country" title="Country " placeholder="Nhập Country " />
                                               
                                            </div>
                                            <div className="col-12">
                                                {/* Address Line 1 */}
                                                <InputGroup name="ship_Address1" title="Address Line 1 " placeholder="Nhập Address Line 1 " />
                                               
                                            </div>
                                            <div className="col-12">
                                                {/* Address Line 2 */}
                                                <InputGroup name="ship_Address2" title="Address Line 2 " placeholder="Nhập Address Line 2 " />
                                               
                                            </div>
                                            <div className="col-6">
                                                {/* Town / City */}
                                                <InputGroup name="ship_City" title=" Town /City  *" placeholder=" Nhập Town /City" />
                                                
                                            </div>
                                            <div className="col-6">
                                                {/* Town / City */}
                                                <InputGroup name="ship_Postcode" title="ZIP / Postcode *" placeholder=" Nhập ZIP / Postcode " />
                                              
                                            </div>
                                            <div className="col-12">
                                                {/* Button */}
                                                <button className="btn btn-sm btn-outline-dark" type="submit">
                                                    Save Address
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Heading */}
                                <h6 className="mb-7">Payment</h6>
                                {/* List group */}
                                <div className="list-group list-group-sm mb-7">
                                    <div className="list-group-item">
                                        {/* Radio */}
                                        <div className="custom-control custom-radio">
                                            {/* Input */}
                                            <input className="custom-control-input" id="checkoutPaymentCard" name="payment" type="radio" data-toggle="collapse" data-action="show" data-target="#checkoutPaymentCardCollapse" />
                                            {/* Label */}
                                            <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                                                Credit Card <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="list-group-item collapse py-0" id="checkoutPaymentCardCollapse">
                                        {/* Form */}
                                        <div className="form-row py-5">
                                            <div className="col-12">
                                                <div className="form-group mb-4">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardNumber">Card Number</label>
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardNumber" type="text" placeholder="Card Number *" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-4">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardName">Name on Card</label>
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardName" type="text" placeholder="Name on Card *" required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" htmlFor="checkoutPaymentMonth">Month</label>
                                                    <select className="custom-select custom-select-sm" id="checkoutPaymentMonth">
                                                        <option>January</option>
                                                        <option>February</option>
                                                        <option>March</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardYear">Year</label>
                                                    <select className="custom-select custom-select-sm" id="checkoutPaymentCardYear">
                                                        <option>2017</option>
                                                        <option>2018</option>
                                                        <option>2019</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group input-group-merge">
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardCVV" type="text" placeholder="CVV *" required />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards.">
                                                            <i className="fe fe-help-circle" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        {/* Radio */}
                                        <div className="custom-control custom-radio">
                                            {/* Input */}
                                            <input className="custom-control-input" id="checkoutPaymentPaypal" name="payment" type="radio" data-toggle="collapse" data-action="hide" data-target="#checkoutPaymentCardCollapse" />
                                            {/* Label */}
                                            <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                                                <img src="/img/brands/color/paypal.svg" alt="..." />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* Notes */}
                                <textarea className="form-control form-control-sm mb-9 mb-md-0 font-size-xs" rows={5} placeholder="Order Notes (optional)" defaultValue={""} />
                            </form>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                            {/* Heading */}
                            <h6 className="mb-7">Order Items ({cart.num})</h6>
                            {/* Divider */}
                            <hr className="my-7" />
                            {/* List group */}
                            <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
                                {
                                    cart.list.map(e => <React.Fragment key={e._id}> {widthPriceFormat(CartItem, e)} </React.Fragment>)
                                }
                            </ul>
                            {/* Card */}
                            <div className="card mb-9 bg-light">
                                <div className="card-body">
                                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                        <li className="list-group-item d-flex">
                                            <span>Subtotal</span> <span className="ml-auto font-size-sm">{amout} VND</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Tax</span> <span className="ml-auto font-size-sm">$00.00</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Shipping</span> <span className="ml-auto font-size-sm">{cart.shiping_price}</span>
                                        </li>
                                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                                            <span>Total</span> <span className="ml-auto">{total} VND</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Disclaimer */}
                            <p className="mb-7 font-size-xs text-gray-500">
                                Your personal data will be used to process your order, support
                                your experience throughout this website, and for other purposes
                                described in our privacy policy.
                </p>
                            {/* Button */}
                            <button className="btn btn-block btn-dark" onClick={btn_CheckOut}>
                                Place Order
                </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* FEATURES */}
            <section className="bg-light py-9">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex mb-6 mb-lg-0">
                                {/* Icon */}
                                <i className="fe fe-truck font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="heading-xxs mb-1">
                                        Free shipping
                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        From all orders over $100
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex mb-6 mb-lg-0">
                                {/* Icon */}
                                <i className="fe fe-repeat font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="mb-1 heading-xxs">
                                        Free returns
                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        Return money within 30 days
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex mb-6 mb-md-0">
                                {/* Icon */}
                                <i className="fe fe-lock font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="mb-1 heading-xxs">
                                        Secure shopping
                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        You're in safe hands
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex">
                                {/* Icon */}
                                <i className="fe fe-tag font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="mb-1 heading-xxs">
                                        Over 10,000 Styles
                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        We have everything you need
                          
                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



