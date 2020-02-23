import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Report from "./screens/report/Report";
import Account from "./screens/account/Account";
import Drawer from "./components/drawer/Drawer";
import Business from "./screens/business/Business";
import Employee from "./screens/employee/Employee";
import Promo from "./screens/promo/Promo";
import Billing from "./screens/billing/Billing";
import TaxServices from "./screens/tax-services/TaxServices";
import Inventory from "./screens/inventory/Inventory";
import ProductItem from "./screens/product-item/ProductItem";
import ProductCategory from "./screens/product-category/ProductCategory";

function App() {
  return (
    <div className="App">
      <Navbar brand="HOPCASH" />
      <div className="padding-top-navbar-fixed"></div>
      <div className="card-flex">
        <div className="card-data-drawer-app lg-none">
          <Drawer />
        </div>

        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/business" component={Business}></Route>
          <Route path="/report" component={Report}></Route>
          <Route path="/product-category" component={ProductCategory}></Route>
          <Route path="/product-item" component={ProductItem}></Route>
          <Route path="/inventory" component={Inventory}></Route>
          <Route path="/tax-services" component={TaxServices}></Route>
          <Route path="/employee" component={Employee}></Route>
          <Route path="/promo" component={Promo}></Route>
          <Route path="/billing" component={Billing}></Route>
          <Route path="/account" component={Account}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
