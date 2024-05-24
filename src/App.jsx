import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <section id='Home'>
        <Navbar />
        Home
      </section>
      <section id='About'>About</section>
      <section id='Project'>Project</section>
      <section id='Team'>Team</section>

    </div>
  )
}

export default App
