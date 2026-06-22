import { Link, NavLink, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Projetos from './Projetos'
import './App.css'

function App() {
  return(
    <BrowserRouter basename='/clara-portfolio'>
      <nav>
        <NavLink  to='/' className={({isActive})=> isActive ? "botao ativo" : "botao" }>Home</NavLink>
        <NavLink  to='/sobre' className={({isActive})=> isActive ? "botao ativo" : "botao" }>Sobre Mim</NavLink>
        <NavLink  to='/projetos' className={({isActive})=> isActive ? "botao ativo" : "botao" }>Projetos</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/projetos' element={<Projetos/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
