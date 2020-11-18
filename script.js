
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function fondo(){
    document.getElementById('home').style.backgroundImage = "url('Img/fondo.png')";
}
function cambia(){
  document.getElementById('home').style.backgroundImage ="url('Img/giphy.gif')";
}


function mostrar(seccion){
	if (document.getElementById(seccion).style.display == "block"){
		document.getElementById(seccion).style.display = "none";
	}
	else {
		  document.getElementById(seccion).style.display = "block"; 
	}
 	
}

function mostrarR(seccion){
	if (document.getElementById(seccion).style.display == "flex"){
		document.getElementById(seccion).style.display = "none";
	}
	else {
		  document.getElementById(seccion).style.display = "flex"; 
	}
 	
}


function boton() {
	document.getElementById('comprar').disabled=false;
	
	
}



function inc(campoCantidad, campoResumen) {
  let cantidad = document.getElementById(campoCantidad);
  cantidad.value = parseInt(cantidad.value) + 1;
	let resumen = document.getElementById(campoResumen);
	resumen.innerHTML = cantidad.value;
}


function dec(campoCantidad, campoResumen) {
  let cantidad = document.getElementById(campoCantidad);
	if (parseInt(cantidad.value) > 0) {
	  cantidad.value = parseInt(cantidad.value) - 1;
	  let resumen = document.getElementById(campoResumen);
	 	resumen.innerHTML = cantidad.value;
  }
}

function cambiaN(numero) {

    document.getElementById(numero).style.color = "#A8BA9B";

}
function menu(punto) {

    document.getElementById(punto).backgroundImage = "url('Img/iso.png')";

}

function ani(foto){
	if (document.getElementById(foto).style.visibility == "visible"){
		document.getElementById(foto).style.visibility = "hidden";
	}
	else {
		  document.getElementById(foto).style.visibility = "visible"; 
	}
 	
}
