var pontos = 20;

function pergunta1() {
	let resp2 = document.getElementById("resp2").checked
	let resultado = "Você acertou!!! :3";
	let resultado1 = "Você infelizmente errou... ;-;";

	if (resp2 == true) {
		document.getElementById("resposta1").innerHTML = resultado;
		document.getElementById("resultado").textContent = pontos
		pontos = pontos + 20;
	}
	else{
		document.getElementById("resposta1").innerHTML = resultado1;
	}
}


function Pergunta2() {
	let resp5 = document.getElementById("resp5").checked
	let resultado = "Você acertou!!! :3";
	let resultado1 = "Você infelizmente errou... ;-;";
	
	if (resp5 == true) {
		document.getElementById("resposta2").innerHTML = resultado;
		document.getElementById("resultado").textContent = pontos
		pontos = pontos + 20;	
	}
	else{
		document.getElementById("resposta2").innerHTML = resultado1;
	}
}


function Pergunta3() {
	let resp9 = document.getElementById("resp9").checked
	let resultado = "Você acertou!!! :3";
	let resultado1 = "Você infelizmente errou... ;-;";	
	
	if (resp9 == true) {
		document.getElementById("resposta3").innerHTML = resultado;
		document.getElementById("resultado").textContent = pontos
		pontos = pontos + 20;
	}
	else{
		document.getElementById("resposta3").innerHTML = resultado1;
	}
}


function Pergunta4() {
	let resp10 = document.getElementById("resp10").checked
	let resultado = "Você acertou!!! :3";
	let resultado1 = "Você infelizmente errou... ;-;";	
	
	if (resp10 == true) {
		document.getElementById("resposta4").innerHTML = resultado;
		document.getElementById("resultado").textContent = pontos
		pontos = pontos + 20;
	}
	else{
		document.getElementById("resposta4").innerHTML = resultado1;
	}
}


function Pergunta5() {
	let resp13 = document.getElementById("resp13").checked
	let resultado = "Você acertou!!! :3";
	let resultado1 = "Você infelizmente errou... ;-;";	
	
	if (resp13 == true) {
		document.getElementById("resposta5").innerHTML = resultado;
		document.getElementById("resultado").textContent = pontos
		pontos = pontos + 20;
	}
	else{
		document.getElementById("resposta5").innerHTML = resultado1;
	}
}


function Pergunta6() {
	let resp18 = document.getElementById("resp18").checked
	let resultado = "Você acertou!!! :3";
	let resultado1 = "Você infelizmente errou... ;-;";	
	
	if (resp18 == true) {
		document.getElementById("resposta6").innerHTML = resultado;
		document.getElementById("resultado").textContent = pontos
		ponts = pontos + 20;
	}
	else{
		document.getElementById("resposta6").innerHTML = resultado1;
	}
}


function Pergunta7() {
	let resp19 = document.getElementById("resp19").checked
	let resultado = "Você acertou!!! :3";
	let resultado1 = "Você infelizmente errou... ;-;";	
	
	if (resp19 == true) {
		document.getElementById("resposta7").innerHTML = resultado;
		document.getElementById("resultado").textContent = pontos
		pontos = pontos + 20;
	}
	else{
		document.getElementById("resposta7").innerHTML = resultado1;
	}
}


function Pergunta8() {
	let resp24 = document.getElementById("resp24").checked
	let resultado = "Você acertou!!! :3";
	let resultado1 = "Você infelizmente errou... ;-;";	
	
	if (resp24 == true) {
		document.getElementById("resposta8").innerHTML = resultado;
		document.getElementById("resultado").textContent = pontos
		pontos = pontos + 20;
	}
	else{
		document.getElementById("resposta8").innerHTML = resultado1;
	}
}


function Pergunta9() {
	let resp27 = document.getElementById("resp27").checked
	let resultado = "Você acertou!!! :3";
	let resultado1 = "Você infelizmente errou... ;-;";	
	
	if (resp27 == true) {
		document.getElementById("resposta9").innerHTML = resultado;
		document.getElementById("resultado").textContent = pontos
		pontos = pontos + 20;
	}
	else{
		document.getElementById("resposta9").innerHTML = resultado1;
	}
}


function nome() {
	if (localStorage.nome){
		vnome = localStorage.nome;
		document.getElementById("nome").innerHTML = vnome;
	}


}