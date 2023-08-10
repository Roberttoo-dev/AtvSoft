/*
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.
*/




let nomes =['João', 'JOse', 'Maria', 'Antonio', 'Josefa', 'Euclides', 'Severina','Carlos', 'Mariana', 'Mario' ]
console.log(`\nLista de Nomes: ${nomes}`)
let idades =[25, 30, 22, 28, 40, 19, 33, 27, 29, 31]
console.log(`\nIdades :${idades}`)
let corFavorita =["Azul", "Verde", "Vermelho", "Roxo", "Amarelo", "Laranja", "Rosa", "Preto", "Branco", "Marrom"]
console.log(`\nCores favoritas: ${corFavorita}`)



idades[3] =37
corFavorita[6] = 'magenta'


console.log(`\nLista de Nomes: ${nomes}`)
console.log(`\nIdades (com item alterado) :${idades}`)
console.log(`\nCores favoritas (com item alterado): ${corFavorita}`)