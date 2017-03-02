
function createListener() {
    document.onkeydown=function(e){
        switch(e.which){
            case 38:
                moveCaseByKey(1);
                break;
            case 40:
                moveCaseByKey(4);
                break;
            case 39:
                moveCaseByKey(2);
                break;
            case 37:
                moveCaseByKey(3);
                break;
        }

        dispTaquin();

        if(isWIn()){
            activeTime=false;
            var saveTime=convertTimeString();

            window.setTimeout("saveWinner("+saveTime+")", 1000);
        }

    }

}


function saveWinner(time) {
    var username=prompt("Bravo vous avez gagné en "+time+" secondes\n   Entrez votre nom : ","");
    if(username!=null){
        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("POST","../Serveur/saveData.php",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("nomJoueur="+username+"&timeGame="+time+"&sizeGrid="+sizeGrid);
    }
}


function init() {
    selectImage(0);
    createGrid(3);
}

function initTime() {
    activeTime=true;
    time=0;
    dispTime();
}



function clicNewGame() {
    activeTime=false;
    init();
    var game = document.getElementById("game");
    game.innerHTML="";

    document.getElementById("timer").innerHTML ="";

    dispMenuSize();
}

function clicHighScores() {
    document.location.href="Scores.html";
}

function clicSizeGrid(s) {
    createGrid(s);
    dispMenuPhoto();
}

function clicPhoto(f) {

    console.log(grid);

    var node = document.getElementById("initGame");
    node.innerHTML="";

    selectImage(f);

    dispTaquin();

    window.setTimeout(runGame, 5000);
}

function runGame() {
    randomGrid();

    initTime();

    dispTaquin();

    createListener();
}