import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import Reacoes from '../../assets/reacoes.jpeg'
import GrafFosforo from '../../assets/graf_fosforo.png'
import GrafTurbidez from '../../assets/graf_turbidez.jpeg'

import coliformes from '../../assets/results/coliformes.png'
import dbo from '../../assets/results/dbo.png'
import fosforo from '../../assets/results/fosforo.png'
import nitrogenio from '../../assets/results/nitrogenio.png'
import od from '../../assets/results/od.png'
import ph from '../../assets/results/ph.png'
import residuo from '../../assets/results/residuo.png'
import temperatura from '../../assets/results/temperatura.png'
import turbidez from '../../assets/results/turbidez.png'

import pk_lab from '../../assets/pk_lab.png'

export function Metodologia() {

  return (
    <div className="main-page">
      <BurguerMenu />
      <Header page="Metodologia" />

      <div className="content">

        <h2 className="title">Laboratório</h2>
        <p>Para determinar alguns parâmetros para o cálculo do IQA apenas a coleta da água não é o suficiente. Para determinar o Nitrogênio Total, Fósforo Total, DBO, Sólidos Totais e Turbidez, precisamos ir ao laboratório e realizar os experimentos necessários.</p>

        <img src={pk_lab} alt="Foto do Rio Pinheiros" className="vertical-photo"/>
        <p className="img-description">Paulo Kim no laboratório</p>

        <h3>Nitrogênio Amoniacal e Orgânico</h3>
        <p>Tendo em vista pesquisas realizadas que comprovam que as formas de nitrogênio que mais contribuem para a concentração de nitrogênio nas amostras são a amoniacal e orgânica, foram realizados experimentos.</p>
        <p>Para encontrar a concentração final de Nitrogênio que queríamos, foi necessário realizar um balanceamento de acordo com a quantidade final de H+ utilizada para titular uma solução básica após 4 reações químicas. Essas reações são as seguintes: </p>
        <img src={Reacoes} alt="Reações" />
        <p className="img-description">Reações de transformação do nitrogênio</p>
        <p>Logo, após a adição necessária de H2SO4, podemos determinar quantos íons H+ foram utilizados para realizar a titulação, temos a quantidade, em mols, desse componente e, por meio do balanceamento entre as 4 reações, podemos encontrar, no fim, a quantidade de Nitrogênio na amostra, já que temos a mesma quantidade de mols de OH- e, na reação acima, a mesma quantidade de NH3 e, na acima, a mesma quantidade de mols de NH4+. </p>

        <br />
        <h3>Demanda Bioquímica de Oxigênio (DBO)</h3>
        <p>Para determinar a DBO na amostra, utilizamos duas amostras diluídas em 25x e 50x, sendo estas deixadas em repouso por 5 dias. O repouso é necessário para que haja tempo suficiente para que o oxigênio seja consumido pelos microrganismos presentes na água para as oxidações. </p>
        <p>Com essas soluções diluídas, utilizamos a seguinte fórmula para encontrar o DBO5,20 de cada amostra: fazemos a quantidade de ODinicial – Opfinal, e multiplicamos pelo fator de diluição da amostra. Com esses dois valores em mão, basta realizarmos a média entre os valores e obtemos o valor final de DBO5,20 da amostra.</p>

        <br />
        <h3>Determinação de Fósforo em Água</h3>
        <p>Para conseguirmos determinar a quantidade de fósforo em água, primeiro precisamos com que o ânion fosfato reaja com um composto de molibdato, gerando o complexo fosfato molibdênio hexavalente incolor. Posteriormente, esse complexo é reduzido a sua forma pentavalente azul através de um agente redutor em meio ácido, formando então o azul de molibdênio. Tendo o azul de molibdênio, somos capazes de quantificar o fósforo presente por meio de um espectrofotômetro e sua comparação com uma curva padronizada. A metodologia para determinar a quantidade de fósforo na água consiste em duas etapas. A primeira delas, chamada digestão, envolve a obtenção do azul de molibdênio. Através da hidrolise da amostra, na qual aquecemos a amostra com ácido,  obtemos o complexo fosfato molibdênio hexavalente incolor. Após isso esperamos ela esfriar até a temperatura ambiente e neutralizamos a solução com ácido ascórbico, obtendo o azul de molibdênio. Tendo o azul de molibdênio partimos para a segunda etapa que é a quantificação do fósforo através do espectrofotômetro. Para isso precisamos esperar por 5 minutos para que a reação anterior possa acontecer na quantidade necessária para termos uma quantidade suficiente de fósforo. Assim fizemos a medida da   absorbância da amostra para um comprimento de onda de 870 nm e comparamos o resultado obtido com o da curva padrão para obter a concentração de fósforo em água em mg/L.</p>
        <img src={GrafFosforo} alt="Gráfico de fósforo" className="medium-image"/>
        <p className="img-description">Gráfico de Concentração de Fósforo X Absorbância</p>

        <br />
        <h3>Determinação de Sólidos Totais</h3>
        <p>A metodologia para a obtenção dos sólidos totais presentes na amostra é um tanto simples. Precisamos basicamente evaporar toda a água da amostra, pesar o que sobrou e depois comparar o peso com o volume de água inicial. Para isso precisamos primeiramente aquecer o nosso béquer na estufa durante 10 minutos para evaporar qualquer tipo de umidade que pudesse interferir nos nossos cálculos. Após isso deixamos o béquer esfriar à temperatura ambiente para poder pesá-lo sem causar qualquer interferência na balança. Tendo pesado o béquer vazio, colocamos 50ml da nossa amostra e a evaporamos em uma chapa de aquecimento. Após isso novamente esperamos o béquer esfriar à temperatura ambiente e pesamos o conteúdo. Com esses dados em mão simplesmente subtraímos o peso do béquer vazio do peso béquer com os sólidos e dividimos pelo volume da amostra, obtendo os sólidos totais em mg/L.</p>
        
        <br />
        <h3>Determinação da Turbidez</h3>
        <p>Para determinarmos a turbidez da água utilizamos novamente o espectrofotômetro, dessa vez medindo a absorbância da amostra para um comprimento de onda de 600 nm. Com a medida obtida comparamos esse resultado com uma curva experimental para obter o valor em NTU da turbidez da água.</p>
        <img src={GrafTurbidez} alt="Gráfico de turbidez" className="medium-image"/>
        <p className="img-description">Gráfico de Turbidez X Absorbância</p>

        <p>Após a realização desses experimentos, obtivemos os seguintes valores para cada parâmetro:</p>
        
        <div className="table">

          <div>
            <img className="table-image" src={coliformes} alt="Gráfico de coliformes" />
            <p className="img-description">Gráfico de Coliformes Fecais</p>
          </div>

          <div>
            <img className="table-image" src={dbo} alt="Gráfico de coliformes" />
            <p className="img-description">Gráfico de DBO</p>
          </div>

          <div>
            <img className="table-image" src={fosforo} alt="Gráfico de coliformes" />
            <p className="img-description">Gráfico de Fósforo</p>
          </div>

          <div>
            <img className="table-image" src={nitrogenio} alt="Gráfico de coliformes" />
            <p className="img-description">Gráfico de Nitrogênio</p>
          </div>

          <div>
            <img className="table-image" src={od} alt="Gráfico de coliformes" />
            <p className="img-description">Gráfico de Oxigênio Dissolvido</p>
          </div>

          <div>
            <img className="table-image" src={ph} alt="Gráfico de coliformes" />
            <p className="img-description">Gráfico de PH</p>
          </div>

          <div>
            <img className="table-image" src={residuo} alt="Gráfico de coliformes" />
            <p className="img-description">Gráfico de Resíduos</p>
          </div>

          <div>
            <img className="table-image" src={temperatura} alt="Gráfico de coliformes" />
            <p className="img-description">Gráfico de Temperatura</p>
          </div>

          <div>
            <img className="table-image" src={turbidez} alt="Gráfico de coliformes" />
            <p className="img-description">Gráfico de Turbidez</p>
          </div>
        </div>

        <Button page="historico" name="Análise histórica"/>
      </div>
      
    </div>
  )
}
