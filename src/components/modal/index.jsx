import ModalPasswordReset from "./compoments/passwordReset";
import ModalProduct from "./compoments/product";
import ModalSearch from "./compoments/search";
import ShopCart from "./compoments/ShopCart";
import SideBar from "./compoments/sidebar";
import SizeChart from "./compoments/sizeChart";
import ModalWaitList from "./compoments/waitList";

export default function Modal(){
    return(
        <div>
        {/* MODALS */}
        {/* Newsletter: Horizontal */}
        <div className="modal fade" id="modalNewsletterHorizontal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              {/* Close */}
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fe fe-x" aria-hidden="true" />
              </button>
              {/* Content */}
              <div className="row no-gutters">
                <div className="col-12 col-lg-5">
                  {/* Image */}
                  <img className="img-fluid" src="/img/covers/cover-25.jpg" alt="..." />
                </div>
                <div className="col-12 col-lg-7 d-flex flex-column px-md-8">
                  {/* Body */}
                  <div className="modal-body my-auto py-10">
                    {/* Heading */}
                    <h4>Subscribe to Newsletter and get 15% Discount</h4>
                    {/* Text */}
                    <p className="mb-7 font-size-lg">
                      On your next purchase
                    </p>
                    {/* Form */}
                    <form>
                      <div className="form-row">
                        <div className="col">
                          {/* Input */}
                          <label className="sr-only" htmlFor="modalNewsletterHorizontalEmail">Enter Email *</label>
                          <input className="form-control form-control-sm" id="modalNewsletterHorizontalEmail" type="email" placeholder="Enter Email *" />
                        </div>
                        <div className="col-auto">
                          {/* Button */}
                          <button className="btn btn-sm btn-dark" type="submit">
                            <i className="fe fe-send" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Footer */}
                  <div className="modal-footer pt-0">
                    {/* Checkbox */}
                    <div className="custom-control custom-checkbox">
                      {/* Input */}
                      <input className="custom-control-input" id="modalNewsletterHorizontalCheckbox" type="checkbox" />
                      {/* Label */}
                      <label className="custom-control-label font-size-xs" htmlFor="modalNewsletterHorizontalCheckbox">
                        Prevent this Pop-up
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter: Vertical */}
        <div className="modal fade" id="modalNewsletterVertical" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/* Close */}
              <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                <i className="fe fe-x" aria-hidden="true" />
              </button>
              {/* Body */}
              <div className="modal-body mt-2 mr-2 ml-2 py-10 bg-cover text-center text-white" style={{backgroundImage: 'url(/img/covers/cover-26.jpg)'}}>
                {/* Heading */}
                <h4>Subscribe to Newsletter and get 15% Discount</h4>
                {/* Text */}
                <p className="mb-0 font-size-lg">
                  On your next purchase
                </p>
              </div>
              {/* Body */}
              <div className="modal-body py-9">
                {/* Form */}
                <form>
                  <div className="form-row">
                    <div className="col">
                      {/* Input */}
                      <label className="sr-only" htmlFor="modalNewsletterVerticalEmail">Enter Email *</label>
                      <input className="form-control form-control-sm" id="modalNewsletterVerticalEmail" type="email" placeholder="Enter Email *" />
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-sm btn-dark" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Footer */}
              <div className="modal-footer justify-content-center pt-0">
                {/* Checkbox */}
                <div className="custom-control custom-checkbox">
                  {/* Input */}
                  <input className="custom-control-input" id="modalNewsletterVerticalCheckbox" type="checkbox" />
                  {/* Label */}
                  <label className="custom-control-label font-size-xs" htmlFor="modalNewsletterVerticalCheckbox">
                    Prevent this Pop-up
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Password Reset */}
        <ModalPasswordReset />
        {/* Product */}
        <ModalProduct />
        {/* Search */}
        <ModalSearch/>
        {/* Shopping Cart */}
        <ShopCart />
        {/* Sidebar */}
        <SideBar />
        {/* Size Chart */}
        <SizeChart />
        {/* Wait List */}
        <ModalWaitList/>
      </div>
    )
}