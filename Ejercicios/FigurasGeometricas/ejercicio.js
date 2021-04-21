var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
    }
    Circulo.prototype.CalcularArea = function () {
        var area = Math.PI * ((this.radio) ^ 2);
        console.log("Area: (" + area + ")");
    };
    Circulo.prototype.CalcularPerimetro = function () {
        var p = 2 * 3.14 * this.radio;
        console.log("Perimetro: (" + p + ")");
    };
    Circulo.prototype.CalcularVolumen = function () {
        console.log("El circulo no posee Volumen");
    };
    return Circulo;
}());
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
    }
    Cuadrado.prototype.CalcularArea = function () {
        var area = ((this.lado) ^ 2);
        console.log("Area: (" + area + ")");
    };
    Cuadrado.prototype.CalcularPerimetro = function () {
        var p = 4 * this.lado;
        console.log("Perimetro: (" + p + ")");
    };
    Cuadrado.prototype.CalcularVolumen = function () {
        console.log("El Cuadrado no posee Volumen");
    };
    return Cuadrado;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.CalcularArea = function () {
        var area = (this.base * this.altura);
        console.log("Area: (" + area + ")");
    };
    Rectangulo.prototype.CalcularPerimetro = function () {
        var p = (2 * this.base) + (this.altura * 2);
        console.log("Perimetro: (" + p + ")");
    };
    Rectangulo.prototype.CalcularVolumen = function () {
        console.log("El Rectangulo no posee Volumen");
    };
    return Rectangulo;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo(a, b, c, base, altura) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.CalcularArea = function () {
        var area = ((this.base * this.altura) / 2);
        console.log("Area: (" + area + ")");
    };
    Triangulo.prototype.CalcularPerimetro = function () {
        var p = this.a + this.b + this.c;
        console.log("Perimetro: (" + p + ")");
    };
    Triangulo.prototype.CalcularVolumen = function () {
        console.log("El Triangulo no posee Volumen");
    };
    return Triangulo;
}());
var Esfera = /** @class */ (function () {
    function Esfera(diametro) {
        this.diametro = diametro;
    }
    Esfera.prototype.CalcularArea = function () {
        var area = 4 * Math.PI * ((this.diametro / 2) ^ 2);
        console.log("Area: (" + area + ")");
    };
    Esfera.prototype.CalcularPerimetro = function () {
        var p = this.diametro * Math.PI;
        console.log("Perimetro: (" + p + ")");
    };
    Esfera.prototype.CalcularVolumen = function () {
        var v = ((4 / 3) * Math.PI * ((this.diametro / 2) ^ 3));
        console.log("Perimetro: (" + v + ")");
    };
    return Esfera;
}());
var Conos = /** @class */ (function () {
    function Conos(radio, altura, generatriz) {
        this.radio = radio;
        this.altura = altura;
        this.generatriz = generatriz;
    }
    Conos.prototype.CalcularArea = function () {
        var area = ((Math.PI * this.radio * this.generatriz) + (Math.PI * (this.radio) ^ 2));
        console.log("Area: (" + area + ")");
    };
    Conos.prototype.CalcularVolumen = function () {
        var p = (Math.PI * ((this.radio) ^ 2) * this.altura * (1 / 3));
        console.log("Perimetro: (" + p + ")");
    };
    Conos.prototype.CalcularPerimetro = function () {
        console.log("Se requiere mayor informacion para calcular el perimetro");
    };
    return Conos;
}());
var Cilindro = /** @class */ (function () {
    function Cilindro(radio, altura) {
        this.radio = radio;
        this.altura = altura;
    }
    Cilindro.prototype.CalcularArea = function () {
        var area = ((2 * Math.PI * this.radio) * (this.radio + this.altura));
        console.log("Area: (" + area + ")");
    };
    Cilindro.prototype.CalcularPerimetro = function () {
        var p = (2 * Math.PI * this.radio);
        console.log("Perimetro: (" + p + ")");
    };
    Cilindro.prototype.CalcularVolumen = function () {
        var v = (Math.PI * ((this.radio) ^ 2) * this.altura);
        console.log("Volumen: (" + v + ")");
    };
    return Cilindro;
}());
var forma1;
forma1 = new Circulo(5);
console.log("Circulo");
forma1.CalcularArea();
forma1.CalcularPerimetro();
forma1.CalcularVolumen();
var forma2;
forma2 = new Cilindro(5, 6);
console.log("Cilindro");
forma2.CalcularArea();
forma2.CalcularPerimetro();
forma2.CalcularVolumen();
