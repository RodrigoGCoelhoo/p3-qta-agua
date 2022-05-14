import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'

export function Historico() {

  return (
    <div>
      <BurguerMenu />
      <Header page="Histórico da região" />
      <img src="https://avatars.githubusercontent.com/u/62613979?v=4" alt="Henriquilin" />
      <h3>O brabo</h3>
    </div>
  )
}
