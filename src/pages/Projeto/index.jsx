import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import foz from '../../assets/foz_uberaba.png'

export function Projeto() {

  return (
    <div className="main-page">
      <BurguerMenu />
      <Header page="Nosso projeto" />

      <div className="content">

        <h2 className="title">Introdução</h2>
        <p>O terceiro projeto da disciplina de Química Tecnológica e Ambiental do 5° semestre de Engenharia de Computação consiste na análise da qualidade das águas do rio Pinheiros em diferentes pontos de coleta, sendo estes na ponte Cidade Jardim, foz do córrego Uberaba ou foz do córrego Sapateiro, juntamente do estudo de seus contextos sociais. Estudar a situação das águas desses rios nos permite ter uma dimensão do estado geral desses cursos d’água, compreender o contexto social nos quais estão envolvidos e entender a qualidade do saneamento básico na cidade de um modo geral. Ao entender essas questões mencionadas, como futuros engenheiros, poderemos nos engajar no debate que envolve a questão dos rios e cobrar políticas públicas que sejam adequadas, além de poder argumentar contra possíveis estatísticas falsas que sejam divulgadas.</p>
        <img src={foz} alt="Foz Rio Uberaba" />
        <p className="img-description">Foz do Córrego Uberaba</p>
        <p>Particularmente, este site irá abordar o processo completo da análise das águas a partir do ponto de coleta na foz do córrego Uberaba, passando pelo contexto do córrego, explicação do Índice de Qualidade das Águas (IQA), contexto social, metodologia dos experimentos realizados em laboratório e resultados do IQA e seus parâmetros obtidos. Para iniciarmos o projeto, fizemos a coleta das águas do córrego Uberaba pessoalmente.</p>
      
        <Button page="pinheiros" name="Rio Pinheiros"/>
      </div>
      
    </div>
  )
}
