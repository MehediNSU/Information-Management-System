import { useContext } from "react";
import PersonEditDelete from "./personEditDelete.jsx";
import { UserContext } from "./registrationForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PersonView = () => {
  const { list, setList } = useContext(UserContext);

  const handleChange = (ID, value) => {
    setList(
      list.map((item) => {
        if (item.id === ID) {
          item = { ...item, status: value };
          setList([...list, item]);
          alert("Status Updated Successfully");
        }
        return item;
      })
    );
  };

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
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <p>
              {" "}
              Full Name: {firstName} {middleName} {lastName}
            </p>
            <p>Age: {age}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Email : {email}</p>

            <div className="iconsWrap">
              {status === "Online" ? (
                <p>
                  Status: Online{" "}
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                </p>
              ) : (
                <p>
                  Status: Offline{" "}
                  <span2>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span2>
                </p>
              )}
            </div>

            <div className="flex-row card p-3">
              {status === "Online" ? (
                <div className="margin-right">
                  <input
                    title="Mark as Offline"
                    type="checkbox"
                    onClick={() => {
                      handleChange(id, "Offline");
                    }}
                  />{" "}
                  Offline
                </div>
              ) : (
                <div className="margin-right">
                  <input
                    title="Mark as Online"
                    type="checkbox"
                    onClick={() => {
                      handleChange(id, "Online");
                    }}
                  />{" "}
                  Online
                </div>
              )}
            </div>
            <PersonEditDelete item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default PersonView;
