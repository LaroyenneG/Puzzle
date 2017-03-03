<?php

include "config.php";

if(!empty($_POST["nomJoueur"]) && !empty($_POST['timeGame']) && !empty($_POST["sizeGrid"])){

    $nomJoueur=htmlentities($_POST["nomJoueur"]);
    $timeGame=htmlentities($_POST['timeGame']);
    $sizeGrid=htmlentities($_POST["sizeGrid"]);

    $reponse = mysqli_query($link,"INSERT INTO joueur VALUES (0,'".$nomJoueur."', ".$timeGame.", ".$sizeGrid.");");

    echo $reponse;

}else{
    echo "error champs invalid";
}

mysqli_close($link);