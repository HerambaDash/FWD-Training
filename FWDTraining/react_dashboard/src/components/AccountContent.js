import "../css/contentScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccountInfo } from "../store";

function AccountContent() {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => {
    return state.accounts;
  });
  const [formData, setFormData] = useState({
    name: { value: "", readOnly: true },
    email: { value: "", readOnly: true },
    phone: { value: "", readOnly: true },
    date: { value: "", readOnly: true },
  });

  useEffect(() => {
    console.log(accounts);
    setFormData({
      name: { value: accounts.name, readOnly: true },
      email: { value: accounts.email, readOnly: true },
      phone: { value: accounts.phone, readOnly: true },
      date: { value: accounts.date, readOnly: true },
    });
  }, [accounts]);

  const handleSave = (e) => {
    e.preventDefault();
    const updateAccountInfoAction = updateAccountInfo(formData);
    dispatch(updateAccountInfoAction);
  };

  return (
    <div className="content">
      <form className="accountForm">
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <br />
        <input
          className="accountInput"
          type="text"
          id="name"
          placeholder="Enter Name"
          readOnly={formData.name.readOnly}
          value={formData.name.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: {
                ...formData.name,
                value: e.target.value,
              },
            })
          }
        />
        <i
          className={
            !formData.name.readOnly
              ? "fa-solid fa-pencil pencil active"
              : "fa-solid fa-pencil pencil"
          }
          onClick={() =>
            setFormData({
              ...formData,
              name: {
                ...formData.name,
                readOnly: !formData.name.readOnly,
              },
            })
          }
        ></i>
        <br />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <br />
        <input
          className="accountInput"
          type="text"
          id="email"
          placeholder="Enter Email"
          readOnly={formData.email.readOnly}
          value={formData.email.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: {
                ...formData.email,
                value: e.target.value,
              },
            })
          }
        />
        <i
          className={
            !formData.email.readOnly
              ? "fa-solid fa-pencil pencil active"
              : "fa-solid fa-pencil pencil"
          }
          onClick={() =>
            setFormData({
              ...formData,
              email: {
                ...formData.email,
                readOnly: !formData.email.readOnly,
              },
            })
          }
        ></i>
        <br />
        <label htmlFor="phone">
          <b>Phone Number</b>
        </label>
        <br />
        <input
          className="accountInput"
          type="text"
          id="phone"
          placeholder="Enter Phone number"
          readOnly={formData.phone.readOnly}
          value={formData.phone.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: {
                ...formData.phone,
                value: e.target.value,
              },
            })
          }
        />
        <i
          className={
            !formData.phone.readOnly
              ? "fa-solid fa-pencil pencil active"
              : "fa-solid fa-pencil pencil"
          }
          onClick={() =>
            setFormData({
              ...formData,
              phone: {
                ...formData.phone,
                readOnly: !formData.phone.readOnly,
              },
            })
          }
        ></i>
        <br />
        <label htmlFor="dob">
          <b>Date Of Birth</b>
        </label>
        <br />
        <input
          className="accountInput"
          type="date"
          id="dob"
          readOnly={formData.date.readOnly}
          value={formData.date.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              date: {
                ...formData.date,
                value: e.target.value,
              },
            })
          }
        />
        <i
          className={
            !formData.date.readOnly
              ? "fa-solid fa-pencil pencil active"
              : "fa-solid fa-pencil pencil"
          }
          onClick={() =>
            setFormData({
              ...formData,
              dob: {
                ...formData.date,
                readOnly: !formData.date.readOnly,
              },
            })
          }
        ></i>
        <br />
        <div>
          <button className="accountButton save" onClick={(e) => handleSave(e)}>
            Save
          </button>
          <button
            className="accountButton cancel"
            onClick={() =>
              setFormData({
                name: { value: accounts.name, readOnly: true },
                email: { value: accounts.email, readOnly: true },
                phone: { value: accounts.phone, readOnly: true },
                date: { value: accounts.date, readOnly: true },
              })
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountContent;
