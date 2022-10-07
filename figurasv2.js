//código del cuadrado 
console.group("Cuadrado");

function perimetroCuadrado (lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//código del triangulo
console.group("Triangulo");

const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1 , lado2 , base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
} 
    
console.groupEnd();

//código del círculo
console.group("círculo");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Area
function areaCirculo (radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
    
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
    
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}