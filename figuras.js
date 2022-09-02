//código del cuadrado 
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm") ;

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del trisngulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
    ) ;

    const alturaTriangulo = 5.5;

    console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log("La perímetro del triangulo es: " + perimetroTriangulo + "cm");

    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//código del círculo
console.group("círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("El PI es: " + PI);
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();