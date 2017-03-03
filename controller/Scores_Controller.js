/**
 * Created by guillaume on 02/03/17.
 */

function clicSizeGrid(m) {
    size=m;

    xmlhttp=new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {

                var respData = xmlhttp.responseXML;

                var elements=respData.getElementsByTagName("SCORE");
                var arrayVal=[];
                for (var i=0;i<elements.length;i++){
                    var login=elements[i].getElementsByTagName("LOGIN");
                    var timeGame=elements[i].getElementsByTagName("TIME");

                    arrayVal[i]=[String(login[0].firstChild.nodeValue), String(timeGame[0].firstChild.nodeValue)];
                }
                dispTableScores(arrayVal);
            }
        }
    };

    xmlhttp.open("GET","../serveur/getData.php?sizeGrid="+m,true);
    xmlhttp.send();
}



function clicNewGame() {
    document.location.href="Game.html";
}

function clicHighScores() {
    document.location.href="Scores.html";
}
