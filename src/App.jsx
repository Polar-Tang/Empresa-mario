import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './routes/componentes/NavBar'
import AboutScreen from './routes/AboutScreen'
import ContactScreen from './routes/ContactScreen'
import HomeScreen from './routes/HomeScreen'
import Productos from './routes/ProductoScreen';
import  ProductosProvider from './routes/context/ProductosProvider'
import Carrito from './routes/componentes/CarritoPage'
import { CarritoProvider } from './routes/context/CarritoProvider'


export const App = () => {
  return (
    <ProductosProvider>
        <CarritoProvider>
      <NavBar></NavBar>

<Routes>
  <Route path='/' element={ <HomeScreen></HomeScreen>}  ></Route>
  <Route path='/about' element={  <AboutScreen></AboutScreen>}  ></Route>
  <Route path='/contact' element={ <ContactScreen></ContactScreen> }  ></Route>
  <Route path='/productos' element={ <Productos></Productos> }  ></Route> 
  <Route path="/*" element={ <Navigate to= '/' /> }></Route>
  <Route path='/carrito' element={ <Carrito></Carrito>} ></Route>
</Routes>
        </CarritoProvider>
    </ProductosProvider>
  )
}

export default App