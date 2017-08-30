var images = ["assets/img/1.png", "assets/img/2.png",
    "assets/img/3.png", "assets/img/4.jpg", "assets/img/5.png",
    "assets/img/6.png"];

var tablero = document.getElementById("table-game");
var table = document.createElement("table");
table.border = "1";

var cont=0;
for (var i = 0; i < 3; i++) {
    var filas = document.createElement("tr");

    for (var j = 0; j < 4; j++) {
        var celda = document.createElement("td");
        var img= document.createElement("img");
        img.setAttribute("class", "background");
        img.setAttribute("click"," borrar(this)");
        
        var imgContent= document.createElement("img");
        imgContent.setAttribute("class", "image");
        imgContent.src = images[cont];
        celda.appendChild(img);
        celda.appendChild(imgContent);
        cont++;
        
        
        filas.appendChild(celda);
    }
    table.appendChild(filas);
}
tablero.appendChild(table);


function borrar(background){
    background.style.visibility = "hidden";
}
/*var imgSelected = [];
for (var i = 0; i < 7; i++) {
    var randomIMG = Math.floor(Math.random(images.length));
    var img =  images[randomIMG];
    imgSelected.push(img);
    imgSelected.push(img);
    // Remove from faces array so we don't re-pick
    images.splice(randomIMG, 1);
}
*/

/*
console.log(imgSelected);
var tablero = document.getElementById("table-game");
var table = document.createElement("table");
table.border = "1";

for (var i = 0; i < 3; i++) {
    var filas = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
        var celda = document.createElement("td");
        celda.setAttribute("class","background");
        celda.setAttribute("id",i);
        celda.addEventListener("click",function(){
            var img= document.createElement("img");
            img.setAttribute("class", "image");
            img.src = imgSelected[i];
            event.target.setAttribute("class", "white");
            event.target.appendChild(img);
        });
        filas.appendChild(celda);
    }
    table.appendChild(filas);
}
tablero.appendChild(table);*/