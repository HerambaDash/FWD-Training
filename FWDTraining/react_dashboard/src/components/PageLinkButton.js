import "../css/sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function PageLinkButton({ icon, text, link}) {
  const history = useNavigate();
  const location = useLocation();
  const [ btnClass, setBtnClass ] = useState("pageLinkButton");

  // useEffect(() => {
  //   // execution logic will be here
  //   // run every time components re-renders and also the first time
  // }); 
  
  useEffect(() => {
    // execution logic will be here
    // run first time, everytime the variable that is declared inside the square bracket
    // changes
    if(link !== "/") {
      let ar1 = link.split("/");
      let ar2 = location.pathname.split("/");
      if(ar1[1] === ar2[1]) {
        setBtnClass("pageLinkButton active");
      } else {
        setBtnClass("pageLinkButton");
      }
    } else {
      if(link === location.pathname) {
        setBtnClass("pageLinkButton active");
      } else {
        setBtnClass("pageLinkButton");
      }
    }
  }, [location.pathname]);

  // useEffect(() => {
  //   // execution logic will be here
  //   // run only once
  //   // when the component's first render
  //   setBtnClass("pageLinkButton");
  // }, []);
  
  return (
    <>
      <button
        className = { btnClass }
        onClick = {() => history(link)}
      >
        <i className = {icon + " pageLinkIcon"}></i>
        <span className = "pageLinkText">{text}</span>
      </button>
    </>
  );
}

export default PageLinkButton;