import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import Favorites from "./pages/Favorites"
import Header from "./components/UI/Header";
import Sing from "./components/buissnes/Sing";
import Film from "./pages/Film/Film";

function App() {
  return (
    <>
    <Sing/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/:id" element={<Film/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
