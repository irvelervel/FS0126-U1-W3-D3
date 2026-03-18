// OGGI PARLIAMO DI EVENTI DEL BROWSER
// Un evento del browser è una "situazione" che accade nella pagina. Può scatenarsi in automatico
// oppure può avvenire a seguito di un'interazione da parte dell'utente (click, scroll, hover, submit)

// Questi eventi sono SEMPRE accaduti, ma di default non scatenano nessun comportamento nella pagina.
// Da bravi frontenders, è importante prendere coscienza di questo processo e divenire capaci di
// governare queste situazioni. Per assumere il controllo di questi eventi nella finestra, è necessario
// sistemare delle "trappole". Queste "trappole" cattureranno tutti gli eventi di un certo tipo che
// si verificano su un certo elemento -> es. click sul bottone.

// Le "trappole" in gergo si chiamano "EVENT LISTENERS" (ascoltatori di eventi).
// Le possiamo sistemare su qualsiasi elemento della pagina per ascoltare qualsiasi tipo di evento,
// anche se il buonsenso e la pratica vi suggeriranno le esperienze utente può comuni.

// Per impostare un EVENT LISTENER su un elemento, ci sono principalmente 2 tecniche:
// a) Se avete a disposizione l'elemento in HTML, potete inserire nell'elemento una particolare
// famiglia di attributi -> "on" + nomeEvento --> es. "onclick", "onscroll", "onmouseenter", etc.
// a questo attributo assegnerete poi l'esecuzione di una funzione dichiarata nel vostro foglio JS
// es. <button onclick="miaFunzione()">CLICCAMI</button>

// b) Se l'elemento designato NON ESISTE ancora in HTML perchè lo state creando via JS ad es. con
// document.createElement('button'), dovete inserire l'event listener attraverso JS.
// Per farlo, dovete utilizzare sull'elemento appena creato un metodo JS di nome "addEventListener()"

// funzione per il click del bottone HTML
const buttonClick = function () {
  console.log('bottone cliccato con successo!')
}

// creiamo ora un buttone via JS!
// queste righe non le inserisco in nessuna funzione, ciò significa che verrano AUTOMATICAMENTE
// eseguite all'avvio della pagina
const newButton = document.createElement('button') // <button></button>
// inseriamoci un'etichetta
newButton.innerText = 'BOTTONE JS' // <button>BOTTONE JS</button>
// inseriamoci qualche classe CSS
newButton.classList.add('rounded', 'violet') // <button class="rounded violet">BOTTONE JS</button>
// appendiamo il bottone nel DOM: ho bisogno di recuperare il suo elemento "padre", "contenitore"
const parent = document.getElementById('btn-container') // recupero la section
parent.appendChild(newButton) // ora l'elemento viene fisicamente appeso nel DOM dentro la section
