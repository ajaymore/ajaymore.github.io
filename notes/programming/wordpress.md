---
---

<pre>
(function(){
	document.onload = function(){
		var cloud = document.querySelector('.tagcloud');
		var tags = cloud.querySelectorAll('a');
		for(var i=0; i<tags.length; i++){
			var randomSize = Math.floor((Math.random() * 100) + 60) + '%';
			tags[i].style.fontSize = randomSize;
		}
	};
})();
</pre>