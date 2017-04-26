---
---
##SASS Vs LESS

<pre>
//Variables
$font-stack:    Helvetica, sans-serif;
@nice-blue: #5B83AD;

//Mixin
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
.box { @include border-radius(10px); }

.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
#menu a {
  color: #111;
  .bordered;
}

//Nesting
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}

//imports
@import "typo.css";

//Arithmetic
article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}
</pre>

##HTML5 Boilerplate
- normalize.css, typography defaults, media queries
- Many server side configs as well as client side configurations
- jquery, modernizer
- favicon, apple touch icons
- 404 page
- .htaccess file
- robots.txt file
- crossdomain.xml

##Twitter bootstrap
- row-fluid, row, span1, span2 offset3, row-fluid, container, container-fluid
- .visible-phone, .visible-tablet, .visible-desktop, .hidden-phone, .hidden-tablet, .hidden-desktop
- btn btn-large btn-primary
- img-rounded, img-circle, img-polaroid
- .table-striped, .table
- .success, .error, .warning
- class="dropdown-menu" role="menu"
- nav nav-pills, nav nav-tabs, navbar navbar-inner
- breadcrumb, divider, pagination

<pre>
@keyframes fontbulger {
  0% {
    font-size: 10px;
  }
  30% {
    font-size: 15px;
  }
  100% {
    font-size: 12px;
  }
}

#box {
   animation: fontbulger 2s infinite;
}

div {
  transition: width 2s, height 2s, transform 2s;
  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: 2s;
}
div:hover {
  transform: rotate(360deg);
  opacity: 1;
  background: #1ec7e6;
  width: 90px;
  height: 60px;
  font-size: 30px;
}
</pre>

- rotate, scaleX, scaleY, skew, translate