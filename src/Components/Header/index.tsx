import logo from "../../assets/SVG/LogoHeader.svg";
import Lupa from "../../assets/SVG/Lupa.svg";
import Menu from "../../assets/SVG/Menu.svg";
import "./index.css";

function Header() {
    return (

        <header>
            <div className="container">
                <a href=""><img src={logo} alt="" /></a>
                <a className="menu" href=""><img src={Menu} alt="Riscos Menu" />MENU</a>
                <div className="pesquisa"> <img src={Lupa} alt="Lupa" /><input type="text" placeholder="Search" /></div>
                <a className="login" href="">LOGIN</a>
            </div>
        </header>

    )
}

export default Header;