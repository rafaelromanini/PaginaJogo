import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import RagnarokCapa from '../src/assets/SVG/RagnarokCapa.svg'
import Kratos from '../src/assets/SVG/Kratos.svg'
import FundoKratos from './assets/SVG/RagnarokCapa.svg'
import Sobre from './Components/About'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Main titulo="GOD OF WAR: RAGNARÖK" nota={9.6} imagemfundo={FundoKratos} imagem1 = {RagnarokCapa} imagem2={Kratos} />
      <Sobre descricao_topico='Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.'/>
      <Footer></Footer>
    </>
  )
}

export default App
