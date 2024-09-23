import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./widgets/header/Header"
import Main from "./pages/main/Main"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"

export default function App() {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto px-5">
        <BrowserRouter>
          <Routes>
            <Route exact path='' element={<Main />} />
            <Route exact path='/reg' element={<SignUp/>} />
            <Route exact path='/auth' element={<SignIn/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}