<?php

class Pessoa{
    public $nome;
    public $idade;

    
}

class Funcionario extends Documento{
    protected $salario;
}
public function calcularBonus(){

}


class Gerente extends Funcionario{
    return calcularBonus(){
        "20%"
    }
}

class Desenvolvedor extends Funcionario{
    return calcularBonus(){
        "10%"
    }
}

//objeto
$gerente = new Gerente();

$salario->modelo = "divisórias";
$salario->tamanho = "grande";


$estojo->organizar = "objetos";
echo $estojo ->organizar();
?>