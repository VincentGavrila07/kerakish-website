import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Home from './Components/Home'
import Manfaat from './Components/Manfaat'
import Penggunaan from './Components/Penggunaan'
import BefAf from './Components/BefAf'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Home/>
        <About/>
        <BefAf/>
        <Manfaat/>
        <Penggunaan/>
        <ContactUs/>
      </main>
      <Footer />
    </div>
  )
}

export default App
