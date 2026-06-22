import { Link, NavLink, BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
    return(
        <main className='home'>
            <div>
            <div className="informPessoal">
            <h1>Maria Clara</h1>
            <h2>Desenvolvedora Full-stack</h2>
            <p>Estudante do IFRJ e estagiária na Leste Telecom.</p>
            </div>
            <Link to="/sobre" className="botao ativo">Me conheça</Link>
            </div>
            
        </main>
    )
}

export default Home