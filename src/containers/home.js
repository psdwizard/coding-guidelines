import React from 'react'
import { HashLink } from 'react-router-hash-link'

import '../stylesheets/main.scss'
import cssRules from '../content/css-rules'
import cssStyeDeclaration from '../content/css-declaration-order'
import htmlRules from '../content/html-rules'
import { copyStringToClipboard, slugify } from '../common/utils'

function CategoryHash(props) {
  return (
    <HashLink 
      to={`#${props.to}`} 
      className={'hash hash--lg'}
    >
      #
    </HashLink>
  )
}

function RuleIteration(props) {
  const copyUrl = hash => {
    const baseUrl = `https://psdwizard.github.io/coding-guidelines/#/`
    copyStringToClipboard(`${baseUrl}#${hash}`)
  }

  return (
    <React.Fragment>
      {props.arr.map((item, i) => (
        <div 
          key={i} 
          id={slugify(item.summary)}
          className="section"
        >
          <div className="base-width section-flex">
            <div className="rule hash-parent">
              <span>
                {item.rule} 
                <span>
                  &nbsp;
                  <HashLink 
                    to={`#${slugify(item.summary)}`} 
                    className="hash hash--sm"
                    onClick={() => copyUrl(slugify(item.summary))}
                  >
                    #
                  </HashLink>
                </span>
              </span>
            </div>
            <div className="sample">
              {item.example}
            </div>
          </div>
        </div>		
      ))}
    </React.Fragment>
  )
}

function Home() {    
  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className="container">
      <div className="back-to-top" onClick={scrollToTop}>
        <img src={require('../assets/images/up-caret.svg')} className="caret" alt="Up caret" width="25" />
        <img src={require('../assets/images/nyan.png')} className="cat" alt="Fullstack HQ mascot" />
      </div>
      <div id="summary" className="section category hash-parent">
        <span className="base-width">
          Summary
          <CategoryHash to="summary"/>
        </span>        
      </div>
      <div className="section">
        <ul className="base-width summary-list rule-monocol">
          <li>
            <HashLink to="#golden-rule">Golden Rule: Every line of code should appear to be written by a single person</HashLink>
          </li>
          <li>
            <HashLink to="#silver-rule">Silver Rule: Special client requests supercede any of the rules below.</HashLink>
          </li>
          <li>
            <HashLink to="#css-rules">CSS Rules:</HashLink>
            <ul>
              {cssRules.map((item, i) => 
                <li key={i}>
                  <HashLink to={`#${slugify(item.summary)}`}>
                    {item.summary}
                  </HashLink>
                </li>
              )}
            </ul>
          </li>
          <li>
            <HashLink to="#html-rules">HTML Rules: </HashLink>
            <ul>
              {htmlRules.map((item, i) => 
                <li key={i}>
                  <HashLink to={`#${slugify(item.summary)}`}>
                    {item.summary}
                  </HashLink>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
      
      <div id="golden-rule" className="section category hash-parent">
        <span className="base-width">
          Golden Rule
          <CategoryHash to="golden-rule"/>
        </span>
      </div>
      <div className="section">
        <div className="base-width section-flex">
          <div className="rule">
            Enforce these agreed upon guidelines at all times. Small or large, call out what's incorrect. This applies for everyone, project members and leaders alike.
          </div>
          <div className="sample hljs">
            Every line of code should appear to be written by a single person, no matter the number of contributors.
          </div>
        </div>
      </div>

      <div id="silver-rule" className="section category hash-parent">
        <span className="base-width">
          Silver Rule
          <CategoryHash to="silver-rule"/>
        </span>
      </div>
      <div className="section">
        <div className="base-width section-flex">
          <div className="rule">
            Special client requests supercede any of the rules below.
          </div>
          <div className="sample hljs">
            This is held true for all and any rule types.
          </div>
        </div>
      </div>

      <div id="css-rules" className="section category hash-parent">
        <span className="base-width">
          CSS Rules
          <CategoryHash to="css-rules"/>
        </span>
      </div>

      <RuleIteration arr={cssRules} />

      <div id="declaration-order" className="section category hash-parent">
        <span className="base-width">
          CSS Style Declaration Ideal Order
          <CategoryHash to="declaration-order" />
        </span>        
      </div>
      <div className="section rule-monocol">
        <div className="base-width">
          {cssStyeDeclaration}
        </div>
      </div>

      <div id="html-rules" className="section category hash-parent">
        <span className="base-width">
          HTML Rules
          <CategoryHash to="html-rules" />
        </span>        
      </div>
      
      <RuleIteration arr={htmlRules} />
    </div>
  )
}

export default Home