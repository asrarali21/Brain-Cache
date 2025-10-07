

import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './components/pages/DashBoard'
import SignUp from './components/pages/SignUp'


function App() {
  

  return (
   <>
   <Routes>
    <Route path='/dashboard' element={<DashBoard/>}/>
    <Route path='/' element={<SignUp/>}/>

   </Routes>
   </>
  )
}

export default App
