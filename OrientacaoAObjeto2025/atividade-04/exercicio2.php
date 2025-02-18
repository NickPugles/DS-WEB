<?php
abstract class Animal{

    public function fazerSom(){}
}

class Cachorro extends Animal{
    public function fazerSom(){
        echo "au au";
    }
}
echo '<br>';
class Gato extends Animal{
    public function fazerSom(){
        echo "miau";
    } 
}
echo '<br>';
class Passaro extends Animal{
    public function fazerSom(){
        echo "canta";
    } 
    public function mover(){
        return "voar";
    }
}
//instancie objeto
$cachorro = new Cachorro();
$cachorro ->fazerSom();
echo '<br>';

$gato = new Gato();
$gato ->fazerSom();
echo '<br>';

$passaro = new Passaro();
$passaro ->fazerSom();
$passaro ->mover();

?>