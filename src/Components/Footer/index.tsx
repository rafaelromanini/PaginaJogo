import "./index.css"
import logoFooter from "../../assets/svg/LogoFooter.svg"

function Footer(){
    return(
        <footer>
            <div className="conteudo-footer">
                <div className="logo-footer">
                    <a href="#">
                        <img src={logoFooter} alt="Logo Ratings" />
                    </a>
                </div>
                <div className="navegacao-footer">
                    <ul>
                        <li className="titulo-lista-footer">COMPANY</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="">Partnerships</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                    <ul>
                        <li className="titulo-lista-footer">COMPANY</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="">Partnerships</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                    <ul>
                        <li className="titulo-lista-footer">COMPANY</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="">Partnerships</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;