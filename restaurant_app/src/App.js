import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header.js"
import CreateContainer from "./CreateContainer"
const App = () => {
  console.log("Hello")
  return (
    <>
      <h1>Shailendra</h1>
      <Header/>
      <Routes>
        <Route path='/one' element={<CreateContainer/>}/>
      </Routes>
    </>
  )
}
export default App
