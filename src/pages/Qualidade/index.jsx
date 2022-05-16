import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Qualidade() {

  return (
    <div className="main-page">
      <BurguerMenu />
      <Header page="Qualidade da água" />

      <div className="content">
        
        <h2 className="title">ALTERAR</h2>
        <p>O Ídice de Qualidade das Águas (IQA) foi criado em 1970 nos Estados Unidos. A CETESB (Companhia Ambiental do Estado de São Paulo) passou a usar o índice a partir de 1975, e é atualmente o principal método para determinar a qualidade da água no país.</p>
        <p>O IQA foi desenvolvido com o intuito de avaliar a qualidade da água visando seu uso para o abastecimento público. O IQA é uma compilação de vários parâmetros multiplicados por pesos para chegar em um único índice. Em sua maioria são indicadores de contaminação causada pelo lançamento de esgotos domésticos. O IQA apresenta suas motivações, já que esse índice não analisa vários parâmetros importantes para o abastecimento público, como substâncias tóxicas tais quais metais pesados, pesticidas, por exemplo.</p>
        <p>O índice é composto por nove parâmetros, com seus respectivos pesos (w) que foram determinados em função da sua importância para a conformação global da qualidade da água. Os parâmetros e seus pesos são:</p>

        <ul>
          <li>Oxigênio dissolvido – 0,17;</li>
          <li>Coliformes Termotolerantes – 0,15;</li>
          <li>pH – 0,12;</li>
          <li>Demanda Bioquímica de Oxigênio (DBO5,20) – 0,10;</li>
          <li>Temperatura da água – 0,10;</li>
          <li>Nitrogênio Total – 0,10;</li>
          <li>Fósforo Total – 0,10;</li>
          <li>Turbidez – 0,08;</li>
          <li>Resíduo total – 0,08;</li>
        </ul>

        <Button page="iqa" name="IQA"/>
      </div>

      
    </div>
  )
}

