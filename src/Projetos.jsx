import { Link, NavLink, BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import violao from '/violao.png';
import graylog from '/graylog.png'
function Projetos() {
    return(
        <main className='projetos'>
            <h1>Projetos</h1>

                     <div className="tela">
                        <h2>Violão com alma</h2>
                        <div style={{backgroundImage: "url(" + violao + ")"}}></div>
             <a href="https://codesandbox.io/p/sandbox/trabalho-mariaclara-kyj6cl?file=%2Findex.html" target='_blank' className="botao">Acessar</a>
             </div>
                     <div className="tela">
                        <h2>Graylog</h2>
                        <div style={{backgroundImage: "url(" + graylog + ")"}}></div>
             <a href="" target='_blank' className="botao">Acessar</a>
             </div>
        </main>
        
    )
}
export default Projetos