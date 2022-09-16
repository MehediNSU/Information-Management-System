import { useContext } from "react";
import { UserContext } from "./registrationForm";

const CreatePerson = () => {
  const { person, onChangeHandler, submitHanlder } = useContext(UserContext);

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
    </div>
  );
};

export default CreatePerson;
