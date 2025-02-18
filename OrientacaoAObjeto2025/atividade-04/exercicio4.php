<?php
abstract class Produto{
    public $nome;
    public $preco;
    public $estoque;

    public function getInfor($nome, $preco, $estoque){
        $this ->nome =$nome;
        $this ->preco =$preco;
        $this ->estoque =$estoque;
    }

    public function getNome(){
        return $this ->nome;
    }

    public function getPreco(){
        return $this ->preco;
    }

    public function getEstoque(){
        return $this ->estoque;
    }

    public function calcularDesconto(){

    }
}

class Eletronico extends Produto{
    public function calcularDesconto(){
        $desconto = $this->preco * 0.10; 
        $precoFinal = $this->preco - $desconto;

        
        if ($this->estoque < 5) {
            $descontoExtra = $precoFinal * 0.10; 
            $precoFinal -= $descontoExtra;
        }
        return $precoFinal;
    }
}

class Roupa extends Produto{
    public function calcularDesconto(){
        $desconto = $this->preco * 0.20;
        $precoFinal = $this->preco - $desconto;
    
        if ($this->estoque < 5) {
        $descontoExtra = $precoFinal * 0.10;
        $precoFinal -= $descontoExtra;
        }
        return $precoFinal;
    }
}

//instancie objeto
$eletronico = new Eletronico();
$eletronico ->nome ="celular";
$eletronico ->preco =2.000;
$eletronico ->estoque ="548";
echo $eletronico ->calcularDesconto();
echo '<br>';

$roupa = new Roupa();
$roupa ->nome ="calca";
$roupa ->preco =80.00;
$roupa ->estoque ="178";
echo $roupa ->calcularDesconto();
?>