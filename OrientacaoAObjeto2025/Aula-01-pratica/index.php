<?php

class Veiculo{ //Classe

    //Atributos
    public $marca;
    protected $seguro;
    private $renavam;

    //Método
    public function ligar(){ //ação
        return "O" .$this ->modelo. "";
    }
}

//Instanciando meus objetos
$polo = new Veiculo(); //transforma em objeto
$polo->marca ="Wolkswagem";
$polo->renevem ="123123123";




class Pessoa{
    public $nome; //atributo
    public function falar(){ //metodo
        return "O meu nome é". $this->nome;
    }
}
?>