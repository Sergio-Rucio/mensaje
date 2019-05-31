// activar y desactivar cajas

function iniciar(){
	bloque.style.display="none";
	añadirasunto.addEventListener("click",verasunto);
	botonquitar.addEventListener("click",quitarasunto);
}

function verasunto(){
bloque.style.display="block";
}

function quitarasunto(){
	bloque.style.display="none";
}



window.addEventListener("load",iniciar);






// para hacer la funcion de escribir y resetar lo que pongamos

// function iniciar(){
// 	botonescribir.addEventListener("click",escribirtexto);
// 	botonresetear.addEventListener("click",resetear);
// 	cajatexto.focus();	
// }

// function escribirtexto(){
// 	parrafo.textContent=cajatexto.value;
// }

// function resetear(){
// parrafo.textContent="";
// cajatexto.value="";
// cajatexto.focus();	//nos pone el cursor
// }
// window.addEventListener("load",iniciar);


// esto para aceptar terminos

// function iniciar(){
// 	botonaceptar.disabled=true;
// 	cajacheck.addEventListener("change",activarboton);
// 	botonaceptar.addEventListener("click",enviardatos);
// }
// function enviardatos(){
// botonaceptar.value = "Enviando...";
// botonaceptar.disabled=true;
// setTimeout(escribir,2000);
// }

 //para que nos vaya a otra pagina

// function escribir(){
// 	location.href="pruebache2.html";

// 	// document.write("<h1>Datos enviados</h1>")
// }

// function activarboton(){
// 	if (cajacheck.checked==true) {
// 		botonaceptar.disabled=false;
// 	}else{
// 		botonaceptar.disabled=true;

// 	}


// }
// window.addEventListener("load",iniciar);
