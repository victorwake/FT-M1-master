"use strict";

/*
Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  -post-order: mira primero el valor de la izquierda, luego el de la derecha y por ultimo el de la raiz.
  -pre-order: mira primero el nodo de la raiz, luego al de la izquierda y luego a el de la derecha.
  -in-order: antes de ver la raiz, va y mira el priemero de la izquierda, luego vuelve a la raiz y ve ese, y luego va a miar el de la derecha.

-orden en que se descubren los nodos en DFS:

                [1]
          [2]   [7]   [8]
    [3]   [6]         [9]  [12]
    [4]   [5]         [10]  [11]    

-el orden en que se descubren los nodos en BFS:

                [1]
          [2]   [3]   [4]
    [5]   [6]         [7]  [8]
    [9]   [10]         [11]  [12]   

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree{

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.length = 1;
  }

  //size: retorna la cantidad total de nodos del árbol
  size(){
    // if (!this.left && !this.right) return 1;
    // if (this.left && !this.right) return 1 + this.left.size();
    // if (!this.left && this.right) return 1 + this.right.size();
    // if (this.left && this.right)
    //   return 1 + this.right.size() + this.left.size();
      var contador = 1;
      if (this.right) {
        contador += this.right.size();
      }
      if (this.left) {
        contador += this.left.size();
      }
      return contador;
  }

  //insert: agrega un nodo en el lugar correspondiente
  insert(newValue){
    if (this.value > newValue) {
      if (!this.left) {
        this.left = new BinarySearchTree(newValue);
      } else {
        this.left.insert(newValue);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(newValue);
      } else {
        this.right.insert(newValue);
      }
    }
    this.length++;
  }

  //contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  contains(value){
    if (this.value === value) return true;

    if (this.left?.contains(value)) return true;

    if (this.right?.contains(value)) return true;

    return false;
  }

  // depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  //según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  depthFirstForEach(raiz, ordenar = "in-order"){
    if (ordenar === "in-order") {
      this.left?.depthFirstForEach(raiz, ordenar);
      raiz(this.value);
      this.right?.depthFirstForEach(raiz, ordenar);
    } else if (ordenar === "pre-order") {
      raiz(this.value);
      this.left?.depthFirstForEach(raiz, ordenar);
      this.right?.depthFirstForEach(raiz, ordenar);
    } else if (ordenar === "post-order") {
      this.left?.depthFirstForEach(raiz, ordenar);
      this.right?.depthFirstForEach(raiz, ordenar);
      raiz(this.value);
    }
  }

//- breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  breadthFirstForEach(raiz, arbol = []){
    raiz(this.value);
    if (this.left) arbol.push(this.left);
    if (this.right) arbol.push(this.right);
    if (arbol.length) {
      arbol.shift().breadthFirstForEach(raiz, arbol);
    }
  }

}

//----------------------------------------------------------------//
//Echo con funciones
//----------------------------------------------------------------//

// function BinarySearchTree(){

// }


module.exports = BinarySearchTree;


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
