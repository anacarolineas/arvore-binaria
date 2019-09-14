
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
    if (!tree.hasOwnProperty('valor')) { //Se não tiver o 'valor', insere ele na raiz
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
    if (!tree.valor || tree.valor === valor ) {
        return tree.valor     
    }
    if (valor < tree.valor) {
        return searchElemento(tree.treeLeft, valor)
    }
        return searchElemento(tree.treeRight, valor)  
}

let deleteElemento = function(tree, valor) {
    if (tree == null) {
        return "Árvore Vazia"
    }
    if (valor < tree.valor) {
        tree.treeLeft = splice(tree.treeLeft, valor);
    }
    tree.treeRight = splice(tree.treeRight, valor);
}

let tree = new Node();
insert(tree, 10);
insert(tree, 20);
insert(tree, 5);
insert(tree, 1);
insert(tree, 6);

console.log(tree);
console.log("Elemento de busca encontrado: " + searchElemento(tree, 6));
console.log("Elemento deletado:" + deleteElemento(tree, 5));
console.log(tree);

