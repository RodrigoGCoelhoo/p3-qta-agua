import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Historico() {

  return (
    <div className="main-page">
      <BurguerMenu />
      <Header page="Histórico da região" />
      
      <div className="content">

        <h2 className="title">Introdução</h2>
        <p>Para podermos entender e compreender melhor o comportamento de cada um desses parâmetros e, por sua vez, o IQA, é interessante analisar o padrão de cada um deles ao longo de um ano inteiro, observando a sua sazonalidade e em que períodos cada um desses parâmetros atinge valores altos ou baixos. Tendo isso em vista, foi analisado esses mesmos parâmetros para o Alto Tietê, no intervalo de 2018 a 2020, de 2 em 2 meses. Após a coleta dos dados, foram obtidos os gráficos a seguir:</p>

        <Button page="metodologia" name="Metodologia"/>
      </div>
    </div>
  )
}
