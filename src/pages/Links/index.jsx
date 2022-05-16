import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'

export function Links() {

  return (
    <div  className="main-page">
      <BurguerMenu />
      <Header page="Links" />
      
      <div className="content">

        <ul>
          <li>http://pnqa.ana.gov.br/indicadores-indice-aguas.aspx</li>
          <li>https://pt.wikipedia.org/wiki/Córrego_Uberaba</li>
          <li>https://cetesb.sp.gov.br/aguas-interiores/wp-content/uploads/sites/12/2017/11/Apêndice-D-Índices-de-Qualidade-das-Águas.pdf </li>
          <li>https://g1.globo.com/sp/sao-paulo/noticia/2022/01/20/projeto-de-revitalizacao-do-rio-pinheiros-entra-na-fase-final-com-melhoria-da-qualidade-da-agua.ghtml </li>
          <li>https://novoriopinheiros.sp.gov.br </li>
        </ul>

      </div>
    </div>
  )
}




