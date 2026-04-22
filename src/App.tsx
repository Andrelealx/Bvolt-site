import './index.css'
import BannerOferta from './components/BannerOferta'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Horarios from './components/Horarios'
import Planos from './components/Planos'
import Depoimentos from './components/Depoimentos'
import Galeria from './components/Galeria'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <BannerOferta />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Horarios />
        <Planos />
        <Depoimentos />
        <Galeria />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
