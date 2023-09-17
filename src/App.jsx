import './App.css'
import About from './components/About/About'
import HeaderCarousel from './components/HeaderCarousel/HeaderCarousel'
// import About from './components/About/About'
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
      {/* <About></About> */}
    </>
  )
}

export default App
