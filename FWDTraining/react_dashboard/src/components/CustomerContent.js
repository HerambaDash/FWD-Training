import "../css/contentScreen.css";
import PaginationButtons from "./PaginationButtons";
// import customerData from "../assets/customerData.json";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function CustomerContent() {
  const { search } = useLocation();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    history("/customers/" + page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    getCustomerData();
  }, [])

  const getCustomerData = async() => {
    try {
      let response = await axios.get("http://localhost:8000/customers");
      setData(response.data);
    } catch (error) {
      setData([]);
    }
  }

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
            {data.slice(page * 10 - 10, page * 10).map(item => (
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
          </tbody>
        </table>
      </div>
      <PaginationButtons
        page={page}
        setPage={setPage}
        total={Math.ceil(data.length / 10)}
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