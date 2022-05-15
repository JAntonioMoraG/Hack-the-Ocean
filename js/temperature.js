var urlAPI=""
var buttonNorthAtlantic=document.getElementById("northAtlantic")
var buttonSouthAtlantic=document.getElementById("southAtlantic")
var buttonNorthPacific=document.getElementById("northPacific")
var buttonSouthPacific=document.getElementById("southPacific")
var buttonAntartic=document.getElementById("antartic")
var buttonIndic=document.getElementById("indic")
var tempDocument=document.getElementById("temp")
function consultAPI(url,nameOcean){
	fetch(url,{
		method: "GET",
		mode: "cors",
		headers:{"API-Key": "JzVl7VwMThv4EQa49QL6gWo88hE1AXRs"},
	}).then(response => response.json()).then(json=> changeTemp(json.temperature.value,nameOcean))
}

function pacific(){
	urlAPI="https://ocean.amentum.io/rtofs?latitude=37.32297741480518&longitude=-152.86785548805892&depth=30"
	consultAPI(urlAPI,"pacific")
}
function southPacific(){
	urlAPI="https://ocean.amentum.io/rtofs?latitude=-31.927657642444487&longitude=-128.43632132750577&depth=30"
	consultAPI(urlAPI,"spacific")
}
function atlantic(){
	urlAPI="https://ocean.amentum.io/rtofs?latitude=34.475778627725994&longitude=-41.953886194951664&depth=30"
	consultAPI(urlAPI,"atlantic")
}
function southAtlantic(){
	urlAPI="https://ocean.amentum.io/rtofs?latitude=-28.261132719958404&longitude=-19.763187441126796&depth=30"
	consultAPI(urlAPI,"satlantic")
}
function indic(){
	urlAPI="https://ocean.amentum.io/rtofs?latitude=-21.395068010482454&longitude=87.02495265112208&depth=30"
	consultAPI(urlAPI,"indic")
}
function antartic(){
	urlAPI="https://ocean.amentum.io/rtofs?latitude=-68.05009886210156&longitude=-163.81674431555388&depth=30"
	consultAPI(urlAPI,"antartic")
}

function changeTemp(temperatura,nameOcean){
	temperatura=parseFloat(temperatura).toFixed(2)
	if(nameOcean=="pacific"){
		tempDocument.textContent="Temperatura del Oceano Pacifico: "+temperatura+"°C"
		image=document.getElementById("map")
		map.src="./img/pacific.png"
	}
	if(nameOcean=="spacific"){
		tempDocument.textContent="Temperatura del Oceano Pacifico Sur: "+temperatura+"°C"
		image=document.getElementById("map")
		map.src="./img/spacific.png"
	}
	if(nameOcean=="atlantic"){
		tempDocument.textContent="Temperatura del Oceano Atlantico: "+temperatura+"°C"
		image=document.getElementById("map")
		map.src="./img/atlantic.png"
	}
	if(nameOcean=="satlantic"){
		tempDocument.textContent="Temperatura del Oceano Atlantico Sur: "+temperatura+"°C"
		image=document.getElementById("map")
		map.src="./img/satlantic.png"
	}
	if(nameOcean=="indic"){
		tempDocument.textContent="Temperatura del Oceano Indico: "+temperatura+"°C"
		image=document.getElementById("map")
		map.src="./img/indic.png"
	}
	if(nameOcean=="antartic"){
		tempDocument.textContent="Temperatura del Oceano Antartic: "+temperatura+"°C"
		image=document.getElementById("map")
		map.src="./img/antartic.png"
	}
}