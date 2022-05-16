import { React } from 'react'
import './styles.css'

import { slide as Menu } from 'react-burger-menu'

export function BurguerMenu(){

  return(
    <Menu>
      <a id="projeto" className="menu-item" href="/">Nosso projeto</a>
      <a id="pinheiros" className="menu-item" href="/pinheiros">Rio Pinheiros</a>
      <a id="qualidade" className="menu-item" href="/qualidade">Qualidade da água</a>
      <a id="iqa" className="menu-item" href="/iqa">IQA</a>
      <a id="metodologia" className="menu-item" href="/metodologia">Metodologia</a>
      <a id="historico" className="menu-item" href="/historico">Análise histórica</a>
      <a id="atualmente" className="menu-item" href="/atualmente">Região hoje em dia</a>
      <a id="links" className="menu-item" href="/links">Links</a>
    </Menu>
  )
}