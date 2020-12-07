import React from "react"
import { Link } from "gatsby"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Modal from "react-modal";
import { ClassNames } from "@emotion/core";




Modal.setAppElement("#___gatsby");

export const query = graphql`
query {
  file(relativePath: {eq: "hayata.jpg"}) {
    id
    childImageSharp {
      fluid(maxWidth: 700) {
        aspectRatio
        base64
        sizes
        src
        srcSet
        srcSetWebp
        srcWebp
      }
    }
  }
}
`

function App(){
  const [modallsOpen,setlsOpen] = React.useState(false);

  return (
    <div className="App">
      <section id="about">
        <div className="about-background">
          <div className="container">
            <div className="part">
              <h2 className="part__title link-about" >About(私について)</h2>
              <p className="part__explain">このサイトをご覧いただきありがとうございます。<br></br>私の名前は<span className="part--bold">早田恭平(はやたきょうへい)</span>と言います。<br></br>ある医学部受験の予備校の個別授業で数学を教えています。</p>
              <p className="part__explain"><span className="part--bold">生徒とのコミュニケーション</span>を大事にしているので真面目なことからくだらないことまでよく話しよくボケを入れます。</p>
              <p className="part__explain">私の授業で心がけていることは<span className="part--bold">参考書や自分で勉強することでは得ることができない問題の解き方や考え方を説明すること</span>で自分の授業でないと聞けない情報を生徒に教えています。</p>
              <p className="part__explain">2019年からHTML、CSS、jQueryの勉強を始めて2020年の3月から株式会社EBMのWEBの部門で働いていまして現在の業務は<span className="part--bold">コーディングがメイン</span>です。</p>
              <p className="part__explain">WEBの世界に入ったばかりで誰か(クライアント)に対して今の自分に何ができるかは分かりませんが<span className="part--bold">ただ仕事をするのではなく自分しかできない技術的な提案やアフターケア</span>ができるようになりたいと思っています。</p>
            </div>
          </div>
          <button className="App__button" onClick={()=> setlsOpen(true)}>私についての続きはここから</button>
          <ClassNames>
            {({ css, cx }) => (
              <Modal 
                isOpen={modallsOpen}
                onRequestClose={()=>setlsOpen(false)}
                overlayClassName={{
                  base: "overlay-base",
                  afterOpen: "overlay-after",
                  beforeClose: "overlay-before"
                }}
                className={{
                  base: "content-base",
                  afterOpen: "content-after",
                  beforeClose: "content-before"
                }}
                closeTimeoutMS={500}
                portalClassName={css`
                  .overlay-base {
                    padding: 1rem;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0);
                    opacity: 0;
                    transition-property: background-color, opacity;
                    transition-duration: 500ms;
                    transition-timing-function: ease-in-out;
                    outline: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }

                  .overlay-after {
                    background-color: rgba(0, 0, 0, 0.8);
                    opacity: 1;
                    height:730px;
                    
                  }

                  .overlay-before {
                    background-color: rgba(0, 0, 0, 0);
                    opacity: 0;
                  }

                  .content-base {
                    position: relative;
                    top: auto;
                    left: auto;
                    right: auto;
                    bottom: auto;
                    margin: 0 auto;
                    border: 0;
                    outline: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 0%;
                    width: 0%;
                    background-color: transparent;
                    transition-property: background-color, width, height;
                    transition-duration: 500ms;
                    transition-timing-function: ease-in-out;
                  }

                  .content-after {
                    width: 80vw;
                    height: auto;
                    padding:10px;
                    background-color: rgba(122, 162, 221, 0.8);
                    font-size:16px;
                    border-radius:15px;
                    margin-top:43px;
                  
                  }

                  .content-before {
                    width: 0%;
                    height: 0%;
                    background-color: transparent;
                  }
                `}
              >
                <button  className="modal" onClick={()=>setlsOpen(false)}>
                  <p className="modal__explain"><span className="modal--bold">プログラミング</span>を勉強しようと思ったのは私の元生徒が2020年から研修医になるのですが開業した時に病院のWEBサイトを作りたいと思ったからです。</p>
                  <p className="modal__explain"><span className="modal--bold">仕事がない時</span>は基本的にプログラミングの勉強をしているのですが現在はJavaScript、React.js、Vue.js、PHPの勉強をしています。<br></br>このサイトはGatsby.jsで作っています。</p>
                  <p className="modal__explain"><span className="modal--bold">ポートフォリオ</span>は元々Wordpressで作ったのですがReactを勉強しているのでReactでもサイトを作りました。</p>
                  <p className="modal__explain"><span className="modal--bold">私の年齢が40歳</span>でプログラミングを始めるのに遅い年齢なのは分かっていますが「自分がやりたい」と思ったことに対してはどこまでも頑張れる性格です。</p>
                  <p className="modal__explain"><span className="modal--bold">独学で学んだ内容や実務で知った知識を忘れない</span>為に情報をwordpressサイトで発信しています</p>
                  <p className="modal__close">閉じる</p>
                </button>
              </Modal>
            )}
          </ClassNames>
        </div>
      </section>
    </div>
  );
}


