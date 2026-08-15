import Navbar from './componements/Navbar'
import Hero from './componements/Hero'
import Solution from './componements/Solution'
import BenefitsBanner from './componements/BenefitsBanner'
import Journey from './componements/Journey'
import Backoffice from './componements/Backoffice'
import Pricing from './componements/Pricing'
import GameCatalogue from './componements/GameCatalogue'
import Stats from './componements/Stats'
import CtaBanner from './componements/CtaBanner'
import Footer from './componements/Footer'
import Features from './componements/Features'
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Solution />
        <Journey />
        <BenefitsBanner />
        <Backoffice /> 
        <Features />
        <Pricing /> 
        <GameCatalogue />
        <Stats />
        <CtaBanner /> 
      </main>
      <Footer />
    </div>
  )
}

export default App
