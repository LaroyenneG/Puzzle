/**
 * Created by guillaume on 02/03/17.
 */

var size;

function dispMenuSize() {

    var node = document.getElementById("navSize");

    node.innerHTML="";

    var menuSize = document.createElement("table");

    var tr=document.createElement("tr");

    for(var m=2; m<=5; m++){

        var td=document.createElement("td");

        var button=document.createElement("button");

        button.setAttribute("type","button");

        button.setAttribute("onClick","clicSizeGrid("+m+")");

        button.innerHTML=m+" X "+m;

        td.appendChild(button);

        tr.appendChild(td);
    }

    menuSize.appendChild(tr);

    node.appendChild(menuSize);
}


function dispTableScores(array) {
    var node =document.getElementById("scoresTable");

    node.innerHTML="";

    var table=document.createElement("table");

    var trTitle=document.createElement("tr");

    trTitle.innerHTML="<th>Rank</th><th>User name</th><th>Time</th>";

    table.appendChild(trTitle);

    for(var i=0; i<array.length; i++){

        var tr=document.createElement("tr");

        var rang=document.createElement("td");

        var login=document.createElement("td");

        var timeGame=document.createElement("td");

        rang.innerHTML=i+1;

        login.innerHTML=array[i][0];

        timeGame.innerHTML=array[i][1];

        tr.appendChild(rang);
        tr.appendChild(login);
        tr.appendChild(timeGame);
        table.appendChild(tr);
    }

    node.appendChild(table);
}