export default ({data}) => (
  <Layout>
    <section id="first-view">
        <div className="hero">
          <Img className="hero__image" fluid={data.file.childImageSharp.fluid} alt="portfolio用の画像"/>
          <ul className="hero__job">
            <li className="hero__list">Corderと</li>
            <li className="hero__list">予備校講師の仕事をしている</li>
            <li className="hero__list">Kyohei Hayata</li>
          </ul> 
        </div>
        <div className="container">
          <section className="operation">
            <h2 className="operation-site">[私が運営しているサイト]</h2>
            <p className="portfolio"><a className="portfolio__link" href="https://syougaihukutobiyou.com/portfolio/"  target="_blank" rel="noopener noreferrer">WordPressで作ったポートフォリオ</a></p>
            <p className="portfolio"><a className="portfolio__link" href="https://newsite-make.com/task-study/"  target="_blank" rel="noopener noreferrer">2020年度の実務の内容と勉強した内容</a></p>
            <p className="wordpress"><a className="wordpress__link" href="https://newsite-make.com/"  target="_blank" rel="noopener noreferrer">WordPressサイトをはじめて作る人の為の解説サイト</a></p>
            <p className="wordpress"><a className="wordpress__link" href="https://syougaihukutobiyou.com/"  target="_blank" rel="noopener noreferrer">実務で知った知識や仕事に関して情報を発信しているサイト</a></p>
            <p className="wordpress wordpress--margin-bottom"><a className="wordpress__link" href="https://bakkagisaji.com/"  target="_blank" rel="noopener noreferrer">大学受験の数学や受験に関して情報を発信しているサイト</a></p>
            <a href="https://twitter.com/jonio1218"  target="_blank" rel="noopener noreferrer"><img className="twitter" src="/images/twitter.png" alt="早田のTwitter"/></a>
          </section>
        </div>
    </section>
    <App/>
    <section id="skills">
      <div className="skills-background">
        <div className="container">
          <div className="part">
            <h2 className="part__title link-skills">現時点でのSkills</h2>
            <div className="part__skill">
              <p className="part__sub-title">HTML5/SCSS</p>
              <p className="part__explain">SEOを意識したコード、命名規則のBEMを使った後で編集する時に編集が楽なコードを書く事を心がけています。</p>
            </div>
            <div className="skill">
              <p className="part__sub-title">jQuery</p>
              <p className="part__explain">ページに適切なアニメーションをつけるように心がけています。</p>
            </div>
            <div className="skill">
              <p className="part__sub-title">wordpress</p>
              <p className="part__explain">オリジナルテーマの作成やSEO対策の知識があります。<br></br>プラグインを使いすぎるとサイトが重たくなりページの表示速度が遅くなって検索順位に影響するのでプラグインを使いすぎない様に気を付けています。</p>
            </div>
            <div className="skill">
              <p className="part__sub-title">JavaScript</p>
              <p className="part__explain">最初は動画を見ながらミニアプリを作っていましたがなるべく自分で実装するようにして分からない実装内容はネットで情報を探しています。</p>
            </div>
            <div className="skill">
              <p className="part__sub-title">React(Gatsby.js)</p>
              <p className="part__explain">実装内容に関する情報がネットにないのでtechpitで記事を買って勉強しています。<br></br>プラグインでの実装を極力避けてコードで実装できないかを考えています。</p>
            </div>
            <div className="skill">
              <p className="part__sub-title">Vue.js</p>
              <p className="part__explain">ネットで見つけた記事でミニアプリを作ったりTechpitの記事でアプリを作りながら勉強しています。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="other-skill">
      <div className="other-skill-background">
        <div className="container">
          <div className="part">
            <h2 className="part__title link-otherskill">Other Skill</h2>
            <p className="part__sub-title">SEOを意識したブログの記事作り</p>
            <p className="part__explain">wordpressを使ったブログを運営していますがSEOを意識した記事を作ることを心がけています。<br></br>「数がく部」という大学受験の数学の情報を発信するのがメインのサイトを運営しています。<br></br><a href="https://bakkagisaji.com/"  target="_blank" rel="noopener noreferrer">ここから</a>サイトに飛べます。</p>
          </div>
          <a className="contact link-contact" href="https://syougaihukutobiyou.com/portfolio/contact/"  target="_blank" rel="noopener noreferrer">お問い合わせはこちら</a>
        </div>
      </div>
    </section>
  </Layout>
);