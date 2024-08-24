import "./index.css"
import SetaTopico from "../../assets/SVG/SetaTopico.svg"


function Dropdown(props: {

    topico : string,
    
}) {
    return(
                    <div className="tema">
                        <img src={SetaTopico} alt="Seta" />
                        <h2>{props.topico}</h2>
                    </div>
    )
}

export default Dropdown