import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import './index.css'

import { Projeto } from './pages/Projeto'
import { Corrego } from './pages/Corrego'
import { Qualidade } from './pages/Qualidade'
import { Social } from './pages/Social'
import { Iqa } from './pages/Iqa'
import { Metodologia } from './pages/Metodologia'
import { Graficos } from './pages/Graficos'
import { Historico } from './pages/Historico'
import { Atualmente } from './pages/Atualmente'
import { Links } from './pages/Links'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Projeto />} />
      <Route path="/corrego" element={<Corrego />} />
      <Route path="/qualidade" element={<Qualidade />} />
      <Route path="/social" element={<Social />} />
      <Route path="/iqa" element={<Iqa />} />
      <Route path="/metodologia" element={<Metodologia />} />
      <Route path="/graficos" element={<Graficos />} />
      <Route path="/historico" element={<Historico />} />
      <Route path="/atualmente" element={<Atualmente />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
)
