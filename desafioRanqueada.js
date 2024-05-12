let resultado = calcularNivel( 20 , 10)
console.log(resultado)

function calcularNivel(vitoria, derrota) {
    let rankeadas = vitoria - derrota
    let nivel

    if (rankeadas <= 10) {
        nivel = "Ferro"
    } else if (rankeadas >= 11 && rankeadas <=20) {
        nivel = "Bronze"
    } else if (rankeadas >= 21 && rankeadas <= 50) {
        nivel = "Prata"
    } else if (rankeadas >= 51 && rankeadas <= 80) {
        nivel = "Ouro"
    } else if (rankeadas >= 81 && rankeadas <=90) {
        nivel = "Diamante"
    } else if (rankeadas >= 91 && rankeadas <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    
    return `O Herói tem o saldo de ${rankeadas} e está no nível de ${nivel}`

}