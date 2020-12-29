import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import ChapterTitle from './ChapterTitle.js'
import ChapterContent from './ChapterContent.js'
import Title from './Title.js'
import Header from './Header.js'
import story from './story.js'
//import Chapter01 from './Chapter01.js'

import { ReactComponent as Image1 } from './images/klemen_1.svg'
import { ReactComponent as Image2 } from './images/klemen_2.svg'
import { ReactComponent as Image3 } from './images/klemen_3.svg'
import { ReactComponent as Image4 } from './images/klemen_4.svg'
import { ReactComponent as Image5 } from './images/klemen_5.svg'
import { ReactComponent as Image6 } from './images/klemen_6.svg'
import { ReactComponent as Image7 } from './images/klemen_7.svg'
import { ReactComponent as Image8 } from './images/klemen_8.svg'


const GlobalStyle = createGlobalStyle`
  :root {
    --text: #444444;
    --secondary: #002B55;
    --highlight: #80C565;
  }
  html {
    width: 100vw;
    overflow-x: hidden;

  }
  body {
    background: var(--secondary);
    position: relative;
    width: 100vw;
    height: fit-content;
  }
`
const MiddleBackground = styled.div`
  width: fit-content;
  height: 100%;
  margin: auto;
  background: white;

`
const StyledImage = styled.div`
    margin: auto;
`
const Higlight = styled.span`
  color: var(--secondary);
`
const Spacer = styled.div`
  height: 70vh;
`

