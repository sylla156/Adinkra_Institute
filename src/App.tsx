import BackgroundColor from './components/BackgroundColor'
import About from './containers/About'
import Contact from './containers/Contact'
import Hero from './containers/Hero'

const App = () => {
  return (
    <BackgroundColor>
      <Hero/>
      <About/>
      <Contact/>
    </BackgroundColor>
  )
}

export default App