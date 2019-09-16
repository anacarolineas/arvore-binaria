
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
    if (tree == undefined) {
        return "Elemento não encontrado."
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

let deleteElemento = function(tree, valor) {
    return valor
}

let tree = new Node();
insert(tree, 10);
insert(tree, 20);
insert(tree, 5);
insert(tree, 1);
insert(tree, 6);

console.log(tree);
console.log("Elemento de busca: " + searchElemento(tree, 2));
console.log("Elemento deletado: " + deleteElemento(tree, 1));
//console.log(tree);

