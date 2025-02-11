<?php
//classe
class ContaBancaria{

//atributos
public $numero;
public $nome;
public $saldo;

//métodos
public function saque(){

}
public function deposito(){

}
}
//Instanciando meus objetos
    //1 objeto
$contaNick = new ContaBancaria();
$contaNick->numero ="171.827.200-75";
$contaNick->nome = "Nicolli";
$contaNick->saldo = "432";

$contaNick->deposito = "135";

echo $contaNick ->deposito();

    //2 objeto
$contaAtha = new ContaBancaria();
$contaAtha->numero ="175.207.534-68";
$contaAtha->nome = "Agatha";
$contaAtha->saldo ="1200"

$contaAtha->saque = "50";

echo $contaAtha ->saque();

    //3 objeto
$contaBa = new ContaBancaria();
$contaBa->numero ="719.304.575.24";
$contaBa->nome ="Barabara";
$contaBa->saldo = "5689";

$contaBa->saque = "150";

echo $contaBa ->saque();
?>