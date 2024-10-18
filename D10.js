/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum= 10 + 20 
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random= Math.floor(Math.random()*21)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: 'giulio',
  surname: 'fardella',
  age: 30
}


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
console.log(me)



/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ['javascript',
  'java',
  'c#',
  'c++',
  'python'
]


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Atom')

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log(me)



// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function() {
  return Math.floor(Math.random()*6)+1

  
}
console.log(dice())


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
 const bigger = function(n1,n2) {
if(n1<n2){
  return n2
  } else { return n1}
}
console.log('il più grande è ' + bigger(13,21))


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function(str){ 
  return str.split(' ')
}
console.log(splitMe("i love coding"))


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function(booleano,str)
{ 
  if(booleano===true){
    return str.slice(1)
  } else { return str.slice(0,-1)}
}
console.log(deleteOne(true, 'ciao'))
console.log(deleteOne(false, 'ciao'))



/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyletters = function(str){
  return str.replace(/[0-9]/g,'')
/// sostituisco tutti i numeri da 0 a 9 con uno spazio vuoto 
} 
console.log(onlyletters('i have 4 dogs'))


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
 const isThisAnEmail = function(str){
 const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
 // costruisco questa costante per racchiudere i caratteri di solito presenti nelle email per poi escluderli
   if ( email.test(str)){
     return true
   }
 else{ return false}
  }
console.log(isThisAnEmail('giulio.fardella@outlook.it'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function(){
  const days = [
    'domenica',
    'lunedi',
    'martedi',
    'mercoledi',
    'giovedi',
    'venerdi',
    'sabato',
  ]
const dataAttuale = new Date()
const giornoAttuale = dataAttuale.getDay()
return days[giornoAttuale]
}
console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function(num){
 let sum =0
 let values= [] // faccio un array per i numeri estratti 
 for(let i=0;i<num ;i++) {
  const value = dice() // ottengo il valore del lancio 
sum += value // aggiungo il valore 
values.push(value) // lo metto nell'array
}
return {
  sum:sum,
  values: values}
}
console.log(rollTheDices(4))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function(dateString){
const dateI = new Date(dateString) 
const currentDate = new Date() // per la data attuale 
// calcolo la differenza in mS 
const timeD = currentDate - dateI
// converto in giorni 
const daysD = Math.floor(timeD/(1000*60*60*24)) 
return daysD
}
console.log(howManyDays('2024-10-13'))


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function() {
  const myBirthDay = new Date('1994-03-09')
const today = new Date()
const birthDay = myBirthDay.getDate()// compleanno
const birthMonth = myBirthDay.getMonth() // mese
const todayDay = today.getDate()// giorno di oggi 
const todaymonth = today.getMonth()// mese di oggi 

if(birthDay=== todayDay&& birthMonth=== todaymonth){
  return true
} else {
  return false
}
}
console.log(isTodayMyBirthday())




// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function(obj,str){
  delete obj[str] // rimuovo la proprietà spec.
  return obj} // ritorno l'oggetto modificato 
  const obj1= { // specifico le proprietà
    x:1,
    y:3,
  }
 
console.log(deleteProp(obj1,'y'))

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function findtheMostrecent(movies){
  return movies.reduce ((mostRecent, current) => {
    return (parseInt(current.Year)> parseInt(mostRecent.Year) ? current:mostRecent)
  })
}
const mostRecentmovie = findtheMostrecent(movies)
console.log(mostRecentmovie)

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function(){
  return movies.length
}
const moviesN = countMovies()
console.log(moviesN)
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function(){
  return movies.map(movie => movie.Year)
}
const yearsA = onlyTheYears()
console.log(yearsA)


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function(){
  return movies.filter( movie=> {
    const year = parseInt(movie.Year)
    return year>= 1901 && year<= 2000
  })
}
const filmsof2000 = onlyInLastMillennium()
console.log(filmsof2000)

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function(){
  return movies.reduce((sum,movie)=> {
    const year1 = parseInt(movie.Year)
    return sum + year1
  },0 ) // inizializzo a 0 e dopo aver convertito le stringhe in numeri faccio la somma 
}
const totalY = sumAllTheYears()
console.log(totalY)

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function(str){
  return movies.filter(movie => movie.Title.toLowerCase().includes(str.toLowerCase()))// metto tolowercase ad entrambi per rendere la ricerca più efficace sia cercando tra i titoli ma anche nel filtro.
}
const onlyTitles = searchByTitle('Lord')
console.log(onlyTitles)


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function(str){
 const match = []
 const unmatch = []
 const searchS = str.toLowerCase() // per includere anche il minuscolo 
 movies.forEach(movie=> {
  if(movie.Title.toLowerCase().includes(searchS)){ // se corrisponde aggiungo a match
    match.push(movie)
  } else {
    unmatch.push(movie) // se non corrisponde aggiungo a unmatch 
  }
 })
 return {match,unmatch}
}
 const risultato = searchAndDivide('avengers') //eseguo

console.log(risultato) /// stampo 

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function(num){
  const newM = [...movies]// faccio una copia dell'array movies 
newM.splice(num,2) // rimuovo l'elemento all'indice 1
 return newM
}
const newA = removeIndex(2)
console.log(newA)

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const searchC = function(){
  return document.getElementById('container') }
  
 


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selTd = function(){
  return document.querySelectorAll('td')
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printd = function(){
  const alltd = document.querySelectorAll('td')
  for(let i=0;i<alltd.length;i++)
    console.log(alltd[i].textContent)
    }


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const redLinks = function(){
  const redB = document.querySelectorAll('a')
  for(let i=0;i<redB.length;i++) {
    redB[i].style.backgroundColor='red'
  }
}
redLinks()


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const newE = function(){
  const el1 = document.getElementById('myList')
  const newI = document.createElement('li')
  newI.textContent= 'nuovoelemento'
  el1.appendChild(newI)
}
newE()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const removeF = function(){
  const el1= document.getElementById('myList')
  while (el1.firstChild){
    el1.removeChild(el1.firstChild)
  }
}
removeF()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const trClass = function(){
  const addC = document.querySelectorAll('td') 
  for(let i=0;i<addC.length;i++){
    addC[i].classList.add('test') /// aggiungo ai tag la classe "test "
  }}
  trClass()
  


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = function(num){

}



/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = function(num){

}





/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime =function(num){
  if (num<=1){ //perchè i numeri minori o uguali a 1 non sono primi
    return false
  } 
  for(let i=2; i<= Math.sqrt(num);i++) // per controllarne la radice quadrata, e quindi, se è primo
{
  if(num% i===0) return false /// per trovare un divisore di i, se c'è non è primo
} 
return true /// se non ha divisori allora è primo
}
// esempio 
console.log(isItPrime(3))
console.log(isItPrime(17))
console.log(isItPrime(21))
console.log(isItPrime(22))
console.log(isItPrime(23))
console.log(isItPrime(24))
console.log(isItPrime(25))
console.log(isItPrime(26))