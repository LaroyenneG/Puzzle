<?php
/**
 * Created by PhpStorm.
 * User: guillaume
 * Date: 02/03/17
 * Time: 16:08
 */

$link=mysqli_connect("localhost", "root", "Scipion90*");

if (!$link) {
    echo "Connexion impossible : ".mysqli_error($link);
}

$database=mysqli_select_db($link, "taquin");

if(!$database){
    echo "Erreur de connexion à la base";
}

