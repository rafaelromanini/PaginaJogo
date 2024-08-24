import "./index.css";
import Dropdown from "../Dropdown";
import MaisAvaliar from "../../assets/SVG/MaisAvaliacao.svg";
import PostReview from "../PostReview";

function Sobre(props: {

    descricao_topico: string,

}) {
    return (
        <div className="container-about">
            <div className="header-about">
                <div className="topico">
                    <Dropdown topico="ENREDO" />
                    <p>{props.descricao_topico}</p>
                </div>
            </div>
            <div className="avaliacoes">
                <Dropdown topico="AVALIAÇÕES DE USUÁRIOS" />
                <div>
                    <a href="#" className="mais-avaliar">
                        <img src={MaisAvaliar} alt="Mais Avaliar" />
                        <p>Avaliar</p>
                    </a>
                </div>
            </div>
            <div>
                <PostReview 
                    nota_review="10" 
                    autor_review="Geovana Rodrigues Romanini" 
                    data_review="9 de novembro de 2022" 
                    titulo_review="What an incredible sequel!" 
                    texto_review={`A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns, or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better armor, in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles.
                    <br /><br />
                    I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend you start with God of War (2018) If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible: Ragnarök is here and it is beautiful.`} 
                    spoiler={false} 
                    like={33}
                    dislike={11}/>
                <PostReview
                    nota_review="10"
                    autor_review="Rafael Romanini"
                    data_review="14 de Novembro de 2022"
                    titulo_review="This game took part of my soul..."
                    spoiler = {true}
                    texto_review=""
                    like={24}
                    dislike={6}
                    />
            </div>
        </div>
    );
}

export default Sobre;