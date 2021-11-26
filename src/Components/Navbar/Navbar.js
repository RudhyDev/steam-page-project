import './Navbar.css'
import logo from './logo-steam.png'


export default function Navbar(){

    return(
        <div className="navbar">
            <img className="logo" src={logo} alt="" />
            <ul className="menus">
                <li><a href='/Login'>LOGIN</a></li>
                <li><a href='/auth/me'>PERFIL</a></li>
                <li><a>REGISTRE-SE</a></li>
                <li>LISTA DE DESEJOS</li>
            </ul>
        </div>
    )
}