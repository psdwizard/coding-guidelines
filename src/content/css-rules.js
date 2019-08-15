import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { cssHighlightProps, htmlHighlightProps } from '../common/highlighter-config'

const cssRules = [
  {
    id: `css-9sagoz2o7e6a`,
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
    id: `css-5p69zdh7nan6`,
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
    id: `css-t7r5rskpfrrn`,
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
    id: `css-modkzebzonn7`,
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
    id: `css-mcq8qqozep29`,
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
    id: `css-jeuicqetm8y8`,
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
    id: `css-aqe6tsq9gpkf`,
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
    id: `css-q33j3fssomkf`,
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
    id: `css-as97uagrm4kc`,
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
    id: `css-5yk6uit5fgku`,
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
    id: `css-fy9bfz35j5aa`,
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
    id: `css-iyaxidb4eawp`,
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
    id: `css-mn9v9efxe2ud`,
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
    id: `css-ffeojzxc2854`,
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
    id: `css-k8sm8i8j89gk`,
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
    id: `css-ke5jd5qdrdkq`,
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
    id: `css-niheps8fwjzy`,
    rule: `Nest smartly. Do it only if the children are extremely dependent on a parent element`,
    summary: `Nest smartly`,
    example: 
<SyntaxHighlighter {...cssHighlightProps}>
{`//DON'T
.class-a {
  .class-b {
    .class-c {
      ...
    }
  }

  .class-d {
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
  ul {
    ...
  }
  
  li {
    ...
  }
}`}    
</SyntaxHighlighter>
  },
  {
    id: `css-ejwd9sdm8xb4`,
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
    id: `css-es8xh2uw9fin`,
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
    id: `css-p69yoayn9onr`,
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
    id: `css-5tind3dwkpfk`,
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
    id: `css-smv7gt6e3kta`,
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
    id: `css-5ppbc5hrpefn`,
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
    id: `css-7cehe46ffcyx`,
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

export default cssRules