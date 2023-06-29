// ESERCIZIO:
// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla console nomecognomecolorepreferito21

// BONUS:
// Al posto del 21 finale, chiedete all'utente 2 numeri e concatenate al posto del 21 finale, il primo numero diviso il secondo.
// Mostrare la password generata sulla vostra pagina HTML sbizzarrendosi con il layout e volendo potete usare Bootstrap
// Fare un layout responsive






// Dichiarazione variabili e assegnazione immediata
let userName = prompt("Inserisci il tuo nome."), // Nome
    userLastName = prompt("Inserisci il tuo cognome."), // Cognome
    userFavoriteColor = prompt("Inserisci il tuo colore preferito."), // Colore preferito
    userDividend = parseInt(prompt("Inserisci il dividendo.")), // Dividendo
    userDivisor = parseInt(prompt("Inserisci il divisore.")), // Divisore
    userDividedNumber = userDividend / userDivisor, // Risultato divisione
    userGeneratedPassword = `${userName}${userLastName}${userFavoriteColor}${userDividedNumber}`.replace(" ", ""); // Concatenazione password e rimozione spazi bianchi

