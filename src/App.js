import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Account from './pages/Account';
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
