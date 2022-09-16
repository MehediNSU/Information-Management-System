import { createContext, useState, useEffect } from "react";
import "./style.css";
import PersonView from "./personView.jsx";
import SearchPersonView from "./searchPersonView.jsx";
import CreatePerson from "./createPerson.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";

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

  let onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setPerson({ ...person, [name]: value });
  };

  let submitHanlder = () => {
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
        onChangeHandler,
        submitHanlder,
      }}
    >
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="flex col-md-6">
            <Router>
              <Navbar />
              <Routes>
                <Route exact path="/createperson" element={<CreatePerson />} />
                <Route exact path="/listview" element={<PersonView />} />
                <Route
                  exact
                  path="/searchlistview"
                  element={<SearchPersonView />}
                />
                <Route path="" element={<PersonView />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default RegistrationForm;
