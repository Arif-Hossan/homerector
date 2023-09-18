import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Customers from './components/Customers/Customers'
import Footer from './components/Footer/Footer'
import HeaderCarousel from './components/HeaderCarousel/HeaderCarousel'
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'


function App() {


  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <HeaderCarousel></HeaderCarousel>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Customers></Customers>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
