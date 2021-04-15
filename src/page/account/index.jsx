import { Route, Switch, useRouteMatch } from "react-router";
import Sidebar from "./components/Sidebar";
import Order_list from "./components/OrderList"
import Order from './components/Order'
import Wishlist from "./components/WishList";
import PersonnalInfo from "./components/PersonalInfo";
import Address from './components/Address'
export default function Account(){
    let match =useRouteMatch()
    console.log(match)
    return(
        <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-10">My Account</h3>
            </div>
          </div>
          <div className="row">
            <Sidebar />
            <Switch>
                <Route path={`${match.path}/order`} exact component={Order_list} />
                <Route path={`${match.path}/order/:slug`}  component={Order} />
                <Route path={`${match.path}/wishlist`}  component={Wishlist} />
                <Route path={`${match.path}/address`} exact component={Address} />
                <Route path={`${match.path}`}  exact component={PersonnalInfo} />
            </Switch>
          </div>
        </div>
      </section>
    )
}