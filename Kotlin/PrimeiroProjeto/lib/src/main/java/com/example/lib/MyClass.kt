package com.example.lib

class MyClass {
}

fun main() {

    do {
        var alunos = mutableListOf<String>()
        var opcao: Int?
        println("\n===== MENU =====")
        println("1 - Cadastrar aluno")
        println("2 - Listar alunos")
        println("3 - Buscar aluno")
        println("4 - Remover aluno")
        println("0 - Sair")
        print("Escolha uma opção: ")
        val input = readLine()
        opcao = input?.toIntOrNull()
        when (opcao) {
            1 -> {
                println("Primeira opção")
                var nome = readLine()  //ler variável nome
                if (!nome.isNullOrBlank()) {
                    alunos.add(nome) //adiviona nome na variável alunos
                } else {
                    print("Nome invalido")
                }
            }

            2 -> {
                println("Segunda opção")
                println("Lista de alunos")
                alunos.forEach{nome ->
                    println(nome)
                }

            }

            3 -> {
                println("Terceira opção")
                println("Buscar alunos: ")
                var nomeBusca = readLine()
                if (!nomeBusca.isNullOrBlank()){
                    println(alunos.contains(nomeBusca))
                }

            }

            4 -> {
                println("Quarta opção")
                print("Selecione o aluno que será removido: ")
                var nomeDelete = readLine()
                if (!nomeDelete.isNullOrBlank()){
                    alunos.remove(nomeDelete)
                }

            }


        }
    } while (opcao != 0)
    println("Sistema encerrado")
}
