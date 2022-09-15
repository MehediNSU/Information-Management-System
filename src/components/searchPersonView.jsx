import { useContext } from "react";

import { UserContext } from "./registrationForm.jsx";

const SearchPersonView = () => {
  const { list, searchItem, setSearchItem } = useContext(UserContext);

  return (
    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
      <input
        type="text"
        placeholder="🔍 Search person by First Name"
        className="card shadow-lg p-3 mb-5 bg-white rounded"
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      {list
        .filter((item) => {
          if (searchItem === "") {
            return "";
          } else if (
            item.firstName.toLowerCase().includes(searchItem.toLowerCase())
          ) {
            return item;
          }
          return "";
        })
        .map((item) => {
          const {
            firstName,
            middleName,
            lastName,
            age,
            phoneNumber,
            email,
            status,
          } = item;

          return (
            <div>
              <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <p>
                  {" "}
                  Full Name: {firstName} {middleName} {lastName}
                </p>
                <p>Age: {age}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Email Address: {email}</p>
                <p>Status: {status}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SearchPersonView;
