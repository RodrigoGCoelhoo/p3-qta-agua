import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import coliformes from '../../assets/historic/coliformes.svg'
import dbo from '../../assets/historic/dbo.svg'
import fosforo from '../../assets/historic/fosforo.svg'
import iqa from '../../assets/historic/iqa.svg'
import nitrogenio from '../../assets/historic/nitrogenio.svg'
import od from '../../assets/historic/od.svg'
import ph from '../../assets/historic/ph.svg'
import solidos from '../../assets/historic/solidos.svg'
import temperatura from '../../assets/historic/temperatura.svg'
import turbidez from '../../assets/historic/turbidez.svg'

import formula_iqa from '../../assets/formula_iqa.png'
import tabela_iqa from '../../assets/tabela_iqa.png'


export function Historico() {

  return (
    <div className="main-page">
      <BurguerMenu />
      <Header page="Histórico da região" />
      
      <div className="content">

        <h2 className="title">Analisando dados históricos</h2>
        <p>Para podermos entender e compreender melhor o comportamento de cada um desses parâmetros e, por sua vez, o IQA, é interessante analisar o padrão de cada um deles ao longo de um ano inteiro, observando a sua sazonalidade e em que períodos cada um desses parâmetros atinge valores altos ou baixos. Tendo isso em vista, foi analisado esses mesmos parâmetros para o Alto Tietê, no intervalo de 2018 a 2020, de 2 em 2 meses. Após a coleta dos dados, foram obtidos os gráficos a seguir:</p>

        <img src={coliformes} alt="Gráfico histórico de coliformes" />
        <p className="img-description">Gráfico histórico de Coliformes Fecais</p>

        <img src={dbo} alt="Gráfico histórico de DBO" />
        <p className="img-description">Gráfico histórico de DBO</p>

        <img src={fosforo} alt="Gráfico histórico de fósforo" />
        <p className="img-description">Gráfico histórico de Fósforo</p>

        <img src={nitrogenio} alt="Gráfico histórico de nitrogênio" />
        <p className="img-description">Gráfico histórico de Nitrogênio</p>

        <img src={od} alt="Gráfico histórico de oxigênio dissolvido" />
        <p className="img-description">Gráfico histórico de Oxigênio Dissolvido</p>

        <img src={ph} alt="Gráfico histórico de PH" />
        <p className="img-description">Gráfico histórico de PH</p>

        <img src={solidos} alt="Gráfico histórico de solidos" />
        <p className="img-description">Gráfico histórico de Sólidos</p>
        
        <img src={turbidez} alt="Gráfico histórico de turbidez" />
        <p className="img-description">Gráfico histórico de Turbidez</p>

        <img src={temperatura} alt="Gráfico histórico de temperatura" />
        <p className="img-description">Gráfico histórico de Temperatura</p>

        <p className="no-ident">Com a coleta desses dados, podemos calcular o IQA a partir da fórmula a seguir:</p>

        <img src={formula_iqa} alt="Fórmula do IQA" className="small-image"/>
        <p className="img-description">Fórmula do IQA</p>

        <p className="no-ident">onde:</p>

        <ul>
          <li>IQA: Índice de Qualidade das Águas, um número entre 0 e 100</li>
          <li>qi: qualidade do i-ésimo parâmetro, um número entre 0 e 100, obtido da respectiva “curva média de variação de qualidade”, em função de sua concentração ou medida</li>
          <li>wi: peso correspondente ao i-ésimo parâmetro, um número entre 0 e 1, atribuído em função da sua importância para a conformação global de qualidade</li>
          <li>n: número de variáveis que entram no cálculo do IQ</li>
        </ul>

        <p className="no-ident">E, assim, obtemos o seguinte gráfico:</p>

        <img src={iqa} alt="Gráfico histórico de IQA" />
        <p className="img-description">Gráfico histórico de IQA</p>

        <br />
        <p className="no-ident">As classes Péssima-Ótima foram declaradas com base no seguinte parâmetro:</p>

        <img src={tabela_iqa} alt="Tabela de IQAs" className="medium-image"/>
        <p className="img-description">Tabela de classificação de IQAs</p>

        <Button page="atualmente" name="Região hoje em dia"/>
      </div>
    </div>
  )
}
