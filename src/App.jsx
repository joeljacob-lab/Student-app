import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from '../components/AddStudent'
import SearchStudent from '../components/SearchStudent'
import NavBar from '../components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DeleteStudent from '../components/DeleteStudent'
import ViewAll from '../components/ViewAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Routes>

        <Route path='/' element={<AddStudent/>}/>
        <Route path='add' index element={<AddStudent/>}/>
        <Route path='nav' element={<NavBar/>}/>
        <Route path='delete' element={<DeleteStudent/>}/>
        <Route path='search' element={<SearchStudent/>}/>
        <Route path='viewall' element={<ViewAll/>}/>
        

      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App