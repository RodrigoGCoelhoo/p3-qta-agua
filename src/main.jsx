import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


import './index.css'

import { Projeto } from './pages/Projeto'
import { Pinheiros } from './pages/Pinheiros'
import { Qualidade } from './pages/Qualidade'
import { Iqa } from './pages/Iqa'
import { Metodologia } from './pages/Metodologia'
import { Historico } from './pages/Historico'
import { Atualmente } from './pages/Atualmente'
import { Links } from './pages/Links'

import { ScrollToTop } from './components/ScrollToTop'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Projeto />} />
        <Route path="pinheiros" element={<Pinheiros />} />
        <Route path="qualidade" element={<Qualidade />} />
        <Route path="iqa" element={<Iqa />} />
        <Route path="metodologia" element={<Metodologia />} />
        <Route path="historico" element={<Historico />} />
        <Route path="atualmente" element={<Atualmente />} />
        <Route path="links" element={<Links />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
