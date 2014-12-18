---
---
##Modernizer
<pre>
	&lt;html class=&quot;no-js&quot;&gt;
	&lt;html class=&quot;js canvas canvastext geolocation rgba hsla no-multiplebgs borderimage borderradius boxshadow opacity no-cssanimations csscolumns no-cssgradients no-cssreflections csstransforms no-csstransforms3d no-csstransitions  video audio cufon-active fontface cufon-ready&quot;&gt;
</pre>
- Updates CSS3 classes
-
<pre> 
if (Modernizr.canvas) {
  // let's draw some shapes!
} else {
  // no native canvas support available :(
}
function supports_canvas() {
  return !!document.createElement('canvas').getContext;
}
</pre>

1. css()
2. attr()
3. hide(), show(), slideDown, slideUp, slideToggle, delay(), animate({height: '', opacity : ''}, 'slow')
4. parent(), parents()
5. closest(), siblings()
6. find(), children()
7. next(), prev(), first(), last(), eq()
8. addClass(), removeClass()
9. filter()
10. on(), off()
11. mouseenter, click, hover, change, trigger, 
12. Rather than attaching 100 event listeners attach to the parent and check what child received event
13. $('parent').on('mouseenter', 'child', function(){expression;});
14. clone()
15. append(), prepend(), appendTo(), prependTo
16. insertAfter(), insertBefore
17. after(), before()
18. bind, live, delegate - depecrated, all call on method
19. $('&lt;h2&gt;&lt;/h2&gt;', {id: 'head', class: 'head', data-head:'something', text:'title text'});
20. self invoking
```
(function($){code;})(jQuery);
```
21. best practice
```
use css selectors with tags like div.className or nav#idValue
fetch dom elements outside of event callback to improve performance
var box = $('div.box');
$('button').on('click', function(){
	box.css('font-size', '18px');
});
```
22. width(), outerWidth(), height(), outerHeight()
23. trim()
24. each(), map()
25. load(), get(), getJSON(), post(), ajax()
26. $.deferred, $.when


<pre>
	
&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Page title&lt;/title&gt;
		&lt;meta charset=&quot;utf-8&quot; /&gt;
		&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width initial-scale=1&quot; /&gt;
	&lt;style&gt;
		body{position: relative;}
		.side-panel{position: fixed; width: 100px; height: 100%; top: 0; left: -100px; background: green;}
		.page{width: 600px; margin: 100px auto; text-align: center;}
	&lt;/style&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;div class=&quot;side-panel&quot; id=&quot;side-panel&quot;&gt;
			Content Here
		&lt;/div&gt;
		&lt;div class=&quot;page&quot;&gt;
			Content Here
		&lt;/div&gt;
	&lt;script&gt;
		var panel = document.getElementById('side-panel');
		panel.style.left = &quot;-100px&quot;;
		function move(){
			panel.style.left = (parseInt(panel.style.left) + 10) + 'px';
			if(panel.style.left == '100px'){
				return;
			}
			else{
				//console.log(panel.style.left);
				setTimeout(move, 40);
			}
		}
	move();
	&lt;/script&gt;
	&lt;/body&gt;
&lt;/html&gt;

</pre>