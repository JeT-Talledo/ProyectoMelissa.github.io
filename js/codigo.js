/******* para mostrar el menu **********/
function mostrar(){
    document.getElementById('navegacion').style.display = 'flex';
}
function cerrnav(){
    document.getElementById('navegacion').style.display = 'none';
}


/******* para mostrar y no mostrar categorias ******/
function aparecerjo(){
	document.getElementById('opcate3').style.display = 'flex';
}
/******* para mostrar y no mostrar categorias ******/
function aparecerma(){
	document.getElementById('opcate4').style.display = 'flex';
}

/* para cerrar el opcate */
function cerrarop(){
    document.getElementById('opcate3').style.display = 'none';
    document.getElementById('opcate4').style.display = 'none';
}


/** para el mapa mundi ****/
function muestramapa(){
    document.getElementById('contmapa').style.display = 'block';
}
function cerrarmap(){
    document.getElementById('contmapa').style.display = 'none';
}


/** casads **/
