import "./App.css";
import Header from "./components/header";
import RegistrationForm from "./components/registrationForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <RegistrationForm />
    </div>
  );
}

export default App;
