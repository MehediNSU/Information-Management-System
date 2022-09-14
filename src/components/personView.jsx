import { useContext } from "react";
import { UserContext } from "./registrationForm.jsx";

const PersonView = () => {
  const { list } = useContext(UserContext);

  return (
    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
      <h3 className="card shadow-lg p-3 mb-5 bg-white rounded text-center">
        Person List
      </h3>
      {list.map((item) => {
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
        );
      })}
    </div>
  );
};

export default PersonView;
