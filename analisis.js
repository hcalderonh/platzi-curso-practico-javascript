// Helpers
function calcularMediaAritmetica(lista){
 
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista  = sumaLista/ lista.length;
    
    return promedioLista;
}

//Cañculadora de medianas
//Mediana General
const salariosPer = Peru.map(
    function(persona){
        return persona.salary;
    }
);

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad] -1;
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const salariosPeSorted = salariosPer.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numero){
    return (numero % 2 === 0);
}

const medianaGeneralPer = medianaSalarios(salariosPeSorted);

// Mediana del top 10%

const spliceStart = parseInt((salariosPeSorted.length * 90) / 100);
const spliceCount = salariosPeSorted.length - spliceStart;

const saliriosPerTop10 = salariosPeSorted.splice(
    spliceStart,
    spliceCount
);

const medianatop10Per = medianaSalarios(saliriosPerTop10);


console.log({
    medianaGeneralPer,
    medianatop10Per
});
    