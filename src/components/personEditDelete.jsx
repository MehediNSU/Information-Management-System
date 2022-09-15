import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "./registrationForm.jsx";

const PersonEditDelete = ({ item }) => {
  const { list, setList, setPerson, setIdEditing, setEditId } =
    useContext(UserContext);
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

  const editItem = () => {
    setIdEditing(true);
    setEditId(id);
    setPerson({ ...item, id: id });
    setPerson({ ...item, firstName: firstName });
    setPerson({ ...item, middleName: middleName });
    setPerson({ ...item, lastName: lastName });
    setPerson({ ...item, age: age });
    setPerson({ ...item, phoneNumber: phoneNumber });
    setPerson({ ...item, email: email });
    setPerson({ ...item, status: status });
  };

  const removeItem = () => {
    alert("Information Deleted Successfully");
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div>
      <button type="button" className="edit-btn" onClick={() => editItem()}>
        <FontAwesomeIcon icon={faPen} />
      </button>
      <button type="button" className="delete-btn" onClick={() => removeItem()}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default PersonEditDelete;
