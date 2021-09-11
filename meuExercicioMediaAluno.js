//// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

function calculeMedia(nota1, nota2, nota3) {
 
  let media = (nota1 + nota2 + nota3) / 3
  
  return media

}

console.log(calculeMedia(8, 10, 8))