
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

let insert = function (tree, valor) {
    if (!tree.hasOwnProperty('valor')) { //Se 'valor' estiver vazio, insere ele na raiz
        return tree.setValue(valor);
    }
    else {
        while (true) {
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

let searchElemento = function (tree, valor) {
    if (tree == undefined) {
        return "Elemento não encontrado"
    }
    if (!tree.valor || tree.valor === valor) {
        return tree.valor
    }
    if (valor < tree.valor) {
        return searchElemento(tree.treeLeft, valor)
    }
    return searchElemento(tree.treeRight, valor)
}

let searchElementoParaExcluir = function (tree, valor, pai = undefined) {
    if (tree == undefined) {
        return "Elemento não encontrado"
    }
    if (!tree.valor || tree.valor === valor) {
        return {
            pai: pai,
            self: tree,
        }
    }
    if (valor < tree.valor) {
        return searchElementoParaExcluir(tree.treeLeft, valor, tree)
    }
    return searchElementoParaExcluir(tree.treeRight, valor, tree)
}

let buscaMenor = function(no_raiz, pai = undefined){
    if(no_raiz == undefined){
        return false;
    }

    if(no_raiz.treeLeft == undefined){
        
        return {
            self: no_raiz,
            pai: pai
        };
    }else{
        return buscaMenor(no_raiz.treeLeft, no_raiz);
    }
}

let deleteElemento = function (tree, valor) {
    if (tree == null) {
        return "Árvore Vazia"
    }

    //busca nó
    let no_excluir = searchElementoParaExcluir(tree, valor);

    // verifica se é uma folha
    if (no_excluir.self.treeLeft == undefined && no_excluir.self.treeRight == undefined) {

        // ve se o filho esta na direita ou esquerda
        if (no_excluir.pai.treeLeft === no_excluir.self) {
            no_excluir.pai.treeLeft = undefined;
        } else {
            no_excluir.pai.treeRight = undefined;
        }
    }
    //verifica se tem 1 filho à esquerda
    if (no_excluir.self.treeRight == undefined && no_excluir.self.treeLeft != undefined) {

        //verifica se esta a direita ou a esquerda
        if(no_excluir.pai.valor > no_excluir.self.valor){
            //filho a esquerda
            no_excluir.pai.treeLeft = no_excluir.self.treeLeft;
        }else{
            no_excluir.pai.treeRight = no_excluir.self.treeLeft;
        }
        return no_excluir.self.valor;

    }

    // verifica se tem um filho a direita
    if (no_excluir.self.treeRight != undefined && no_excluir.self.treeLeft == undefined) {

        //verifica se esta a direita ou a esquerda
        if(no_excluir.pai.valor > no_excluir.self.valor){
            //filho a esquerda
            no_excluir.pai.treeLeft = no_excluir.self.treeRight;
        }else{
            no_excluir.pai.treeRight = no_excluir.self.treeRight;
        }
        return no_excluir.self.valor;

    }
       
    // se tem dois filhos
    if (no_excluir.self.treeRight != undefined && no_excluir.self.treeLeft != undefined) {
        let menor = buscaMenor(no_excluir.self.treeRight);

        // remove o menor
        deleteElemento(tree, menor.self.valor);

        // console.log(no_excluir.self);
        menor.self.treeRight = no_excluir.self.treeRight;
        menor.self.treeLeft = no_excluir.self.treeLeft;
        //verifica se esta a direita ou a esquerda
        if(no_excluir.pai.valor > no_excluir.self.valor){
            //filho a esquerda
            no_excluir.pai.treeLeft = menor.self;
        }else{
            no_excluir.pai.treeRight = menor.self;
        }
        return no_excluir.self.valor;
    }
        
}

let tree = new Node();
insert(tree, 10);
insert(tree, 20);
insert(tree, 5);
insert(tree, 1);
insert(tree, 8);
insert(tree, 7);
insert(tree, 9)
insert(tree, 6);
// deleteElemento(tree, 6);


console.log(tree);
console.log("Elemento deletado:" + deleteElemento(tree, 5));
console.log("Elemento de busca encontrado: " + searchElemento(tree, 9));

