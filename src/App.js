

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Page/Sign in&up/Signin";
import SignUp from "./Page/Sign in&up/Signup";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
