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

var triangulo = new triangle(4, 5, 5);
console.log(triangulo.getPerimeter());
console.log(triangulo.getType());


function circle(radius) {
this.radius = radius;
this.type = "Circle";
}
circle.prototype = shape;
circle.prototype.getPerimeter = function () {
return 2 * Math.PI * this.radius;
}

circle.prototype.getArea = function () {
return Math.PI * this.radius * this.radius;
}

var circulo = new circle(22);
console.log(circulo.getPerimeter() + ' perimetro');
console.log(circulo.getArea() + ' area');
console.log(circulo.getType());

function square(side) {
    this.side = side;
    this.type = "Square";
    }
    square.prototype = shape;
    square.prototype.getArea = function () {
    return this.side * this.side;
    }

    square.prototype.getPerimeter = function () {
    return this.side * 4;
    }

    var cuadrado = new square(22);
    console.log(cuadrado.getArea() + ' area');
    console.log(cuadrado.getPerimeter() + ' perimetro');
    


