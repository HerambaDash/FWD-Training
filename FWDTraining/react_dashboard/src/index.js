import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./components/App";
import MediaContent from "./components/MediaContent";
import AccountContent from "./components/AccountContent";
import CustomerContent from "./components/CustomerContent";
import HomeContent from "./components/HomeContent";
import DepartmentContent from "./components/DepartmentContent";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="media" element={<MediaContent />} />
          <Route path="my-account" element={<AccountContent />} />
          <Route path="departments/:pgNo" element={<DepartmentContent />} />
          <Route path="customers/:pgNo" element={<CustomerContent />} />
          <Route path="" element={<HomeContent />} />
        </Route>
        {/* <Route exact = {true} path = "/error" element = {<ErrorPage />} /> */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// BrowserRouter = HTML5 url API popState pushState readyState
// MemoryRouter = Url is not changed // server enviornments // react-native //testing
// HashRouter = old browsers // window.location.hash // www.x.com/#/my-account
