import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { cssHighlightProps, htmlHighlightProps } from '../common/highlighter-config'

const htmlRules = [
  {
    id: ``,
    rule: `HTML5 doctype: Enforce standards mode and more consistent rendering in every browser possible with this simple doctype at the beginning of every HTML page.`,
    summary: `Use HTML5 doctype`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<!DOCTYPE html>`}    
</SyntaxHighlighter>
  },
  {
    id: ``,
    rule: `Language Attribute: Encouraged to specify a lang attribute on the root html element, giving the document’s language.`,
    summary: `Add a language attribute`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<html lang="en-us">
  <!-- ... -->
</html>`}    
</SyntaxHighlighter>
  },
  {
    id: ``,
    rule: `IE Compatibility Mode: Internet Explorer supports the use of a document compatibility <meta> tag to specify what version of IE the page should be rendered as:`,
    summary: `Add meta tags for IE Compatibility Mode`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<meta http-equiv="X-UA-Compatible" content="IE=Edge">`}    
</SyntaxHighlighter>
  },
  {
    id: ``,
    rule: `Character Encoding: Quickly and easily ensure proper rendering of your content by declaring an explicit character encoding.`,
    summary: `Add character encoding`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<head>
  <meta charset="UTF-8">
</head>`}    
</SyntaxHighlighter>
  },
  {
    id: ``,
    rule: `Nested elements should be tabbed once.`,
    summary: `Nested elements should be tabbed once`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<head>
  <title>Page title</title>
</head>`}    
</SyntaxHighlighter>
  },
  {
    id: ``,
    rule: `Use double quotes ("), never single quotes ('), on attributes.`,
    summary: `Use double quotes (") on attributes`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<body>
  <h1 class="hello">Hello, world!</h1>
</body>`}    
</SyntaxHighlighter>
  },
  {
    id: ``,
    rule: `Include a trailing slash in self-closing elements. This is to be consistent with JS frameworks like React.`,
    summary: `Include a trailing slash in self-closing elements`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<body>
  <img src="img/logo.png" alt="Company" />
</body>`}    
</SyntaxHighlighter>
  },
  {
    id: ``,
    rule: `HTML attributes should come in this particular order for easier reading of code.`,
    summary: `Follow HTML attribute order`,
    example:
<SyntaxHighlighter {...htmlHighlightProps}>
{`<div id="..." class="..." data-abc="...">Foo</div>

<a href="#" id="..." class="..." data-toggle="modal">Link</a>

<input id="my-id" class="form-control" type="text" />

<img src="..." id="..." class="..." alt="..." />`}    
</SyntaxHighlighter>
  },
  {
    id: ``,
    rule: `Reduce markup. It is always best to keep the codes to a minimum. This will help in reading the code and speed up the loading speed (above-the-fold content).`,
    summary: `Reduce markup`,
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
    id: ``,
    rule: `Style emphases (bold, italics, etc.) with CSS. Don't use outdated HTML tags like <b></b> and <u></u>.`,
    summary: `Style emphases (bold, italics, etc.) with CSS`,
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
    id: ``,
    rule: `Use a separate js-class when manipulating elements with scripts/jquery. (Not applicable for JS frameworks like React)`,
    summary: `Use a separate js-class when manipulating elements with jquery `,
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
    id: ``,
    rule: `Avoid naming classes similar to reserved Bootstrap/3rd-party plugins' classes to avoid confusion of context.`,
    summary: `Avoid naming classes similar to reserved Booststrap/plugins' classes`,
    example: <SyntaxHighlighter {...htmlHighlightProps}>
{`<!-- DON'T -->
<div class="sample-container">
  <!-- 'container' is a Bootstrap class -->
</div>

<!-- DO -->
<div class="sample-wrapper">
  ...
</div>`}
</SyntaxHighlighter>   
  },
  {
    id: ``,
    rule: `On naming of classes, put 'context' prior 'item detail' for proper clustering and easier context understanding.`,
    summary: `Put context prior item detail`,
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
    id: ``,
    rule: `Provide proper types for inputs. Improper type settings affects form validations`,
    summary: `Provide proper type for inputs`,
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
    id: ``,
    rule: `Use ordinal over cardinal words when naming elements based on their layout. Cardinal terms like 'left' and 'right' are confusing for RTL Bidirectional layouts`,
    summary: `Use ordinal over cardinal words when naming elements based on their layout`,
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
    id: ``,
    rule: `Use 'wrapper' as parent level container and 'holder' if there are nested containers inside. If you need another container inside after 'holder', this is usually a sign of bad HTML structure or poor implementation of flex. Restructure your elements.`,
    summary: `Use 'wrapper' then 'holder' for nested containers`,
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
    id: ``,
    rule: `Attach '-wrapper' after context when using custom containers (something-wrapper, something-holder). To resolve the issue where multiple holder (image-holder, text-holder) of multiple types that may conflict with the rule above where semantic context precedes specifc context (icon-fb, icon-tw, etc.), group multiple types into a collective term.`,
    summary: `Attach '-wrapper' after context when using custom containers (something-wrapper)`,
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
    id: ``,
    rule: `Use 'id' only when an element has a unique behavior. Use 'class' for styles. Use 'js-class' for generic/group behavior`,
    summary: `Use 'id' only when an element has a unique behavior`,
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

export default htmlRules