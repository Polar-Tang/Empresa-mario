import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './routes/componentes/NavBar'

import AboutScreen from './routes/AboutScreen'
import ContactScreen from './routes/ContactScreen'
import HomeScreen from './routes/HomeScreen'
import Productos from './routes/ProductoScreen';


export const App = () => {
  return (
    <>
      <NavBar></NavBar>

<Routes>
  <Route path='/' element={ <HomeScreen></HomeScreen>}  ></Route>
  <Route path='/about' element={  <AboutScreen></AboutScreen>}  ></Route>
  <Route path='/contact' element={ <ContactScreen></ContactScreen> }  ></Route>
  <Route path='/productos' element={ <Productos></Productos> }  ></Route> 
  <Route path="/*" element={ <Navigate to= '/' /> }></Route>
</Routes>
    </>
  )
}

export default App