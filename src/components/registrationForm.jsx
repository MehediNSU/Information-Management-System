import { createContext, useState, useEffect } from "react";
import "./style.css";
import PersonView from "./personView.jsx";
import SearchPersonView from "./searchPersonView.jsx";

export const UserContext = createContext();

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
  let [person, setPerson] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: null,
    phoneNumber: "",
    email: "",
    status: "",
  });

  const [isEditing, setIdEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setPerson({ ...person, [name]: value });
  };

  const submitHanlder = () => {
    if (isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            item = {
              ...item,
              id: person.id,
              firstName: person.firstName,
              middleName: person.middleName,
              lastName: person.lastName,
              age: person.age,
              phoneNumber: person.phoneNumber,
              email: person.email,
              status: person.status,
            };
            setList([...list, item]);
            alert("Information Updated Successfully");
            setPerson({
              firstName: "",
              middleName: "",
              lastName: "",
              age: "",
              phoneNumber: "",
              email: "",
              status: "",
            });
          }
          return item;
        })
      );
      setEditId(null);
      isEditing(false);
    } else {
      let makeId = list.length + 1;
      person = { ...person, id: makeId };
      setList([...list, person]);
      alert("Information Saved Succesfuuly");
      setPerson({
        firstName: "",
        middleName: "",
        lastName: "",
        age: "",
        phoneNumber: "",
        email: "",
        status: "",
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        list,
        setList,
        person,
        setPerson,
        isEditing,
        setIdEditing,
        editId,
        setEditId,
        searchItem,
        setSearchItem,
      }}
    >
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
              name="firstName"
              value={person.firstName}
              onChange={onChangeHandler}
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
              name="middleName"
              value={person.middleName}
              onChange={onChangeHandler}
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
              name="lastName"
              id="lastName"
              value={person.lastName}
              className="form__input"
              onChange={onChangeHandler}
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
              name="age"
              value={person.age}
              onChange={onChangeHandler}
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
              name="phoneNumber"
              value={person.phoneNumber}
              onChange={onChangeHandler}
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
              name="email"
              className="form__input"
              value={person.email}
              onChange={onChangeHandler}
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
              onChange={onChangeHandler}
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
        <div class="footer">
          <button
            type="button"
            class="btn btn-outline-success btn-block"
            onClick={submitHanlder}
          >
            Save
          </button>
        </div>
        <br></br>
        <div>
          <div>
            <SearchPersonView />
          </div>
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
    </UserContext.Provider>
  );
}

export default RegistrationForm;
