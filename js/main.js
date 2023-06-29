// ESERCIZIO:
// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla console nomecognomecolorepreferito21

// BONUS:
// Al posto del 21 finale, chiedete all'utente 2 numeri e concatenate al posto del 21 finale, il primo numero diviso il secondo.
// Mostrare la password generata sulla vostra pagina HTML sbizzarrendosi con il layout e volendo potete usare Bootstrap
// Fare un layout responsive





/* Password Generator con input utente */

// Dichiarazione variabili e assegnazione immediata
let userName = prompt("Inserisci il tuo nome."), // Nome
    userLastName = prompt("Inserisci il tuo cognome."), // Cognome
    userFavoriteColor = prompt("Inserisci il tuo colore preferito."), // Colore preferito
    userDividend = parseInt(prompt("Inserisci il dividendo.")), // Dividendo
    userDivisor = parseInt(prompt("Inserisci il divisore.")), // Divisore
    userDividedNumber = Math.floor(userDividend / userDivisor), // Risultato divisione arrotondata per difetto
    userGeneratedPassword = `${userName}${userLastName}${userFavoriteColor}${userDividedNumber}`.replace(" ", ""); // Concatenazione password e rimozione spazi bianchi

document.getElementById("userGeneratedPassword").innerHTML = userGeneratedPassword;




/* Password Randomica */

// Dichiarazione variabili utili

const LENGTH_SIX = 6,  // Costanti
    LENGTH_TEN = 10;

let hexChars = "0123456789abcdef", // utilities
    shortPassword = "",
    longPassword = "";

// Password da 6 caratteri

for (let i = 0; i < LENGTH_SIX; i++) {
    let randomIndex = Math.floor(Math.random() * hexChars.length)
    let randomChar = hexChars.charAt(randomIndex)
    shortPassword += randomChar
}

// Password da 6 caratteri

for (let i = 0; i < LENGTH_TEN; i++) {
    let randomIndex = Math.floor(Math.random() * hexChars.length)
    let randomChar = hexChars.charAt(randomIndex)
    longPassword += randomChar
}


document.getElementById("shortPassword").innerHTML = shortPassword;
document.getElementById("longPassword").innerHTML = longPassword;