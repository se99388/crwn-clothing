import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App =( { checkUserSession, currentUser } )=> {

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])


  return(
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? (
                <Redirect to={{ pathname: "/" }} />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
      </BrowserRouter >
    );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
