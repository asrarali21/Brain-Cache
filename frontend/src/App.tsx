

import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './components/pages/DashBoard'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'


function App() {
  

  return (
   <>
   <Routes>
    <Route path='/dashboard' element={<DashBoard/>}/>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/login' element={<SignIn/>}/>

   </Routes>
   </>
  )
}

export default App
