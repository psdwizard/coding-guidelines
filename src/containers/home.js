import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

import stickybits from 'stickybits'

import '../stylesheets/main.scss'
import cssRules from '../content/css-rules'
import cssStyeDeclaration from '../content/css-declaration-order'
import htmlRules from '../content/html-rules'
import { 
  copyStringToClipboard, 
  slugify, 
  scrollWithOffset,
  scrollToTop
} from '../common/utils'

function OffsetHashLink(props) {
  return (
    <HashLink
      {...props}
      scroll={el => scrollWithOffset(el, props.offset === false ? 0 : 90)}
    >
      {props.children}  
    </HashLink>
  )
}

function CategoryHash(props) {
  return (
    <OffsetHashLink 
      to={`#${props.to}`} 
      className={'hash hash--lg'}
      offset={false}
    >
      #
    </OffsetHashLink>
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
                  <OffsetHashLink 
                    to={`#${slugify(item.summary)}`} 
                    className="hash hash--sm"
                    onClick={() => copyUrl(slugify(item.summary))}
                  >
                    #
                  </OffsetHashLink>
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
  useEffect(() =>{
    stickybits('.category')
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(`${hash.substring(3)}`)
      if (element) {
        console.log(element)
        scrollWithOffset(element, element.classList.contains('category') ? 0 : 90)
      }
    } else {
      scrollToTop()
    }
  }, [])

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
            <OffsetHashLink to="#golden-rule" offset={false}>Golden Rule: Every line of code should appear to be written by a single person</OffsetHashLink>
          </li>
          <li>
            <OffsetHashLink to="#silver-rule" offset={false}>Silver Rule: Special client requests supercede any of the rules below.</OffsetHashLink>
          </li>
          <li>
            <OffsetHashLink to="#declaration-order" offset={false}>CSS Style Declaration Ideal Order</OffsetHashLink>
          </li>
          <li>
            <OffsetHashLink to="#css-rules" offset={false}>CSS Rules:</OffsetHashLink>
            <ul>
              {cssRules.map((item, i) => 
                <li key={i}>
                  <OffsetHashLink to={`#${slugify(item.summary)}`}>
                    {item.summary}
                  </OffsetHashLink>
                </li>
              )}
            </ul>
          </li>
          <li>
            <OffsetHashLink to="#html-rules" offset={false}>HTML Rules: </OffsetHashLink>
            <ul>
              {htmlRules.map((item, i) => 
                <li key={i}>
                  <OffsetHashLink to={`#${slugify(item.summary)}`}>
                    {item.summary}
                  </OffsetHashLink>
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