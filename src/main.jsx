
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './style.css'
import HeroesApp from './HeroesApp'
BrowserRouter


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>,
  )
