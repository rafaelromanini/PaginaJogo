import "./index.css";
import EstrelaAvaliado from '../../assets/SVG/EstrelaAvaliado.svg'
import SetaSpoiler from '../../assets/SVG/Seta-Spoiler.svg'
import Like from '../../assets/SVG/Like.svg'
import Dislike from '../../assets/SVG/Dislike.svg'
import Opcoes from '../../assets/SVG/Opcoes.svg'

function PostReview(props: {
    nota_review : string,
    autor_review : string,
    data_review : string,
    titulo_review : string,
    texto_review : string,
    spoiler: boolean,
    like: number,
    dislike: number,
}) {
    return (

        <div className="review">
            <div className="header-review">
              <div className="dado-review">
                <div className="review-destaque">
                    <p>AVALIAÇÃO EM DESTAQUE</p>
                </div>
                <div className="classificacao">
                    <img src={EstrelaAvaliado} alt="Estrela Preenchida Icon" />
                    <p>{props.nota_review}<span className="cinza">/10</span></p>
                    </div>
                </div>
                <div className="dado-post-review">
                    <a href="#!">{props.autor_review}</a>
                    <p className="cinza">{props.data_review}</p>
                </div>
            </div>
            <div className="texto-review">
                <h4>{props.titulo_review}</h4>
                {props.spoiler ? (
                    <div className="spoilerDropdown">
                        <p>Warning: Spoilers!</p>
                        <img src={SetaSpoiler} />
                    </div>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: props.texto_review }} />
                )}
            </div>
            <div className="interacao-review">
                <div className="reacao-review">
                    <div className="like-review">
                        <img src={Like} alt="Like Icon" />
                        <p>{props.like}</p>
                    </div>
                    <div className="dislike-review">
                        <img src={Dislike} />
                        <p>{props.dislike}</p>
                    </div>
                </div>
                <a href="#!">
                    <img src={Opcoes}/>
                </a>
            </div>
          </div>

    )
}

export default PostReview;