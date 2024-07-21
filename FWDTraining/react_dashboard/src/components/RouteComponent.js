import { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import MediaContent from "./MediaContent";
import AccountContent from "./AccountContent";
import CustomerContent from "./CustomerContent";
import HomeContent from "./HomeContent";
import DepartmentContent from "./DepartmentContent";
import SignIn from "../pages/SignIn";
import { AccountContext } from "../store/AccountContext";
import { store } from "../store";

function RouteComponent() {
  const { auth } = useContext(AccountContext);
  return (
    <Routes>
      <Route
        path="/"
        element={auth ? <App /> : <Navigate replace to="/sign-in" />}
      >
        <Route path="media" element={<MediaContent />} />
        <Route path="my-account" element={<AccountContent />} />
        <Route path="departments/:pgNo" element={<DepartmentContent />} />
        <Route path="customers/:pgNo" element={<CustomerContent />} />
        <Route path="" element={<HomeContent />} />
      </Route>
      <Route
        exact={true}
        path="/sign-in"
        element={!auth ? <SignIn /> : <Navigate replace to="/" />}
      />
      {/* <Route exact = {true} path = "/error" element = {<ErrorPage />} /> */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

function ContextComponent() {
  const [auth, setAuth] = useState(localStorage.getItem("account_context"));
  return (
    <AccountContext.Provider value={{ auth, setAuth }}>
      <Provider store = {store}>
        <RouteComponent />
      </Provider>
    </AccountContext.Provider>
  );
}

export default ContextComponent;
