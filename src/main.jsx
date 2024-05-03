import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,Link} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ListaProjetos from './pages/lista_projetos.jsx'
import SobreNos from './pages/sobre_nos.jsx'
import './index.css'
import './App.css'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {index: true, element: <Home />},
    {
      path: 'lista_projetos',
      element: <ListaProjetos/>,
    },
    {
      path: 'sobre_nos',
      element: <SobreNos />,
    },
  ],

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

