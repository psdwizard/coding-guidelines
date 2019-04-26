import React, { Component } from 'react'

import Highlight from 'react-highlight'

import '../stylesheets/main.scss'

const x =
<Highlight language="sass">
{`@import "compass/reset";

// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);

@mixin container {
    max-width: 980px;
}

// mixins with parameters
@mixin button($color:green) {
    @if ($color == green) {
        background-color: #008000;
    }
    @else if ($color == red) {
        background-color: #B22222;
    }
}

button {
    @include button(red);
}

div,
.navbar,
#header,
input[type="input"] {
    font-family: "Helvetica Neue", Arial, sans-serif;
    width: auto;
    margin: 0 auto;
    display: block;
}

.row-12 > [class*="spans"] {
    border-left: 1px solid #B5C583;
}

// nested definitions
ul {
    width: 100%;
    padding: {
        left: 5px; right: 5px;
    }
  li {
      float: left; margin-right: 10px;
      .home {
          background: url('http://placehold.it/20') scroll no-repeat 0 0;
    }
  }
}

.banner {
    @extend .container;
}

a {
  color: $colorGreen;
  &:hover { color: $colorGreenDark; }
  &:visited { color: #c458cb; }
}

@for $i from 1 through 5 {
    .span#{$i} {
        width: 20px*$i;
    }
}

@mixin mobile {
  @media screen and (max-width : 600px) {
    @content;
  }
}`}
</Highlight>

const y = <Highlight>
{`<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`}    
</Highlight>

const rules = [
	{
		rule: `Always leave a line space between each section.`,
	},
	{
		rule: `Avoid using !important if necessary.`,
	},
	{
		rule: `Use soft tabs with two spaces.`,
	},
	{
		rule: `When grouping selectors, keep individual selectors to a single line.`,
	},
	{
		rule: `Don’t prefix property values or color parameters with a leading zero (e.g., .5 instead of 0.5 and -.5px instead of -0.5px).`,
	},
	{
		rule: `Lowercase all hex values (e.g., #fff).`,
	},
	{
		rule: `Use shorthand hex values where available (e.g., #fff instead of #ffffff).`,
	},
	{
		rule: `Quote attribute values in selectors, e.g., input[type=”text”]. They’re only optional in some cases, and it’s a good practice for consistency.`,
	},
	{
		rule: `Keep classes lowercase and use dashes (not underscores or camelCase). Dashes serve as natural breaks in related class (e.g., .btn and .btn-danger).`,
	},
	{
		rule: `Keep selectors short and strive to limit the number of elements in each selector to three.`,
	},
	{
		rule: `Always put a single space between the property and value and no space between the property and the colon.`,
	},
	{
		rule: `Avoid specifying units for zero values, e.g., margin: 0; instead of margin: 0px;.`,
	},
	{
		rule: `Reuse your codes as much as possible to minimize the size of files.`,
	},
	{
		rule: `Mixins are always after the Miscellaneous section for sass (e.g., @include, @extend).`,
	},
	{
		rule: `Put all media queries in a block at the very end.`,
	},
	{
		rule: `The rule above can be overruled when the query only applies to a single selector.`,
	},
]
export default class Home extends Component {
  render() {    
    return (
      <div className="container">
				<div className="row row-category">Sample</div>
				{
					rules.map((item, i) => (
						<div className="row" key={i}>
							<div className="rule">
								{item.rule}
							</div>
							<div className="sample">
								{y}
							</div>
						</div>		
					))
				}
        
      </div>
    )
  }
}