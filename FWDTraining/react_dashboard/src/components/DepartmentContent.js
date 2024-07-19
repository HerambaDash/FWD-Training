import "../css/contentScreen.css";
import PaginationButtons from "./PaginationButtons";
// import departmentData from "../assets/departmentData.json";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function DepartmentContent() {
  const { search } = useLocation();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    history("/departments/" + page);
  }, [page]);

  useEffect(() => {
    getCustomerData();
  }, [])

  const getCustomerData = async() => {
    try {
      let response = await axios.get("http://localhost:8000/departments");
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
              <th>Department ID</th>
              <th>Department Incharge</th>
              <th>Name</th>
              <th>Size</th>
              <th>Total Media Size</th>
            </tr>
            {data.slice(page * 10 - 10, page * 10).map((item) => (
              <tr
                id={item.departmentId}
                key={item.departmentId}
                className={item.departmentId === search.split('?')[1] ? "activeRow" : ""}
              >
                <td>{item.departmentId}</td>
                <td>{item.departmentIncharge}</td>
                <td>{item.name}</td>
                <td>{item.size}</td>
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

export default DepartmentContent;
