
import './App.css';
import Header from './components/header'
import Footer from './components/footer';
import Home from './home';
import Product_detail from './page/productdetail';

import Page404 from './page/404'
import AppProvider from './core/AppProvider';
import { Route, Router, Switch } from 'react-router';
import reducers from './redux/reducers';
import Store_locator from './page/store-locator';
import Auth from './page/auth';
import Account from './page/account';
import Modal from './components/modal';
import PrivateRouter from './core/PrivateRouter';
import Catalog from './page/catallog';
import Checkout from 'page/checkout';

function App() {
  return (
    <AppProvider  reducers={reducers} >
    <Modal />
      <Header/>
      <Switch>
        <Route path="/product_detail"  component={Product_detail}/>

        <Route path="/store_locator"  component={Store_locator}/>
    
        <Route path="/auth"  component={Auth}/>
        <Route path="/catalog"  component={Catalog}/>
        <Route path="/checkout"  component={Checkout}/>
        <PrivateRouter path="/account"  component={Account}/>
        <Route path="/"  exact component={Home}/>
        <Route path="/"   component={Page404}/>
      </Switch>
      <Footer />

    </AppProvider>
  );
}

export default App;
