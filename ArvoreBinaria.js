
class Node {
    tree() {
    this.treeRight = null;
    this.treeLeft = null;
    }
    //método para mostrar valor
    setValue(valor) {
        this.valor = valor;
    }
    //método para obter valor
    getValue() {
        return this.valor;
    }
}

let insert = function(tree, valor) {
    if (!tree.hasOwnProperty('valor')) { //Se 'valor' estiver vazio, insere ele na raiz
      return tree.setValue(valor);
    }
    else {
        while(true) {
            if (valor <= tree.valor) {
                if (tree.treeLeft == null) {
                    tree.treeLeft = new Node(); //nova instância para o objeto
                    return tree.treeLeft.setValue(valor);
                }
                else {
                    tree = tree.treeLeft;
                }
            }
            else {
                if (tree.treeRight == null) {
                    tree.treeRight = new Node();
                    return tree.treeRight.setValue(valor);
                } 
                else {
                    tree = tree.treeRight;
                }
            }
        }
    }
}

let searchElemento = function(tree, valor) {
    if(tree == undefined){
        return "Elemento não encontrado"
    }
    if (!tree.valor || tree.valor === valor ) {
        return tree.valor     
    }
    if (valor < tree.valor) {
        return searchElemento(tree.treeLeft, valor)
    }
        return searchElemento(tree.treeRight, valor)  
}
/*
let remove = function(tree, valor) {
    if(tree == undefined) {
        return "Erro"
    }
    let no = searchElemento(tree, valor);
} */

let searchElementoParaExcluir = function(tree, valor, pai = undefined) {
    if(tree == undefined){
        return "Elemento não encontrado"
    }
    if (!tree.valor || tree.valor === valor ) {
        return {
            pai:pai,
            self: tree,
        }    
    }
    if (valor < tree.valor) {
        return searchElementoParaExcluir(tree.treeLeft, valor, tree)
    }
        return searchElementoParaExcluir(tree.treeRight, valor, tree)  
}

let deleteElemento = function(tree, valor) {
    if (tree == null) {
        return "Árvore Vazia"
    }

    //busca no
    let no_excluir = searchElementoParaExcluir(tree, valor);

    
    // verifica se é uma folha
    if(no_excluir.self.treeLeft == undefined && no_excluir.self.treeLeft == undefined){
        
        // ve se o filho esta na direita ou esquerda
        if(no_excluir.pai.treeLeft === no_excluir.self){
            no_excluir.pai.treeLeft = undefined;
        }else{
            no_excluir.pai.treeRight = undefined;
        }
    }
}

let tree = new Node();
insert(tree, 10);
insert(tree, 20);
insert(tree, 5);
insert(tree, 1);
insert(tree, 6);
// deleteElemento(tree, 6);

console.log(tree);
// console.log("Elemento de busca encontrado: " + searchElemento(tree, 6));
console.log("Elemento deletado:" + deleteElemento(tree, 6));
console.log(tree);

