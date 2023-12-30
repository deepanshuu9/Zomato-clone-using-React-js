import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import EmailLogin from "./components/EmailLogin";
import Main from "./components/Main";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/details" element={<Details />} />
        <Route path="/emailLogin" element={<EmailLogin />} />
      </Routes>
    </>
  );
}

export default App;
