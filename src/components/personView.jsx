import React from "react";

const PersonView = ({ list, setList, person, setPerson }) => {
  return (
    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
      <h3 className="card shadow-lg p-3 mb-5 bg-white rounded text-center">
        Person List
      </h3>
      {list.map((item) => {
        const {
          id,
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
              <p>Email : {email}</p>
              <p>Status: {status}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonView;