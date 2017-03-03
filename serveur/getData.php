<?php

include "config.php";

if(!empty($_GET["sizeGrid"])){

    $sizeGrid=htmlentities($_GET["sizeGrid"]);

    $req = mysqli_query($link, "SELECT * FROM joueur WHERE joueur.sizeGrid=".$sizeGrid." ORDER BY joueur.timeGame;");

    header('Content-type: text/xml');

    echo "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>";
    echo "<RESULT>";

    $count=0;
    while($row = mysqli_fetch_array($req)) {
        echo "<SCORE>";
        echo "<LOGIN>".$row['nomJoueur']."</LOGIN>";
        echo "<TIME>".$row['timeGame']."</TIME>";
        echo "</SCORE>";

        $count++;
        if($count>=3){
            break;
        }
    }
    echo "</RESULT>";

    $req->close();


}else{
    echo "error champs invalid";
}

mysqli_close($link);

