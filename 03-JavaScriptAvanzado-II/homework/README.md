# Homework JavaScript Avanzado II

## Closures

Resolvé los ejercicios en el archivo `homework.js`.
Para ejecutar los test, anda a esta carpeta y ejecutá:
`npm install` y luego:
`npm test`.

## Extra Credit

### OOP - Prototypes

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).


```javascript
 function repeatify(numero) {
        if (numero < 0) {
            return "";
        } else {
            return this.repeat(numero);
        }
}

String.prototype.repeatify = repeatify;
console.log('hola'.repeatify(3));   //holaholahola
```

### Shapes

* Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
* Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
* Agregá un nuevo método al prototipo llamado `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
 let shape = {
        type: "",
        getType: function () {
            return this.type;
        }
    };
function triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "Triangle";
}
triangle.prototype = shape;
triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}



> var t = new Triangle(1, 2, 3);
> t instanceof Triangle
// true
> Shape.prototype.isPrototypeOf(t);
// true
> t.getPerimeter();
// 6
> t.getType();
// "Triangle"
```

* Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
function circle(radius) {
    this.radius = radius;
    this.type = "Circle";
}
circle.prototype = shape;
circle.prototype.getPerimeter = function () {
    return 2 * Math.PI * this.radius;
}


> var c = new Circle(2);
> c instanceof Circle
// true
> Shape.prototype.isPrototypeOf(c);
// true
> c.getPerimeter();
// 12.566370614359172
> c.getType();
// "Circle"
```

* Creá una última `shape` llamada `Square`.
* Agregá el método `getArea` de todas las `shape`s.

//* 

```javascript

function square(side) {
    this.side = side;
    this.type = "Square";
    }
    square.prototype = shape;
    square.prototype.getArea = function () {
    return this.side * this.side;
    }

    var cuadrado = new square(22);
    console.log(cuadrado.getArea() + ' area');


