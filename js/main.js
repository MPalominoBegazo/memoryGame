var imagenes = [
    ["assets/img/1.png", "assets/img/5.png", "assets/img/2.png", "assets/img/6.png"],
    ["assets/img/3.png", "assets/img/1.png", "assets/img/4.jpg", "assets/img/3.png"],
    ["assets/img/2.png", "assets/img/4.jpg", "assets/img/5.png", "assets/img/6.png"]
];

var arrayCelda = new Array(imagenes.length);
var tablero = document.getElementById("table-game");
var table = document.createElement("table");
table.border = "1";

for (var i = 0; i < arrayCelda.length; i++) {
	arrayCelda[i] = new Array(imagenes[i].length);
}

console.log(arrayCelda);


for (var i = 0; i < imagenes.length; i++) {
    var filas = document.createElement("tr");
    for (var j = 0; j < imagenes[i].length; j++) {
        var source = imagenes[i][j];
        var celda = document.createElement("td");
        celda.setAttribute("class","background");
        celda.setAttribute("id",i);
        objtCelda = {
            td: celda, x: i, y: j
        }
        celda.addEventListener("click",(event,i,j)=>{
            var img= document.createElement("img");
            img.setAttribute("class", "image");
            img.src=source;
           // console.log(imagenes[this.objtCelda.x][this.objtCelda.y]);
           // console.log(imagenes[objtCelda.y]);
            event.target.setAttribute("class", "white");
            event.target.appendChild(img);
        });
        filas.appendChild(celda);
        arrayCelda[i][j] = celda;
    }
    table.appendChild(filas);
}
tablero.appendChild(table);
