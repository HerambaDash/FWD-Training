import "../css/contentScreen.css";
import PaginationButtons from "./PaginationButtons";
import data from "../assets/data.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CustomerContent() {
  const [page, setPage] = useState(1);
  const history = useNavigate();

  useEffect(() => {
    history("/customers/" + page);
  }, [page]);

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
            {data.slice(page * 10 - 10, page * 10).map((item) => (
              <tr id={item.customerId} key={item.customerId}>
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