function App(props) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Spacer />
      <MiddleBackground>
        {/*}<Chapter01 lang={'slo'}/>
        {*/}
        <Title>
          {story.SLO.titles[0]}
        </Title>
        <StyledImage>
          <Image1  style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
        </StyledImage>
        <ChapterTitle>
          {story.SLO.titles[1]}
        </ChapterTitle>
        <StyledImage>
          <Image2 style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
        </StyledImage>
        <ChapterContent>
          Ko sem bil mali skuštranec, nekaj let star, sem na zasnežen poznonovembski dan v izložbi pred Sparom videl nekaj neverjetno vznemirljivega. Videl sem rumene robotke iz legic. <br/>To je bil set s programirljivo enoto. Domišljija mi je nemudoma prevzela vse vizualne kapacitete. Videl sem že kako bom naredil svojega robota, svoj avto, potoval na druge planete, rešil svet pred invazijo modrih nezemljanov. Neskončno možnosti. <br/><br/>Bližal se je že Miklavž in seveda sem dodal te legice kot edino stvar na svoj seznam želj. Šah mat, Miklavž &#128540;. In tako se je začelo.'
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[2]}
        </ChapterTitle>
        <Image3  style={{marginLeft: 'auto', marginRight: '30%', display: 'block'}}/>
        <ChapterContent>
          Več let kasneje, polnih hroščkastih robotkov iz legic, polnih elektronskih setov za otroke, polnih naskrivaj razstavljenih in nespretno za silo nazaj sestavljenih radijev, televizij in ostale tehnike, ki so si je starši želeli delujoče, se je pri uri likovne vzgoje na mojem super kul MP4 playerju znašel komad od U2 - Beautiful Day. <br/><br/>Naježile so se mi kocine na rokah. To je to. To je glasba, ki premika gore. Takrat sem začutil, da bom roker (ja, ta komad se mi je zdel skoraj kot hard rock). Poprijel sem za materino kitaro in iz nje vsak dan izvabljal neposlušljiv hrup. Prsti so postali spretnejši, možgančki hitrejši, budget pa je ostal blizu nič. Vsaķič, ko nekaj hočem, se bogsigavedizakaj, probam to narediti sam. Ampak ojačevalce in efektov še nisem znal. Kaj storiti? <br/><br/>Vpisal sem se na srednjo elektrotehniško, Vegovo. 
        <Image4  style={{marginLeft: '20%', marginRight: 'auto', display: 'block'}}/>
          <br/><br/>Bil sem poln upanja, da bom po prvih dneh že štromarski genij. Kmalu sem spoznal, da temu ne bo tako.<br/><br/>Tam me niso naučili delati ojačevalcev in efektov. So me pa naučili spajkati, brati datasheete in osnovne koncepte. Ravno dovolj, da sem se lahko učenja lotil sam. Naredil sem 100 vatne ojačevalnike, ojačevalnike v piksnah od barve, škatlicah od bombonov, iz starih radijev, mini vgradljive ojačevalce, vglavnem cel kup ojačevalcev, pa sintesizerje, binarne ure, arduino shielde ... Ampak kaj pa roboti? Kaj pa vesoljske ladje? Procesorji? Ne tega pa nisem znal.
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[3]}
        </ChapterTitle>
    <ChapterContent>
      Zdi se, da so me v življenju naključni nepovezani trenutki usmerjali na pot programiranja.\n\nTako je v četrtem letniku, je prfesor vprašal, če bi se kdo prijavil na tekmovanje v programirjanju mikrokrmilnikov. Pogledal sem levo, vsi so povešali pogled. Pogledal sem še desno in nazaj. Isto. Pogledal sem kolega na levi, in je nesigurno skomignil. Pa sva se javila. Z neverjetnimi izkušnjami ene dvajsetih vrstic v c-ju in in brez plana. Pa je šlo. Poprosil sem prijatelja z računalniške smeri, če bi mi razkril svet te čudežne obrti. Tako se je tisto popoldne za mizo v guinnessu moje življenje spremenilo. Pokazal mi je osnove c-ja, in že sem prižigal lučke, bral senzorje in knofke, pisal driverje za zaslončke in premikal tuljavice. 
      <Image5 style={{marginLeft: '30%', marginRight: 'auto'}}/><br/>
      S sošocem sva si naredila svojo plošcico s krmilnikom, si napisala knjižnjice, prešpricala vse možne ure sociologije in se odpravila na tekmovanje. Bila sva druga. Ali pa tretja. Ne vem, in ne da se mi iskati plakete. Vsekakor pa nama je precej uspelo. Začutil sem, da ja. Programiranje je to.
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[4]}
        </ChapterTitle>
        <ChapterContent>
      Vseeno sem se vpisal na Eletrotehniško fakulteto. Ne vem zakaj. Verjetno se mi je zdela edina logična poteza. Edini predmet, ki sem ga kdajkoli dobil 10 je bil programiranje 1, kjer smo imeli osnove web developmenta... to se mi zdi, da pove nekaj. \n\n Po prvem letniku, po praksi v kolektorju, mi je mentor predlagal, da naj pošljem prošnjo v Kolektor Idrium. To je bila precej kul skupina študentov, kjer smo izdelovali naprave, za notranjo uporabo. Večinoma so bili to zaganjalniki motorjev, merilne naprave, krmilniki za to in ono. Ampak kmalu sem se začel dolgočasiti. Rabil sem nekaj več. Svoje naprave sem rabil bolj ... žive.',
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[5]}
        </ChapterTitle>
        <Image6 style={{marginLeft: '30%', marginRight: 'auto'}}/>
        <ChapterContent>
          Potem pa je končno na vrsto prišel precej kul projekt, s super dogočasnim imenom: "Varilni izvor inverterski", sam sem ga poimenoval "RoboVarilc2000".      Šlo je za mašino s serijo pnevmatskih ventilov in dveh varilnih glav, ki so se prožili po sekvenci ki jo je nastavil uporabnik na touch panelu. <br/><br/>      Avtomatizirana mašina, GUI, kako bi lahko ne prosil, če smem prevzeti ta projekt? Tresočega glasu sem rekel: "Jurko. A bi lahko tega jaz prevzel?". "Lahko," je rekel "Ampak zna biti veliko dela." Končno. Končno nekaj kul. Zakopal sem se. Nadobudno sem se lotil na tem krmilniku iz zgodnjih 2000 poustvariti Material design, ki je bil takrat all the rage, seveda more moja mašina lepo izgledati. <br/><br/> Stvar mi je uspela. Robot? Ja. Kul? Ja. V prototipni delavnici še danes veselo piha in vari.
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[6]}
        </ChapterTitle>
        <ChapterContent>
        <Image7 style={{marginLeft: '30%', marginRight: 'auto'}}/>
  Takrat mi je končno dokončno kapnilo, da če hočem delati res kul stvari, je moja najboljša možnost programiranje. Tako sem nekaj mesecev kasneje nervozen  poslal prošnjo v Kolektor Vision, kjer se ukvarjajo z robotskim vidom za industrijo. <br/><br/>Tam sem se učil procesiranja slik, razmišljanja, če sem res pomislil na vse edge case. Ugotovil sem da je Linux precej fajn, da mi je VIM všeč in da je C++ grozen za uporabo. Na faksu je tudi postajalo bolj zanimivo. Kjer se je le dalo sem izbiral projekte bolj softwarske narave, kot so barvanje črnobelih slik z nevronskimi mrežami, risanje VR grafov, segmentacijo elementov, kul stvari.
        </ChapterContent>
        <ChapterTitle>
          {story.SLO.titles[7]}
        </ChapterTitle>
        <ChapterContent>
  Svojo študentsko službo sem v iskanju finančne neodvisnosti in denarja za vsaj občasno pijačo s kolegi zamenjal za programerja v videoprodukcijski hiši. Tu so mi pustili, da si sam izbiram tehnologije, ki jih bom uporabljal. <br/><br/>Vedel sem že, da se hočem lotiti bolj web tehnologij, da hočem imeti več opravka z grafičnimi vmesniki, in da hočem, da se moji programčki pogovarjajo in delujejo v harmoniji med sabo in z ostalim svetom. Tu sem napisal svoje prve frontende v Reactu, svoje prve serverčke v Nodu, avtomatiziral snemanje precej produkcij, napisal in uporabljal APIje, releasal prve internetne strani in ogromno drugih drobnarij. Sedaj lahko moje pridne delavce najdete živeče polno integrirane v praktično vseh VPK produkcijah.
        </ChapterContent>
        <Image8 style={{marginLeft: '30%', marginRight: 'auto'}}/>
        <ChapterTitle>
          {story.SLO.titles[8]}
        </ChapterTitle>
        <ChapterContent>
          Sedaj pa si želim naprej. <br/><br/>In naprej ne morem sam. Okoli sebe rabim druge ustvarjalce, druge ljudi, ki konceptom podarjajo življenja in smisel, od katerih lahko pobiram dobre prakse, učinkovite pristope, izkušnje in znanje. Nekaj časa je to šlo z branjem knjig in člankov predlaganih na hacker news, sedaj pa se mi zdi da se je moj napredek resno upočasnil, in nisem take vrste človek, ki bi lahko to mirno gledal.  <br/><br/>Kar lahko ponudim v zameno je ogromno entuziazma, večji del svojega življenja in svoje omejene izkušnje.  <br/><br/>Kaj praviš? Bi lahko bil del naslednjega poglavja?
        </ChapterContent>
      </MiddleBackground>
    </div>
    
  )
}

export default App
