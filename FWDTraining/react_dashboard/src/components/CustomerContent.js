import "../css/contentScreen.css";
import customerData from "../assets/customerData.json";
import PaginationButtons1 from "./PaginationButtons1";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

function CustomerContent() {
  const { pgNo } = useParams();
  const { search } = useLocation();
  // const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const history = useNavigate();
  const ref = useRef(1);

  useEffect(() => {
    const pattern = new RegExp("^[1-9]d*$");
    if (pattern.test(pgNo)) {
      setPage(Number(pgNo));
      // getCustomerData(Number(pgNo));
    }
  }, [pgNo]);

  useEffect(() => {
    history("/customers/" + page);
    if(page % 2 === 0) {
      ref.current+=1;
    }
  }, [history, page]);

  // const reRenderCount = () => {
  //   console.log("Re-render");
  //   console.log(ref.current);
  // }

  // const reRenderCount = useCallback(() => {
  //   console.log("Re-render");
  //   console.log(ref.current);
  // }, []);

  const reRenderCount = useCallback(() => {
    console.log("Re-render");
    console.log(ref.current);
  }, []);

  const memoData = useMemo(() => {
    return customerData.filter(item => item.customerId.length > 4)
  }, []);

  useEffect(() => {
    reRenderCount();
    // let x = memoData;
    // console.log(x);
  }, [memoData, reRenderCount])

  // const getCustomerData = async() => {
  //   try {
  //     let response = await axios.get("http://localhost:8000/paginatedCustomers");
  //     setData(response.data[page]);
  //   } catch (error) {
  //     setData([]);
  //   }
  // }

  return (
    <div className="content">
      <div className="customerContent">
        <table className="cTable">
          <tbody>
            <tr key="header">
              <th>CustomerID</th>
              <th>DepartmentID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Total Media Size</th>
            </tr>
            {customerData.slice(page * 10 - 10, page * 10).map((item) => (
              <tr
                id={item.customerId}
                key={item.customerId}
                className={item.customerId === search.split('?')[1] ? "activeRow" : ""}
              >
                <td>{item.customerId}</td>
                <td>{item.departmentId}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.tms}</td>
              </tr>
            ))}
            {/* {Object.keys(data).map(item => (
              <tr
                id={data[item].customerId}
                key={data[item].customerId}
                className={data[item].customerId === search.split('?')[1] ? "activeRow" : ""}
              >
                <td>{data[item].customerId}</td>
                <td>{data[item].departmentId}</td>
                <td>{data[item].name}</td>
                <td>{data[item].email}</td>
                <td>{data[item].tms}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
      <PaginationButtons1
        page={page}
        setPage={setPage}
        total={Math.ceil(customerData.length / 10)}
      />
    </div>
  );
}

export default CustomerContent;

// <tbody></tbody>    <thead></thead>
// let mp = new Map()
// mp.set('a', 1);
// mp.set('b', html element);
// mp.get('a');
// search = "?HFRY-10" => split => ['', 'HFRY-10']
