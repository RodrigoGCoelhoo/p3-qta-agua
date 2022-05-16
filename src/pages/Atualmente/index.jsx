import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import plano_saneamento from '../../assets/plano_saneamento.png'
import rio_pinheiros_poluido from '../../assets/rio_pinheiros_poluido.jpeg'

export function Atualmente() {

  return (
    <div className="main-page">
      <BurguerMenu />
      <Header page="Região hoje em dia" />
      
      <div className="content">

        <h2 className="title">E como está a região atualmente?</h2>

        <img src={rio_pinheiros_poluido} alt="Foto do Rio Pinheiros poluído" />
        <p className="img-description">Foto do Rio Pinheiros poluído</p>

        <p>Saneamento é o conjunto de medidas que visa preservar ou modificar as condições do meio ambiente com a finalidade de prevenir doenças e promover a saúde, melhorar a qualidade de vida da população e a produtividade do indivíduo e facilitar a atividade econômica. No Brasil, porém, a definição do conceito de saneamento é mais vista como sendo os serviços de acesso à água potável, à coleta e ao tratamento dos esgotos.</p>
        <p>No século XX, São Paulo começou a crescer rapidamente, onde a cidade, segundo o IBGE, tinha cerca de 230 mil habitantes em 1900. Já em 2000, a população cresceu em aproximadamente 43,5%. Em decorrência do crescimento populacional, o rio Pinheiros teve então, seu percurso canalizado e retificado, a calha aprofundada e as águas bombeadas rio acima para a recém-construída Represa Billings — a inversão do rio. Contudo, o que já foi um rio repleto de vitalidade e um espaço para lazer, se transformou num lago desfavorável para vida aquática e impróprio até para navegação. Com esse aumento populacional, a poluição do rio Pinheiros se acentuou, sendo necessário interromper o bombeamento para a represa Billings no final dos anos 80. Atualmente, o rio Pinheiros percorre 25 km e recolhe as águas de uma bacia de 271 km², uma área onde vivem 3,3 milhões de pessoas.</p>
        <p>Diante dessa situação, o Governo do Estado de São Paulo iniciou seu programa Novo Rio Pinheiro, com o intuito de revitalizar um dos maiores símbolos da cidade através da ação de diversos órgãos públicos em parceria com a sociedade. A meta deste programa é reduzir o esgoto lançado em seus afluentes, melhorar a qualidade das águas e integrá-lo completamente à cidade até 2022. Por ser um rio urbano, a água não será potável, no entanto, com o projeto de despoluição concluído, haverá a melhora do odor existente, abrigo de vida aquática e, principalmente, a volta da população às suas margens por meio também da recuperação ambiental e a paisagem do seu entorno. A previsão é que mais de 500 mil imóveis estejam conectados à rede de esgoto em SP, evitando que todo esgoto produzido nesses locais chegue até o rio. Em outras palavras, essa expansão do saneamento, que será promovida em conjunto com a Sabesp, vai beneficiar mais de 3 milhões de pessoas que não têm o serviço de coleta atualmente.</p>
        
        <img src={plano_saneamento} alt="Plano de expansão do saneamento de São Paulo" />
        <p className="img-description">Plano de expansão do saneamento de São Paulo</p>

        <p>Hoje em dia, esse programa se encontra ainda em processo, com previsão para término em 2023, mas já com grande melhoria no estado atual do rio, visando atingir a melhoria do DBO abaixo de 30 mg/L.</p>

        <Button page="links" name="Links"/>
      </div>
    </div>
  )
}
