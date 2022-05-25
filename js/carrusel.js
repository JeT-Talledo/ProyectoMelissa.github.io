var img = ["1.png","2.png","3.png"];
var c=0;
var t;
var baner = document.getElementById("baner1");

function rotacion(){
	baner.setAttribute("src","img/CARTERASFOTOS/"+img[c]);
	c++;
	if(c>=3)c=0;
	t=setTimeout("rotacion()",4000);
}
rotacion();
