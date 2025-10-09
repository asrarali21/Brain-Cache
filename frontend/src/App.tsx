
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './components/pages/DashBoard'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default App
