import "../css/contentScreen.css";
import PaginationButtons1 from "./PaginationButtons1";
import departmentData from "../assets/departmentData.json";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeDepartment,
  addDepartment,
  removeDepartment,
} from "../store";
import axios from "axios";

function DepartmentContent() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { pgNo } = useParams();
  const [page, setPage] = useState(1);
  const history = useNavigate();
  const departments = useSelector((state) => {
    return state.departments;
  });

  const getCustomerData = useCallback(async () => {
    try {
      let response = await axios.get("http://localhost:8000/departments");
      const initializeDepartmentAction = initializeDepartment(response.data);
      dispatch(initializeDepartmentAction);
    } catch (error) {
      const initialValue = {};
      const obj = departmentData.reduce((accumulator, currentValue) => {
        return {
          ...accumulator,
          [currentValue.departmentId]: { ...currentValue },
        };
      }, initialValue);
      const initializeDepartmentAction = initializeDepartment(obj);
      dispatch(initializeDepartmentAction);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCustomerData();
  }, [getCustomerData]);

  useEffect(() => {
    history("/departments/" + page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const pattern = new RegExp("^[1-9]d*$");
    if (pattern.test(pgNo)) {
      setPage(Number(pgNo));
    }
  }, [pgNo]);

  const removeData = (id) => {
    const removeDepartmentAction = removeDepartment(id);
    dispatch(removeDepartmentAction);
  };

  const addData = () => {
    let newObj = {
      "DEPTXE-50ER" : {
        departmentId: "DEPTXE-50ER",
        departmentIncharge: "Sam Harris",
        name : "Editors Guild",
        size: 46,
        tms : "23 GB"
      }
    }
    const addDepartmentAction = addDepartment(newObj);
    dispatch(addDepartmentAction);
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
              <th>Action</th>
            </tr>
            {Object.keys(departments)
              .slice(page * 10 - 10, page * 10)
              .map((item) => (
                <tr
                  id={departments[item].departmentId}
                  key={departments[item].departmentId}
                  className={
                    departments[item].departmentId === search.split("?")[1]
                      ? "activeRow"
                      : ""
                  }
                >
                  <td>{departments[item].departmentId}</td>
                  <td>{departments[item].departmentIncharge}</td>
                  <td>{departments[item].name}</td>
                  <td>{departments[item].size}</td>
                  <td>{departments[item].tms}</td>
                  <td>
                    <button
                      className="pageButton icon"
                      onClick={() => removeData(departments[item].departmentId)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button className="pageButton icon" onClick = {() => addData()}>Add</button>
      </div>
      <PaginationButtons1
        page={page}
        setPage={setPage}
        total={Math.ceil(Object.keys(departments).length / 10)}
      />
    </div>
  );
}

export default DepartmentContent;
