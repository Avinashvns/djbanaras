

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Page/Sign in&up/Signin";
import SignUp from "./Page/Sign in&up/Signup";
import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./firebase"
import { Button } from "@mui/material";

const auth = getAuth(app);



function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("You are logg out");
        setUser(null);
      }
    })
  }, []);

  if (user === null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<SignUp />} />
    //     <Route path="/signin" element={<SignIn />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <h1>Hello {user.email}</h1>
      <Button onClick={() => signOut(auth)}>Logout</Button>
    </div>
  );
}

export default App;
