import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import rio_pinheiros from '../../assets/rio_pinheiros.jpeg'
import rio_pinheiros_antigamente from '../../assets/rio_pinheiros_antigamente.jpeg'


export function Pinheiros() {

  return (
    <div className="main-page">
      <BurguerMenu />
      <Header page="Rio Pinheiros" />

      <div className="content">

        <h2 className="title">Um pouco sobre o Pinheiros</h2>

        <img src={rio_pinheiros_antigamente} alt="Foto do Rio Pinheiros antigamente" />
        <p className="img-description">Foto antiga do Rio Pinheiros</p>

        <p>Não é novidade que a urbanização da cidade de São Paulo ocorreu de modo muito acelerado e completamente desorganizado. O que antes servia para os indígenas como escolha de local de povoamento, hoje é um problema urbano que por décadas ainda parece longe de estar resolvido.  O Rio Pinheiros, um dos principais de São Paulo, hoje é alvo do despejo de esgoto doméstico de centenas de milhares de pessoas, além de inúmeras indústrias que também despejam seu esgoto nele. </p>
        <p>Isso evidencia um forte gargalo na qualidade do saneamento básico na cidade e o estado atual do rio impede que pessoas possam morar em suas margens. O mau odor, a sujeira e as doenças que podem ser transmitidas ao entrar em contato com as águas poluídas do Pinheiros, impossibilitam que qualquer pessoa pense em ocupar suas margens de forma sustentável.</p>
        
        <img src={rio_pinheiros} alt="Foto do Rio Pinheiros" />
        <p className="img-description">Foto atual do Rio Pinheiros</p>

        <p>O córrego Uberaba é um curso de água na cidade de São Paulo que deságua no Rio Pinheiros. Sua nascente é próxima da Avenida Jabaquara, e corre canalizado por baixo da cidade. A topografia do rio foi mudada completamente com sua canalização. Atualmente, assim como muitos afluentes do Rio Pinheiros, o córrego Uberaba está poluído, e sem condições de uso para o abastecimento público.</p>
        
        <Button page="qualidade" name="Qualidade da água"/>
      </div>
      
    </div>
  )
}
