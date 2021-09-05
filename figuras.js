//Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden:"+ ladoCuadrado +"cm");

function perimetroCuadrado(lado) {

return lado * 4;
} 
//console.log("El perímetro del cuadrado es:" + perimetroCuadrado + "cm");

function areaCuadrado(lado){
return lado * lado;    
} 

//console.log("El área del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd();
//Código del triángilo
console.group("Triángulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log(
  //  "Los lados del triángulo miden: "
    //+ ladoTriangulo1 
    //+"cm, "
    //+ ladoTriangulo2
    //+ "cm, "
    //+ baseTriangulo 
    //+ "cm"
    //);

    
    //console.log("La altura del triángulo es de: " +alturaTriangulo + "cm");


function    perimetroTriangulo(lado1 ,lado2,base){
    return lado1 + lado2 + base;
}
   // console.log("El perímetro del triángulo es:" + perimetroTriangulo + "cm");

    
    function areaTriangulo (base , altura){
        return (base *  altura) / 2;
    } 
    //console.log("El área del triángulo es:" + areaTriangulo + "cm^2");

console.groupEnd();
console.group("Isoseles");
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
console.groupEnd();
//Código del círculo
console.group("Círculo");

 //Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: "+ radioCirculo +"cm");
 //Diámetro
function diametroCirculo(radio){
    return radio * 2;
} 
//console.log("El diametro del círculo es: "+ diametroCirculo+"cm");
 //PI
//const PI = Math.PI;
//console.log("PI es: "+ PI +"cm");
 //Circunferencia
function perimetroCirculo(diametro){
    return diametro * Math.PI;
} 
//console.log("El perímetro del círculo es: "+ perimetroCirculo +"cm");
 //Área
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
//console.log("El área del círculo es: "+ areaCirculo +"cm^2");
console.groupEnd();

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
const value = input.value;

const area = areaCuadrado(value);
alert(area);
;

}