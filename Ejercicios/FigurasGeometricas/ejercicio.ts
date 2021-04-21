//Punto.ts
interface FiguraGeometrica {
    CalcularArea(): void;
    CalcularPerimetro(): void;
    CalcularVolumen(): void;
}

class Circulo implements FiguraGeometrica{
    constructor(private radio:number) {}
        
    CalcularArea(){
        let area = Math.PI* ((this.radio)^2)
        console.log(`Area: (${area})`);
    }
    CalcularPerimetro(){
        let p = 2* 3.14* this.radio
        console.log(`Perimetro: (${p})`);
    }
    CalcularVolumen(){
        console.log("El circulo no posee Volumen");
    }
}

class Cuadrado implements FiguraGeometrica{
    constructor(private lado:number) {}
        
    CalcularArea(){
        let area = ((this.lado)^2)
        console.log(`Area: (${area})`);
    }
    CalcularPerimetro(){
        let p = 4* this.lado
        console.log(`Perimetro: (${p})`);
    }
    CalcularVolumen(){
        console.log("El Cuadrado no posee Volumen");
    }
}

class Rectangulo implements FiguraGeometrica{
    constructor(private base:number,private altura:number ) {}
        
    CalcularArea(){
        let area = (this.base*this.altura)
        console.log(`Area: (${area})`);
    }
    CalcularPerimetro(){
        let p = (2*this.base)+(this.altura*2)
        console.log(`Perimetro: (${p})`);
    }
    CalcularVolumen(){
        console.log("El Rectangulo no posee Volumen");
    }
}

class Triangulo implements FiguraGeometrica{
    constructor(private a:number,private b:number,private c:number,private base:number, private altura:number) {}
        
    CalcularArea(){
        let area = ((this.base* this.altura)/2)
        console.log(`Area: (${area})`);
    }
    CalcularPerimetro(){
        let p = this.a + this.b+ this.c
        console.log(`Perimetro: (${p})`);
    }
    CalcularVolumen(){
        console.log("El Triangulo no posee Volumen");
    }
}
class Esfera implements FiguraGeometrica{
    constructor(private diametro:number) {}
        
    CalcularArea(){
        let area = 4*Math.PI*((this.diametro/2)^2)
        console.log(`Area: (${area})`);
    }
    CalcularPerimetro(){
        let p = this.diametro * Math.PI
        console.log(`Perimetro: (${p})`);
    }
    CalcularVolumen(){
        let v = ( (4/3) * Math.PI * ((this.diametro/2)^3) )
        console.log(`Perimetro: (${v})`);
    }
}
class Conos implements FiguraGeometrica{
    constructor(private radio:number, private altura:number, private generatriz:number) {}
        
    CalcularArea(){
        let area = ( (Math.PI * this.radio * this.generatriz) + (Math.PI * (this.radio)^2) )
        console.log(`Area: (${area})`);
    }
    CalcularVolumen(){
        let p = ( Math.PI * ((this.radio)^2) * this.altura * (1/3))
        console.log(`Perimetro: (${p})`);
    }
    CalcularPerimetro(){
        console.log("Se requiere mayor informacion para calcular el perimetro")
    }
}

class Cilindro implements FiguraGeometrica{
    constructor(private radio:number,private altura:number) {}
         
    CalcularArea(){
        let area = (( 2 * Math.PI * this.radio) * (this.radio + this.altura))
        console.log(`Area: (${area})`);
    }
    CalcularPerimetro(){
        let p = ( 2* Math.PI * this.radio)
        console.log(`Perimetro: (${p})`);
    }
    CalcularVolumen(){
        let v = ( Math.PI * ((this.radio)^2) * this.altura)
        console.log(`Volumen: (${v})`);
    }
}

let forma1: Circulo;
forma1 = new Circulo(5);
console.log("Circulo")
forma1.CalcularArea();
forma1.CalcularPerimetro();
forma1.CalcularVolumen();
let forma2: Cilindro;
forma2 = new Cilindro(5,6);
console.log("Cilindro")
forma2.CalcularArea();
forma2.CalcularPerimetro();
forma2.CalcularVolumen();