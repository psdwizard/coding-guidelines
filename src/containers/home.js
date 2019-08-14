import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import clsx from 'clsx'
import SyntaxHighlighter from 'react-syntax-highlighter'

import '../stylesheets/main.scss'

const cssHighlightProps = {
  language: 'scss',
  useInlineStyles: false
}

const htmlHighlightProps = {
  language: 'html',
  useInlineStyles: false
}

const cssRules = [
  {
    rule: `Add a line break between selectors. Even when they only have a single css property.`,
    summary: `Add a line break between selectors`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`.foo {
  ...
}

.bar {
  ...
  ...
}`}    
</SyntaxHighlighter>
  },
  {
    rule: `Avoid !important. Use it only as an absolute last resort.`,
    summary: `Avoid !important`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.foo {
  display: none !important;
}

//DO
.bar {
  ...
  
  .foo {
    display: none;
  }
}`}    
</SyntaxHighlighter>
  },
  {
    rule: `Configure dev environment to soft tabs with two (2) spaces.`,
    summary: `Use soft tabs, two spaces`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`.foo {
  display: block;
}`}    
</SyntaxHighlighter>
  },
  {
    rule: `When grouping selectors, keep individual selectors to a single line.`,
    summary: `Keep individual selectors to a single line`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.foo, .bar {
  display: block;
}

//DO
.foo, 
.bar {
  display: block;
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: <span>No spaces after commas within <SyntaxHighlighter {...cssHighlightProps} CodeTag="span" PreTag="span">rgb(), rgba(), hsl(), hsla(), or rect()</SyntaxHighlighter> values. This differentiates multiple color values (comma, no space) versus multiple property values (comma with space).</span>,
    summary: `No spaces within color function values`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.foo {
  background-color: rgba(0, 0, 0, .5);
}

//DO
.foo {
  background-color: rgba(0,0,0,.5);
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `No leading zeroes for property values or color parameters.`,
    summary: `No leading zeroes`,
    example: 
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.foo {
  margin: -0.5px;

  background-color: rgba(0,0,0,0.5);
}

//DO
.foo {
  margin: -.5px;

  background-color: rgba(0,0,0,.5);
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `No units for zeroes (margin: 0; instead of margin: 0px;).`,
    summary: `No units for zeroes`,
    example: 
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.foo {
  margin: 0px;
}

//DO
.foo {
  margin: 0;
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `Use shorthand hex values where possible (e.g., #fff instead of #ffffff).`,
    summary: `Use shorthand hex where possible`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.foo {
  color: #ffffff;
}

//DO
.foo {
  color: #fff;
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `Lowercase all hex values (e.g., #fff).`,
    summary: `Lowercase all hex`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.foo {
  color: #FFF;
}

//DO
.foo {
  color: #fff;
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `Quote attribute values in selectors, e.g., input[type=”text”]. Avoid these selectors when input type is bound to change. Attribute value changes from HTML side will cause style inconsistencies.`,
    summary: `Quote attribute values in selectors`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.selector[type=text] {
  ...
}

//DO
.selector[type="text"] {
  ...
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `Add appropriate cursor types and transitions to all elements with special behaviors`,
    summary: `Add cursor types and transitions`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//<button class="click-me">Clickable</button>
.click-me {
  cursor: pointer;
  transition: color .2s ease-in-out;
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `Keep classes lowercase and use dashes (not underscores or camelCase).`,
    summary: `Keep classes lowercase and use dashes`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.fooBar,
.foo_bar {
  ...
}

//DO
.foo-bar {
  ...
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `Keep selectors short and strive to limit the number of elements in each selector to three.`,
    summary: `Keep selectors short`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.section-header-card-wrapper {
  ...
}

//DO
.card-wrapper {
  ...
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `Put a single space between the property and value and no space between the property and the colon.`,
    summary: `Put a single space between property and value`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.foo {
  padding : 1px;
  margin:1px;
}

//DO
.foo {
  padding: 1px;
}
`}    
</SyntaxHighlighter>
  },

  // {
  //   rule: `Reuse your codes as much as possible to minimize the size of files.`,
  // },
  // {
  //   rule: `Mixins are always after the Miscellaneous section for sass (e.g., @include, @extend).`,
  // },
  {
    rule: `Use @extend at the beginning, right after the selector, before declaring other property values. Use other mixins like @include as needed. Be careful with @extend and other custom mixins. Use @extend only when the style is certainly extendable (e.g. buttons, links, etc.)`,
    summary: `Use @extend at the beginning`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`.bar {
  padding: 1px;
  ...
}

.foo {
  @extend .bar;

  padding: 2px;
}
`}    
</SyntaxHighlighter>
  },
  {
    rule: `Put all media queries in a block at the very end even if they declare one property only. Put media queries at the parent level, never nested as a child. Arrange from large to small.`,
    summary: `Put all media queries at end, at parent level. Arranged large to small`,
    example:
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.foo {
  ...

  @include respond-to(lg-down) {
    ...
  }
}

//DO
.foo {
  ...
}

@include respond-to(lg-down) {
  ... 
}

@include respond-to(sm-down) {
  ...
}`}    
</SyntaxHighlighter>
  },
  // {
  // 	rule: `The rule above can be overruled when the query only applies to a single selector.`,
  // },
  {
    rule: `Nest smartly. Do it only if the children are extremely dependent on a parent element`,
    summary: `Nest smartly`,
    example: 
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.class-a {
  .class-b {
    ...

    .class-c {
      ...
    }
  }

  .class-d {
    ...

    p {
      ...
    }

    ul {
      ...

      li {
        ...
      }
    }
  }
}

//DO
.class-a {
  ...
}

.class-b {
  ...
}

.class-c {
  ...
}

.class-d {
  ...
  
  p {
    ...
  }

  li {
    ...
  }
}`}    
</SyntaxHighlighter>
  },
  {
    rule: `Use classes to avoid deep nesting and for specific context. Except when dealing with 3rd-party plugins/CMS-content-generated HTML nodes where customizing classes is not possible.`,
    summary: `Use classes to avoid deep nesting and for specific context`,
    example: 
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.class-a {
  ...

  .class-d {
    ...

    p {
      ...
    }
  }
}

//DO
.class-a {
  ...
}

.class-d {
  ...
  
  .class-for-p //p {
    ...
  }
}`}    
</SyntaxHighlighter>
  },
  {
    rule: `Generic Nesting Guide`,
    summary: `Generic Nesting Guide`,
    example: 
<SyntaxHighlighter {...cssHighlightProps}>
{`.page-container { //i.e. <main class="home">
  .outer-wrapper { //first tab - wrapper
    .child-element { //second tab - child element
      &:hover { //third tab - pseudo-elements
        background-color: #fff;
      }

      &:before {
        content: 'a';
      }
    }
    
    .child-with-dependent { //second tab - child with extreme dependency
      .i-am-dependent { //third tab - avoid me if you can
        &:hover { //fourth and ideally final tab - pseudo of extreme dependency
          color: #000;
        }
      }
    }
  }
}

`}    
</SyntaxHighlighter>
  },
  {
    rule: `Declare font variants as weights and not separate font families`,
    summary: `Font variants as weights, not separate families`,
    example: 
<SyntaxHighlighter {...cssHighlightProps}>
{`@include font-face($font-proximanova, $base-url + 'fonts/', 'proxima-light', 'proximia-light', 300);
@include font-face($font-proximanova, $base-url + 'fonts/', 'proxima-regular', 'proximia-regular', 400);
@include font-face($font-proximanova, $base-url + 'fonts/', 'proxima-semibold', 'proximia-semibold', 500);
@include font-face($font-proximanova, $base-url + 'fonts/', 'proxima-bold', 'proximia-bold', 600);`}    
</SyntaxHighlighter>
  },
  {
    rule: `Always use variables for colors, all located at _variables.scss. Use contextual phrases for primary and secondary palettes. Use numerics for neutral shades in increments of 100's`,
    summary: `Use variables for colors, named based on context`,
    example: 
<SyntaxHighlighter {...cssHighlightProps}>
{`$primary-color: #ffc30b;
$secondary-color: #fadase;

$gray-100: ...
$gray-200: ...
$gray-300: ...
$gray-400: ...`}    
</SyntaxHighlighter>
  },
  {
    rule: <span>
      Limit shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include:
        <SyntaxHighlighter {...cssHighlightProps}>
{`padding
margin
font
background
border
border-radius`}
        </SyntaxHighlighter>
        Often, we don't need to set all the values a shorthand property represents. For example, HTML headings only set top and bottom margin, so when necessary, only override those two values. Excessive use of shorthand properties often leads to sloppier code with unnecessary overrides and unintended side effects.
    </span>,
    summary: `Limit use of shorthand declarations`,
    example: <SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.class {
  font: 400 16px $myfont;
}

//DO
.class {
  font-family: $myfont;
  font-size: 16px;
  font-weight: 400;
}`}    
</SyntaxHighlighter>
  },
  {
    rule: `Whenever efficient, use sass loops and native sass functions.`,
    summary: `Use sass loops and functions`,
    example: <div>
<SyntaxHighlighter {...cssHighlightProps}>
{`//Example:
//Declare $my-item as list
$my-item: red green blue;

.parent-class {
  //Each loop
  @each $my-item in $my-list {
    //Variable $i assignment via index() sass native function
    $i: index($my-item, $my-list);
    &:nth-of-type(#{$i}) {
      background-color: $my-item;
    }
  }
}

// Compiles to:
  .parent-class:nth-of-type(1) {
    background-color: red;
  }

  .parent-class:nth-of-type(2) {
    background-color: green;
  }

  .parent-class:nth-of-type(3) {
    background-color: blue;
  }
`}
</SyntaxHighlighter>
</div>
  },
  {
    rule: `For dynamic styles, avoid CSS-in-JS. Toggle classes instead.`,
    summary: `Avoid CSS-in-JS`,
    example: <div>
<SyntaxHighlighter {...htmlHighlightProps}>
{`<!-- DON'T -->
<div class="normal js-manipulate"></div>
<script>
  $('.js-manipulate').click(() => {
    var $this = $(this);
    $this.css('color', 'red');
  })
</script>

<!-- DO -->
<div class="normal js-manipulate"></div>
<script>
  $('.js-manipulate').click(() => {
    var $this = $(this);
    $this.toggleClass('status-class');
  })
</script>
<style>
  .normal {
    display: block;

    &.status-class {
      display: none
    }
  }
</style>
`}
</SyntaxHighlighter>
</div>
  },
]

const cssStyeDeclaration = <SyntaxHighlighter {...cssHighlightProps}>
{`.class {
  @extend .another-class;

/* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  //ENTER -- code line break

/* Display */
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  order: -1;
  vertical-align: middle;
  float: left;
  clear: both;
  padding: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  margin: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  width: 10px;
  min-width: 10px;
  max-width: 20px;
  height: 10px;
  min-height: 10px;
  max-height: 20px;
  overflow: hidden;
  column-count: 2;
  column-width: 0;

  //ENTER -- code line break

/* Typography */
  font-family: sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1;
  color: red;
  text-align: left;
  text-decoration: underline;
  text-indent: 1px;
  text-overflow: ellipsis;
  text-rendering: optimizeLegibility;
  text-shadow: 1px 1px 2px pink;
  text-transform: uppercase;
  word-spacing: 1px;
  word-break: break-word;
  white-space: normal;
  hyphens: auto;
  list-style-type: square;
  list-style-position: inside;
  list-style-image: none;

  //ENTER -- code line break

/* Visuals */
  background-attachment: fixed;
  background-color: red;
  background-image: url(...);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px red solid;
  border-top: 1px red solid;
  border-right: 1px red solid;
  border-bottom: 1px red solid;
  border-left: 1px red solid;
  border-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-color: red;
  border-top-color: red;
  border-right-color: red;
  border-bottom-color: red;
  border-left-color: red;
  border-style: solid;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-image: none;
  border-collapse: collapse;
  border-spacing: 0;
  outline: none;
  outline-offset: 0;
  box-shadow: 10px 5px 5px red;
  background-clip: padding-box;

  //ENTER -- code line break

// Misc
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  pointer-events: auto;
  user-select: auto;
  direction: ltr;
  backface-visibility: hidden;
  filter: blur(5px);
  transition: all 3s ease;
  transition-property: all;
  transition-duration: 3s;
  transition-timing-function: ease;
  transition-delay: 1s;
  transform: scale(1);
  animation: slidein 3s ease-in 1s infinite reverse both running;
  animation-name: slidein;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-play-state: running;

  //ENTER -- code line break

//Pseudo elements
  &:before {
    content: '';

    /* Positioning */
    /* Display */
    /* Typography */
    /* Visuals */
    // Misc
  }

  &:after {
    content: '';

    /* Positioning */
    /* Display */
    /* Typography */
    /* Visuals */
    // Misc
  }

  //on-behavior in this order:
  &:hover,
  &:active,
  &:focus,
  &:visited,
  &:checked,
  &:default,
  &:empty,
  &:enabled,
  &:disabled,
  &:in-range,
  &:out-of-range,
  &:indeterminate,
  &:valid,
  &:invalid,
  &:target {
    display: none;
  }

  &::placeholder,
  &::selection,
  &::first-letter,
  &::first-line {
    display: none;
  }

  //parent-children pseudo classes: https://css-tricks.com/useful-nth-child-recipies/
  &:first-child,
  &:nth-child(even),
  &:nth-last-child(n),
  &:last-child,
  &:only-child {
    display: none;
  }

  &:first-of-type,
  &:nth-of-type(odd),
  &:nth-last-of-type(n),
  &:last-of-type,
  &:only-of-type {
    display: none;
  }

  //Other browser specific stuff
  &::-ms-clear {
    display: none;
  }

  &::-webkit-specific-stuff,
  &::-moz-specific-stuff,
  &::-o-specific-stuff {
    display: none;
  }

  //CSS Ancestry Selectors
  & .another-class {
    /* another-class is a child of parent-class */
  }

  > .another-class {
    /* another-class is a direct descendant of parent-class */
  }

  ~ .another-class {
    /* another-class is preceded by parent-class */
  }

  + .another-class {
    /* another-class is immediately placed after parent-class */
  }  

  //Attribute-Value Pairs
  input[type='text'] {
    
  }
}
`
}
</SyntaxHighlighter>

const htmlRules = [
  {
    rule: `HTML5 doctype: Enforce standards mode and more consistent rendering in every browser possible with this simple doctype at the beginning of every HTML page.`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<!DOCTYPE html>`}    
</SyntaxHighlighter>
  },
  {
    rule: `Language Attribute: Encouraged to specify a lang attribute on the root html element, giving the document’s language.`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<html lang="en-us">
  <!-- ... -->
</html>`}    
</SyntaxHighlighter>
  },
  {
    rule: `IE Compatibility Mode: Internet Explorer supports the use of a document compatibility <meta> tag to specify what version of IE the page should be rendered as:`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<meta http-equiv="X-UA-Compatible" content="IE=Edge">`}    
</SyntaxHighlighter>
  },
  {
    rule: `Character Encoding: Quickly and easily ensure proper rendering of your content by declaring an explicit character encoding.`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<head>
  <meta charset="UTF-8">
</head>`}    
</SyntaxHighlighter>
  },
  {
    rule: `Nested elements should be indented once (two spaces).`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<head>
  <title>Page title</title>
</head>`}    
</SyntaxHighlighter>
  },
  {
    rule: `Always use double quotes, never single quotes, on attributes.`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<body>
  <h1 class="hello">Hello, world!</h1>
</body>`}    
</SyntaxHighlighter>
  },
  {
    rule: `Include a trailing slash in self-closing elements. This is to be consistent with JS frameworks like React.`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<body>
  <img src="img/logo.png" alt="Company" />
</body>`}    
</SyntaxHighlighter>
  },
  {
    rule: `HTML attributes should come in this particular order for easier reading of code.`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<div id="..." class="..." data-abc="...">Foo</div>

<a href="#" id="..." class="..." data-toggle="modal">Link</a>

<input id="my-id" class="form-control" type="text" />

<img src="..." id="..." class="..." alt="..." />`}    
</SyntaxHighlighter>
  },
  {
    rule: `Reducing Markup: It is always best to keep the codes to a minimum. This will help in reading the code and speed up the loading speed (above-the-fold content). *case-to-case basis.`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<!-- Not so great -->
<span class="avatar">
  <img src="..." />
</span>

<!-- Better -->
<img class="avatar" src="..." />`}    
</SyntaxHighlighter>
  },
  {
    rule: `Do not use outdated HTML tags like <b></b> and <u></u>. Style typographical emphases with CSS instead.`,
    example: <div>
<SyntaxHighlighter {...htmlHighlightProps}>
{`<!-- DON'T -->
<u>I am underlined</u>

<!-- DO -->
<span class="underline">I am underlined</span>`}
</SyntaxHighlighter>
<SyntaxHighlighter {...cssHighlightProps}>
{`.underline {
  text-decoration: underline;
}`}    
</SyntaxHighlighter>
</div>
  },
  {
    rule: `Use a separate js-class when manipulating elements with scripts/jquery`,
    example: <SyntaxHighlighter {...htmlHighlightProps}>
{`<!-- DON'T -->
<div class="manipulate"></div>
<script>
  $('.manipulate').on('click', () => console.log('clicked'));
</script>

<!-- DO -->
<div class="manipulate js-manipulate"></div>
<script>
  $('.js-manipulate').on('click', () => console.log('clicked'));
</script>`}
</SyntaxHighlighter>
  },
  {
    rule: `Avoid classes that are similar to reserved classes for Bootstrap/3rd Party Plugins to avoid confusion of context.`,
    example: <SyntaxHighlighter {...htmlHighlightProps}>
{`<!-- DON'T -->
<div class="my-container">
  <!-- 'container' is a Bootstrap class -->
</div>

<!-- DO -->
<div class="my-wrapper">
  ...
</div>`}
</SyntaxHighlighter>   
  },
  {
    rule: `On naming of classes, put 'context' prior 'item detail' for proper clustering and easier context understanding.`,
    example: <SyntaxHighlighter {...htmlHighlightProps}>
{`<!-- DON'T -->
<span class="search-icon"></span>
<span class="hamburger-icon"></span>
<span class="fb-icon"></span>

<!-- DO -->
<span class="icon-search"></span>
<span class="icon-hamburger"></span>
<span class="icon-fb"></span>`}
</SyntaxHighlighter>
  },
  {
    rule: `Provide proper type for inputs. Improper type settings affects form validations`,
    example: <SyntaxHighlighter {...htmlHighlightProps}>
{`<!-- DON'T -->
<input type="text" placeholder="Name" />
<input type="text" placeholder="Email" />
<input type="text" placeholder="Phone" />
<input type="text" placeholder="Password" />

<!-- DO -->
<input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
<input type="tel" placeholder="Phone" />
<input type="password" placeholder="Password" />`}
</SyntaxHighlighter>
  },
  {
    rule: `When naming elements based on position, use ordinal over cardinal. Cardinal terms like 'left' and 'right' are confusing for RTL Bidirectional layouts`,
    example: <SyntaxHighlighter {...htmlHighlightProps}>
{`<!-- DON'T -->
<div class="left-side"></div>
<div class="right-side"></div>

<!-- DO -->
<div class="first-side"></div>
<div class="second-side"></div>`}
</SyntaxHighlighter>
  },
  {
    rule: `Use 'wrapper' as parent level container and 'holder' if there are nested containers inside. If you need another container inside after 'holder', this is usually a sign of bad HTML structure or poor implementation of flex. Restructure your elements.`,
    example: <SyntaxHighlighter {...htmlHighlightProps}>
{`
<div class="something-wrapper">
  ...
  <div class="something-holder">
    ...
  </div>
</div>
`}
</SyntaxHighlighter>
  },
  {
    rule: `Follow 'something-wrapper' and 'something-holder' as class name order when using custom containers. To resolve the issue where multiple holder (image-holder, text-holder) of multiple types that may conflict with the rule above where semantic context precedes specifc context (icon-fb, icon-tw, etc.), group multiple types into a collective term.`,
    example: <SyntaxHighlighter {...htmlHighlightProps}>
{` <!-- DON'T -->
<div class="something-wrapper">
  <div class="image-holder">...</div>
  <div class="text-holder">...</div>
</div>

<!-- DO -->
<div class="something-wrapper">
  <div class="card-holder"></div>
</div>
`}
</SyntaxHighlighter>
  },
  {
    rule: `Use 'id' only when an element has a unique behavior. Use 'class' for styles. Use 'js-class' for generic/group behavior`,
    example: <SyntaxHighlighter {...htmlHighlightProps}>
{` <!-- DON'T -->
<div id="sample-one">
  ...
  <div id="accordion-one">Header 1</div>
  <div id="accordion-two">Header 2</div>
  <div id="accordion-three">Header 3</div>
</div>

<style>
  #sample-one {
    //Don't style id's
  }
</style>

<script>
  $('#accordion-one')...
</script>

<!-- DO -->
<div class="sample-one">
  ...
  <div class="js-accordion">Header 1</div>
  <div class="js-accordion">Header 2</div>
  <div class="js-accordion">Header 3</div>
</div>

<style>
  .sample-one {
    //Style classes instead
  }
</style>

<script>
  $('.js-accordion')...
</script>
`}
</SyntaxHighlighter>
  },
]

