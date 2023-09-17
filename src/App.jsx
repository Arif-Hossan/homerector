import './App.css'
import About from './components/About/About'
import HeaderCarousel from './components/HeaderCarousel/HeaderCarousel'
// import About from './components/About/About'
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar'


function App() {
  

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <HeaderCarousel></HeaderCarousel>
      <About></About>
      {/* <About></About> */}
    </>
  )
}

export default App
