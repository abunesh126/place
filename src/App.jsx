// App.jsx decides WHICH PAGE to show, based on the URL.
// Think of "Routes" like a traffic controller:
// if the address bar says "/", show Login.
// if it says "/add-student", show AddStudent. and so on.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/jsx/Login";
import AddStudent from "./Pages/jsx/AddStudent";
import ShowStudent from "./Pages/jsx/ShowStudent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/show-student" element={<ShowStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
