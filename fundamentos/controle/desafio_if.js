const nota = -2;

if (nota >=9 && nota <= 10){
    console.log("Conceito A");
}
if (nota >=7 && nota < 9){
    console.log("Conceito B");
}
if (nota >=5 && nota < 7){
    console.log("Conceito C");
}
if (nota >=4.5 && nota < 5){
    console.log("Conceito D");
}
if (nota < 4.5 && nota >= 0){
    console.log("Conceito F");
}
if (nota > 10 || nota < 0){
    console.log("Vc digitou nota inválida!")
}