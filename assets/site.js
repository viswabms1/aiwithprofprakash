/* Builds the menu from /menu.json and the footer. Edit menu.json to change the menu. */
(function(){
  var base = document.currentScript.src.replace(/assets\/site\.js.*$/,'');
  var nav = document.getElementById('menu');
  if(nav){
    fetch(base+'menu.json').then(function(r){return r.json()}).then(function(items){
      items.forEach(function(it){
        var a=document.createElement('a');
        a.textContent=it.title;
        a.href=/^https?:/.test(it.url)?it.url:base+it.url.replace(/^\//,'');
        nav.appendChild(a);
      });
    }).catch(function(){});
  }
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
