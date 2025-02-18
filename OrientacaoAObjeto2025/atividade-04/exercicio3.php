<?php
class Veiculo{
    //atributos
    public $marca;
    public $modelo;
    private $velocidade;

    //métodos
    public function getVelocidade(){
        return $this->velocidade;
    }

    public function setVelocidade($v){
        $this->velocidade =  $v;
    }
}

class Carro extends Veiculo{
    public function acelerar(){
        echo "O carro acelera 30km";
    }
}

class Moto extends Veiculo{
    public function acelerar(){
        echo " A moto acelera 50km";
    }
}

//instancie objeto
$carro = new Carro();
$carro ->marca = "mercedes";
$carro ->modelo = "mercedes-suv";
$carro ->acelerar();
echo '<br>';

$moto = new Moto();
$moto ->marca = "bmw";
$moto ->modelo = "G 310 GS";
$moto ->acelerar();
?>