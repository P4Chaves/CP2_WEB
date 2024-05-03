import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import {Outlet} from 'react-router-dom';

function App() {
  return (
        <>
          <NavBar/>
          <Outlet/>
          <Footer />
        </>
  )
}

export default App
