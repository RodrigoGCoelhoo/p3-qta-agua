import './styles.css'

import { BurguerMenu } from '../../components/BurguerMenu'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Iqa() {

  return (
    <div className="main-page">
      <BurguerMenu />
      <Header page="IQA" />

      <div className="content">
        
        <h2 className="title">Teoria e interpretação de seus parâmetros</h2>
        <p>Já foi visto aqui como o IQA surgiu e qual o seu histórico. Porém, além disso, para compreender a sua utilização e eficácia para determinar a qualidade das águas, é necessário analisar cada um dos 9 parâmetros utilizados para o cálculo final do IQA:</p>
        
        <br></br>
        <h3>Oxigênio Dissolvido (OD)</h3>
        <p>O oxigênio dissolvido é vital para a preservação da vida aquática, já que vários organismos (ex.: peixes) precisam de oxigênio para respirar. As águas poluídas por esgotos apresentam baixa concentração de oxigênio dissolvido pois ele é consumido no processo de decomposição da matéria orgânica. Por outro lado, as águas limpas apresentam concentrações de oxigênio dissolvido mais elevadas, geralmente superiores a 5mg/L, exceto se houverem condições naturais que causem baixos valores deste parâmetro. </p>
        <p>As águas eutrofizadas (ricas em nutrientes) podem apresentar concentrações de oxigênio superiores a 10 mg/L, situação conhecida como supersaturação. Isso ocorre principalmente em lagos e represas em que o excessivo crescimento das algas faz com que durante o dia, devido a fotossíntese, os valores de oxigênio fiquem mais elevados. Por outro lado, durante a noite não ocorre a fotossíntese, e a respiração dos organismos faz com que as concentrações de oxigênio diminuam bastante, podendo causar mortandades de peixes.</p>
        
        <br></br>
        <h3>Coliformes Fecais</h3>
        <p>As bactérias coliformes termotolerantes ocorrem no trato intestinal de animais de sangue quente e são indicadoras de poluição por esgotos domésticos. Elas não são patogênicas (ou seja, não causam doenças),  mas sua presença em grandes números indicam a possibilidade da existência de microrganismos patogênicos que são responsáveis pela transmissão de doenças de veiculação hídrica (ex.: desinteria bacilar, febre tifoide, cólera).</p>
      
        <br></br>
        <h3>Potencial Hidrogênico (pH)</h3>
        <p>O pH afeta o metabolismo de várias espécies aquáticas. A Resolução CONAMA 357 estabelece que para a proteção da vida aquática o pH deve estar entre 6 e 9. Alterações nos valores de pH também podem aumentar o efeito de substâncias químicas que são tóxicas para os organismos aquáticos, tais como os metais pesados.</p>

        <br></br>
        <h3>Demanda Bioquímica de Oxigênio (DBO 5,20)</h3>
        <p>A Demanda Bioquímica de Oxigênio representa a quantidade de oxigênio necessária para oxidar a matéria orgânica presente na água através da decomposição microbiana aeróbia. A DBO5,20 é a quantidade de oxigênio consumido durante 5 dias em uma temperatura de 20°C.</p>
        <p>Valores altos de DBO5,20, num corpo d'água são provocados geralmente causados pelo lançamento de cargas orgânicas, principalmente esgotos domésticos. A ocorrência de altos valores deste parâmetro causa uma diminuição dos valores de oxigênio dissolvido (OD) na água, o que pode provocar mortandades de peixes e eliminação de outros organismos aquáticos.</p>

        <br></br>
        <h3>Temperatura da Água</h3>
        <p>A temperatura influência vários parâmetros físico-químicos da água, tais como a tensão superficial e a viscosidade. Os organismos aquáticos são afetados por temperaturas fora de seus limites de tolerância térmica, o que causa impactos sobre seu crescimento e reprodução.</p>
        <p>Todos os corpos d’água apresentam variações de temperatura ao longo do dia e das estações do ano. No entanto, o lançamento de efluentes com altas temperaturas pode causar impacto significativo nos corpos d’água.</p>

        <br></br>
        <h3>Nitrogênio Total</h3>
        <p>Nos corpos d’água o nitrogênio pode ocorrer nas formas de nitrogênio orgânico, amoniacal, nitrito e nitrato. Os nitratos são tóxicos aos seres humanos, e em altas concentrações causa uma doença chamada metahemoglobinemia infantil, que é letal para crianças. </p>
        <p>Pelo fato de os compostos de nitrogênio serem nutrientes nos processos biológicos, seu lançamento em grandes quantidades nos corpos d’água, junto com outros nutrientes tais como o fósforo, causa um crescimento excessivo das algas, processo conhecido como eutrofização, o que pode prejudicar o abastecimento público, a recreação e a preservação da vida aquática.</p>
        <p>As fontes de nitrogênio para os corpos d’água são variadas, sendo uma das principais o lançamento de esgotos sanitários e efluentes industriais. Em áreas agrícolas, o escoamento da água das chuvas em solos que receberam fertilizantes também é uma fonte de nitrogênio, assim como a drenagem de águas pluviais em áreas urbanas.</p>
        <p>Também ocorre a fixação biológica do nitrogênio atmosférico pelas algas e bactérias. Além disso, outros processos, tais como a deposição atmosférica pelas águas das chuvas também causam aporte de nitrogênio aos corpos d’água.</p>

        <br></br>
        <h3>Fósforo Total</h3>
        <p>Do mesmo modo que o nitrogênio, o fósforo é um importante nutriente para os processos biológicos e seu excesso pode causar a eutrofização das águas. Para conhecer mais sobre eutrofização, veja o item sobre o Índice de Estado Trófico. </p>
        <p>Entre as fontes de fósforo destacam-se os esgotos domésticos, pela presença dos detergentes superfosfatados e da própria matéria fecal. A drenagem pluvial de áreas agrícolas e urbanas também é uma fonte significativa de fósforo para os corpos d’água. Entre os efluentes industriais destacam-se os das indústrias de fertilizantes, alimentícias, laticínios, frigoríficos e abatedouros.</p>

        <br></br>
        <h3>Turbidez</h3>
        <p>A turbidez indica o grau de atenuação que um feixe de luz sofre ao atravessar a água. Esta atenuação ocorre pela absorção e espalhamento da luz causada pelos sólidos em suspensão (silte, areia, argila, algas, detritos etc.). </p>
        <p>A principal fonte de turbidez é a erosão dos solos, quando na época das chuvas, as águas pluviais trazem uma quantidade significativa de material sólido para os corpos d’água. </p>
        <p>Atividades de mineração, assim como o lançamento de esgotos e de efluentes industriais, também são fontes importantes que causam uma elevação da turbidez das águas. </p>
        <p>O aumento da turbidez faz com que uma quantidade maior de produtos químicos (ex.: coagulantes) sejam utilizados nas estações de tratamento de águas, aumentando os custos de tratamento. Além disso, a alta turbidez também afeta a preservação dos organismos aquáticos, o uso industrial e as atividades de recreação.</p>
        
        <br></br>
        <h3>Sólidos Totais</h3>
        <p>O resíduo total é a matéria que permanece após a evaporação, secagem ou calcinação da amostra de água durante um determinado tempo e temperatura. </p>
        <p>Quando os resíduos sólidos se depositam nos leitos dos corpos d’água podem causar seu assoreamento, que gera problemas para a navegação e pode aumentar o risco de enchentes. Além disso podem causar danos à vida aquática pois ao se depositarem no leito eles destroem os organismos que vivem nos sedimentos e servem de alimento para outros organismos, além de danificar os locais de desova de peixes.</p>


        <Button page="metodologia" name="Metodologia"/>
      </div>
      
    </div>
  )
}
