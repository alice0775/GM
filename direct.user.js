// ==UserScript==
// @name wmode direct
// @namespace http://space.geocities.yahoo.co.jp/gl/alice0775
// @description wmode direct
// @include http://www.youtube.com/watch?*
// @version 2014/01/06
// @grant none
// ==/UserScript==
(function(){
  var p = document.getElementById("movie_player");
  if (!p)
    return;
  
  p.setAttribute('wmode', 'direct');
  var c = p.cloneNode(true);
  p.style.display = 'none';
  p.parentNode.replaceChild(c, p);
  c.style.display = '';
})();
