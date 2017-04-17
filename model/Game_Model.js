/**
 * Created by guillaume on 28/02/17.
 */

var grid;
var sizeGrid;
var image, image_x, image_y;
var time;
var activeTime;


function createGrid(size) {
	sizeGrid=size;
    grid=[];
    var count=1;
    for(var y=0; y<sizeGrid; y++){
        grid[y]=[];
        for(var x=0; x<sizeGrid; x++){
            grid[y][x]=count;
            count++;
        }
    }
}


function isWIn() {
    var list=[];
    var i=0;
    for(var y=0; y<sizeGrid; y++){
        for(var x=0; x<sizeGrid; x++){
            list[i]=grid[y][x];
            i++;
        }
    }

    for(var t=0; t<list.length-1; t++){
        if(list[t]>list[t+1]){
            return false;
        }
    }

    return true;
}

function verifCoordo(x) {
    return !(x < 0 || x >= sizeGrid);
}

function moveCase(s,d) {

    if(!verifCoordo(s[1]) || !verifCoordo(s[0])){
        return;
    }
    if(!verifCoordo(d[1]) || !verifCoordo(d[0])){
        return;
    }

    var tpm=grid[s[1]][s[0]];
    grid[s[1]][s[0]]=grid[d[1]][d[0]];
    grid[d[1]][d[0]]=tpm;

}

function moveCaseByKey(c) {

	/*
	 1
	2 3
	 4
	 */
    var coordo=findEmptyCase();

    switch(c){
        case 1:
            moveCase(coordo, [coordo[0], coordo[1]-1]);
            break;
        case 2:
            moveCase(coordo, [coordo[0]+1, coordo[1]]);
            break;
        case 3:
            moveCase(coordo, [coordo[0]-1, coordo[1]]);
            break;
        case 4:
            moveCase(coordo, [coordo[0], coordo[1]+1]);
            break;
    }
}

function findEmptyCase() {

    var coordo=[];

    for(var y=0; y<sizeGrid; y++){
        for(var x=0; x<sizeGrid; x++){
            if(grid[y][x]==sizeGrid*sizeGrid){
                coordo[0]=x;
                coordo[1]=y;
            }
        }
    }

    return coordo;
}


function randomGrid() {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    for(var x=0; x<1000; x++){
        moveCaseByKey(getRndInteger(1,4));
    }
}


function pieceCreator(i) {

    var width=Math.floor(image_x/sizeGrid);
    var height=Math.floor(image_y/sizeGrid);

    var div = document.createElement("div");

    div.style.width = width + "px";
    div.style.height = height + "px";

    if(i!=sizeGrid*sizeGrid){
        div.style.backgroundImage = "url(" + "../Asset/"+image + ")";
    }else {
        div.style.backgroundColor="black";
    }

    var xImage = Math.floor((i-1) / sizeGrid);
    var yImage = ( (i-1) % sizeGrid);

    div.style.backgroundPosition = -yImage * width + 'px ' + -xImage * height + 'px';
    div.style.float = 'left';

    return div;
}

function dispTaquin() {
	var game = document.getElementById("game");

	game.innerHTML="";


    for(var y=0; y<grid.length; y++){
        for(var x=0; x<grid[y].length; x++){
            var node = pieceCreator(grid[y][x]);
            if(x==0){
                node.style.clear = 'left';
            }
            game.appendChild(node);
        }
    }


}

function convertTimeString() {
    return String(time.toFixed(2));
}

function dispTime() {
	var timeString=convertTimeString();

	if(activeTime){
        document.getElementById("timer").innerHTML="<h3>Time : "+timeString+" secondes</h3>";
    }else {
        document.getElementById("timer").innerHTML="";
    }

    time+=0.1;
	if(activeTime){
	    window.setTimeout(dispTime, 100);
    }
}

function dispMenuSize() {
    var node = document.getElementById("initGame");

    node.innerHTML="";


    var menuSize = document.createElement("table");

    var trTitle=document.createElement("tr");

    var th=document.createElement("th");

    th.innerHTML="Taille de la grille";

    trTitle.appendChild(th);

    menuSize.appendChild(trTitle);

    for(var m=2; m<=5; m++){

        var tr1=document.createElement("tr");

        var td1=document.createElement("td");


        var button1=document.createElement("button");

        button1.setAttribute("type","button");
        button1.setAttribute("onClick","clicSizeGrid("+m+")");

        button1.innerHTML=m+" X "+m;

        td1.appendChild(button1);
        tr1.appendChild(td1);
        menuSize.appendChild(tr1);
    }

    node.appendChild(menuSize);
}




function dispMenuPhoto() {
    var node = document.getElementById("initGame");

    node.innerHTML="";

    var menuPhoto = document.createElement("table");

    var trTitle=document.createElement("tr");

    var th=document.createElement("th");

    th.innerHTML="Photos";

    trTitle.appendChild(th);

    menuPhoto.appendChild(trTitle);

    var nameImage= ["Belouga","f 117","Concorde","antonov 225","A380"];

    for(var i=0; i<nameImage.length; i++){

        var tr2=document.createElement("tr");

        var td2=document.createElement("td");

        var button2=document.createElement("button");

        button2.setAttribute("type","button");
        button2.setAttribute("onClick","clicPhoto("+i+")");

        button2.innerHTML=nameImage[i];

        td2.appendChild(button2);
        tr2.appendChild(td2);
        menuPhoto.appendChild(tr2);
    }

    node.appendChild(menuPhoto)

}



function selectImage(i) {
    switch(i){
        case 0:
            image="belouga.jpg";
            image_y=576;
            image_x=1024;
            break;

        case 1:
            image="agfighter.jpg";
            image_x=1024;
            image_y=768;
            break;

        case 2:
            image="concorde.jpg";
            image_x=1280;
            image_y=688;
            break;

        case 3:
            image="An-225.jpg";
            image_x=800;
            image_y=534;
            break;

        case 4:
            image="380-airbus.jpg";
            image_x=1000;
            image_y=495;
            break;
    }
}