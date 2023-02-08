import React from "react";
import { Header, CreateContainer, MainContainer } from "./components";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <>
      <AnimatePresence>
        <div className="w-screen h-auto flex flex-col bg-slate-400 ">
          <Header />
          <main className="mt-24 p-8 w-full">
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="/createcontainer" element={<CreateContainer />} />
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    </>
  );
};

export default App;
