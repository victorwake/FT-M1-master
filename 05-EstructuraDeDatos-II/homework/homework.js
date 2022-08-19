"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una 
    lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser 
  un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el 
  segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número 
  par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
  constructor() {
  this.head = null;
  }

  add(value){
      const newNode = new Node(value);
      if(!this.head){
          this.head = newNode;
          return;
      }
      let current = this.head;
      while(current.next){
          current = current.next;
      }
      current.next = newNode;
  }

  remove(){
      if(!this.head){
          return null;
      }else
      if(!this.head.next){
          const value = this.head.value;
          this.head = null;
          return value;
      }
      let current = this.head;
      while(current.next.next){
          current = current.next;
      }
      const value = current.next.value;
      current.next = null;
      return value;
  }

  

  search(value) {
  let current = this.head;
  while (current) {
      if (typeof value === "function" && value(current.value)) {
      return current.value;
      } else if (current.value === value) {
      return current.value;
      }
      current = current.next;
  }
  return null;
  }

  getAll(){
  let current = this.head;
  let array = [];
  while (current) {
      array.push(current.value);
      current = current.next;
  }
  return array;
  }
}

class Node {
  constructor(value) {
  this.value = value;
  this.next = null;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function LinkedList() {
//   this._length = 0;
//   this.head = null;
// }

// function Node(value) {
//   this.value = value;
//   this.next = null;
// }

// LinkedList.prototype.add = function (value) {
//   var nodo = new Node(value); // Guardamos el nodo en una variable
//   var nodoActual = this.head; // Guardamos el nodo actual en una variable para no perder la referencia

//   if (!nodoActual) {
//     // Si la lista esta vacia
//     this.head = nodo; // Ponemos el nodo en la lista
//     this._length++; // Aumantamos la longitud de la lista
//     return nodo; // retornamos el nodo
//   }

//   if (nodoActual.next) {
//     // Si el nodo actual tiene un next que no es null
//     nodoActual = nodoActual.next; // Movemos el nodo actual a la siguiente posicion
//   }

//   nodoActual.next = nodo; // insertamos el nuevo nodo en el next que tenga null
//   this._length++; // Aumentamos la longitud de la lista
//   return nodo; // Retornamos nodo
// };

// LinkedList.prototype.remove = function () {
//   //  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);

//   var current = this.head;

//   if (this._length === 0) return null;

//   if (this._length === 1) {
//     let elementRemoved = this.head.value;
//     this.head = null;
//     this._length--;
//     return elementRemoved;
//   }

//   while (current.next.next) {
//     current = current.next;
//   }

//   let elementRemoved = current.next.value;
//   current.next = null;
//   this._length--;
//   return elementRemoved;
// };

// LinkedList.prototype.search = function (value) {
//   let nodoActual = this.head;

//   if (!this.head) {
//     return null;
//   }

//   // Si la busqueda conicide con un valor que pasaron como parametro

//   while (nodoActual) {
//     if (nodoActual.value === value) return nodoActual.value;

//     if (typeof value === "function") {
//       if (value(nodoActual.value)) {
//         return nodoActual.value;
//       }
//     }
//     nodoActual = nodoActual.next;
//   }
//   return null;

// };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// En forma de funcion

// function LinkedList() {
//   this.head = null;
// }
// function Node(value) {
//   this.value = value;
//   this.next = null;
// }
// LinkedList.prototype.add = function(data){
//   let node = new Node(data);
//   //node = {value: data, next: null}

// let current = this.head;
// if(!current){
//   //if(!this.head)
//   //if(this.head === null)
//   //if(current.null)
//   this.head = node;
//   this._length++;
//   return node;
// }
// while(current.next){
//   // while(current.next !== null)
//   current = current.next;
// }
// current.next = node;
// this._length++;
// return node;
// }
// //agr elim principio
// //agr elim final
// //agr elim medio según condicion
// //agr elim un elemento en posicion x

// LinkedList.prototype.remove = function(){
//   //eliminar el ultimo nodo de la list
//   //-> head -> null
//   let current = this.head;
//   if(current === null) return null;
//   //if(this._length === 0) return null;
//   else if(current && !current.next){
//     let aux = current.value; //aux = 1
//     this.head = null;
//     this.length--;
//     return aux; //1
//   }
// while(current.next.next){
//   current = current.next;
// }
// let aux = current.next.value;
// current.next = null;
// this._length--;
// return aux;
// }
// LinkedList.prototype.getAll = function(){
//   current = this.head;
//   if(!current){
//     console.log("La lista esta vacia");
//     return null;
//   }
//   while(current){
//     console.log(current.value);
//     current = current.next;
//   }
// }

// LinkedList.prototype.search = function(value){
//   if(this.head === null) return null;
//   let current = this.head;
//   while(current){
//     if(current.value === value) return current.value;
//     else if (typeof value == 'function'){
//       if(value(current.value)){
//         return current.value;
//       }
//     }
//     current = current.next;
//   }
//   return null;

// };

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es 
  decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato 
  clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos 
  los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad 
  de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input 
  alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt 
    de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta 
    manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando 
  al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto 
  de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa 
  clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con 
hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), 
se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable{
  constructor(){
  this.numBuckets = 35;
  this.buckets = [];
  }

  hash(key) {
      let hash = 0;
      for(let i = 0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i)) % this.numBuckets;
      }
      return hash;
  }

  set(key, value) {
      if (typeof key !== 'string') throw new TypeError('key must be a string');
      let index = this.hash(key);
      if(!this.buckets[index]){
          this.buckets[index] = {};
      }
      this.buckets[index][key] = value;
  }

  get(key) {
      let index = this.hash(key);
      return  this.buckets[index][key];
  }

  hasKey(key) {
      let index = this.hash(key);
      return !!this.buckets[index][key];

  }
}

// function HashTable() {
//   this.numBuckets = 35;
//   this.buckets = [];
// }
//   HashTable.prototype.hash =  function(key){
//     let sum = 0;
//     for (let i = 0; i < key.length; i++) {
//       sum+=key.charCodeAt(i);
//     }
//     return sum % this.numBuckets; //sum % 35
//   };
// HashTable.prototype.set = function(key, value){
//   if(typeof key !== 'string') throw new TypeError('Keys must be strings');
//   let i = this.hash(key); //donde guardarlo
//   if(this.buckets[i] === undefined){   // Si el buckets en el indice esta vacio
//     this.buckets[i] = {};              // Creamos un objeto en el indice
//   }
//   this.buckets[i][key] = value;    // Guardamos en el indice la llave y el valor
//   // this.bucket = []
//   //i = 3;
//   // this.buckets[3] = [,,,{}]
// };
// HashTable.prototype.get = function(key){
// let i = this.hash(key); // 3 // Llama al metodo hash para obtener el valor del indice
// // this.buckets[3][hola] = [,,,{hola:value}]
// return this.buckets[i][key];
// };
// HashTable.prototype.hasKey = function(key){
//   let i = this.hash(key);
//   return this.buckets[i].hasOwnProperty(key);
// };

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
