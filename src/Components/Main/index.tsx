import React, { useState } from 'react';
import EstrelaAvaliada from "../../assets/SVG/EstrelaAvaliado.svg";
import EstrelaAvaliar from '../../assets/SVG/EstrelaAvaliar.svg';
import "./index.css";

function Main(props: {
    titulo: string,
    nota: number,
    imagemfundo: string,
    imagem1: string,
    imagem2: string,
}) {

    const [estrelaImg, setEstrelaImg] = useState(EstrelaAvaliar);
    const [textoAvaliacao, setTextoAvaliacao] = useState('AVALIAR');

    const clique = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (estrelaImg === EstrelaAvaliar) {
            setEstrelaImg(EstrelaAvaliada);
            setTextoAvaliacao('AVALIADO');
        } else {
            setEstrelaImg(EstrelaAvaliar);
            setTextoAvaliacao('AVALIAR');
        }
    };

    return (
        <section className="background" style={{
            backgroundImage: `url(${props.imagemfundo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>

            <div className="container">
                <div className="header_main">
                    <h1>{props.titulo}</h1>
                </div>
                <div className="ratings">
                    <div className="avaliacao">
                        <h2>AVALIAÇÃO DA RATINGS</h2>
                        <div className="nota">
                            <img src={EstrelaAvaliada} alt="Estrela Avaliacoes" />
                            <p>{props.nota}<span>/10</span></p>
                        </div>
                    </div>
                    <div className="avaliacao">
                        <h2>SUA AVALIAÇÃO</h2>
                        <div className="nota">
                            <a className="cliqueestrela" onClick={clique} href="#!">
                                <img src={estrelaImg} alt="Estrela Avaliar" />
                            </a>
                            <p className='avaliar'>{textoAvaliacao}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-image">
                <div className="image1"><img src={props.imagem1} alt="Imagem 1" /></div>
                <div className="image2"><img src={props.imagem2} alt="Imagem 2" /></div>
            </div>
        </section>
    );
}

export default Main;