const slugify = text => text.toString().toLowerCase().trim()
  .replace(/&/g, '-and-') // Replace & with 'and'
  .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word characters and dashes with a single dash (-)

const copyStringToClipboard = str => {
  // Create new element
  var el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}

export default function Home() {    
  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  const [hovered, setHovered] = useState(null)

  const mouseEnter = (i) => {
    console.log(i)
    setHovered(i)
  }

  const mouseLeave = () => {
    setHovered(null)
  }

  const copyUrl = hash => {
    const baseUrl = `https://psdwizard.github.io/coding-guidelines/#/`
    copyStringToClipboard(`${baseUrl}#${hash}`)
  }

  return (
    <div className="container">
      <div className="back-to-top" onClick={scrollToTop}>
        <img src={require('../assets/images/up-caret.svg')} className="caret" alt="Up caret" width="25" />
        <img src={require('../assets/images/nyan.png')} className="cat" alt="Fullstack HQ mascot" />
      </div>
      <div className="section category">Summary</div>
      <div className="section">
        <ul>
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
        </ul>
      </div>
      
      <div className="section category" id="golden-rule">Golden Rule</div>
      <div className="section">
        <div className="rule">
          Enforce these agreed upon guidelines at all times. Small or large, call out what's incorrect. This applies for everyone, project members and leaders alike.
        </div>
        <div className="sample hljs">
          Every line of code should appear to be written by a single person, no matter the number of contributors.
        </div>
      </div>

      <div className="section category" id="silver-rule">Silver Rule</div>
      <div className="section">
        <div className="rule">
          Special client requests supercede any of the rules below.
        </div>
        <div className="sample hljs">
          This is held true for all and any rule types.
        </div>
      </div>

      <div className="section category" id="css-rules">CSS Rules</div>
      
      {cssRules.map((item, i) => (
        <div 
          key={i} 
          id={slugify(item.summary)}
          className="section"
        >
          <div className="rule">
            <span onMouseEnter={() => mouseEnter(i)} onMouseLeave={() => mouseLeave(i)}>
              {item.rule} 
              <span>
                &nbsp;
                <HashLink 
                  to={`#${slugify(item.summary)}`} 
                  className={clsx(
                    'rule-hover-scope',
                    {'is-active': hovered === i}
                  )}
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
      ))}

      <div className="section category">CSS Style Declaration Ideal Order</div>
      <div className="section rule-monocol">
        {cssStyeDeclaration}
      </div>

      <div className="section category">HTML Rules</div>
      {
        htmlRules.map((item, i) => (
          <div className="section" key={i}>
            <div className="rule">
              {item.rule}
            </div>
            <div className="sample">
              {item.example}
            </div>
          </div>		
        ))
      }
      
    </div>
  )
}
