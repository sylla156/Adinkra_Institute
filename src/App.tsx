import BackgroundColor from './components/BackgroundColor'
import About from './containers/About'
import Hero from './containers/Hero'

const App = () => {
  return (
    <BackgroundColor>
      <Hero/>
      <About/>
    </BackgroundColor>
  )
}

export default App