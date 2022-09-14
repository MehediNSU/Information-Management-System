import React, { useState, useEffect } from "react";
import "./style.css";
import PersonView from "./personView.jsx";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(list));
  } else {
    return [];
  }
};

function RegistrationForm() {
  const [list, setList] = useState(getLocalStorage());
  const [person, setPerson] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    email: "",
    status: "",
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setPerson({ ...person, firstName: value });
    }
    if (id === "middleName") {
      setPerson({ ...person, middleName: value });
    }
    if (id === "lastName") {
      setPerson({ ...person, lastName: value });
    }
    if (id === "age") {
      setPerson({ ...person, age: value });
    }
    if (id === "phoneNumber") {
      setPerson({ ...person, phoneNumber: value });
    }
    if (id === "email") {
      setPerson({ ...person, email: value });
    }
    if (id === "status") {
      setPerson({ ...person, status: value });
    }
  };

  const handleSubmit = (e) => {
    setList([...list, person]);
    e.preventDefault();
    alert("Save Information Successfully");
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="firstname">
          <h3 className="text-center">Information Form</h3>
          <br></br>
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={person.firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="Enter First Name"
          />
        </div>
        <div className="middlename">
          <label className="form__label" for="middleName">
            Middle Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={person.middleName}
            onChange={(e) => handleInputChange(e)}
            id="middleName"
            placeholder="Enter Middle Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={person.lastName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="age">
          <label className="form__label" for="age">
            Age{" "}
          </label>
          <input
            className="form__input"
            type="number"
            value={person.age}
            onChange={(e) => handleInputChange(e)}
            id="age"
            placeholder="Enter Age"
          />
        </div>
        <div className="phonenumber">
          <label className="form__label" for="phoneNumber">
            Phone Number{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={person.phoneNumber}
            onChange={(e) => handleInputChange(e)}
            id="phoneNumber"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={person.email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter Email"
          />
        </div>
        <div className="status">
          <label className="form__label" for="status">
            Status{" "}
          </label>
          <select
            className="form__input"
            id="status"
            name="status"
            onChange={(e) => handleInputChange(e)}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>
      <div class="footer">
        <button
          type="submit"
          class="btn btn-outline-success btn-block"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      <br></br>
      <div>
        {list.length > 0 && (
          <PersonView
            list={list}
            setList={setList}
            person={person}
            setPerson={setPerson}
          />
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
