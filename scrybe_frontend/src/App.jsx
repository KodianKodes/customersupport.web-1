
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./pages/SignUp";
import Signin from "./pages/SignIn";
import Successful from "./pages/Successful";
import SetNewPassword from "./pages/SetNewPassword";
import ForgetPassword from "./pages/ForgetPassword";
import PasswordResetSuccessful from "./pages/PasswordResetSuccessful";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/reset-successful" element={<Successful />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/pw-reset-successful" element={<PasswordResetSuccessful />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;