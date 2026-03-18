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

let numberOfVioletButtons = 0

// funzione per il click del bottone HTML
const buttonClick = function () {
  console.log('bottone cliccato con successo!')
  // il click del bottone arancione causerà l'esecuzione della funzione per creare il bottone viola
  if (
    // creiamo un bottone viola solo se il numero dei bottoni viola attualmente nella pagina è 0
    numberOfVioletButtons < 3
  ) {
    createJSButton()
  } else {
    alert('BASTA BOTTONIIIII')
  }
}

const createJSButton = function () {
  // creiamo ora un buttone via JS!
  const newButton = document.createElement('button') // <button></button>
  // inseriamoci un'etichetta
  newButton.innerText = 'BOTTONE JS' // <button>BOTTONE JS</button>
  // inseriamoci qualche classe CSS
  newButton.classList.add('rounded', 'violet') // <button class="rounded violet">BOTTONE JS</button>

  // applichiamo al bottone viola un comportamento, e rendiamolo sensibile al click del mouse
  // non ho a disposizione il tag HTML, quindi devo ricorrere al metodo b) -> addEventListener
  newButton.addEventListener('click', function (e) {
    console.log('OGGETTO EVENTO', e)
    // potete scrivere il codice qui dentro, oppure potete collegare una funzione esterna
    // al click del pulsante viola creiamo un'immagine di un orso e la appendiamo nel DOM
    const orsoImage = document.createElement('img') // <img />
    orsoImage.setAttribute('src', 'https://placebear.com/100/100') // <img src="https://placebear.com/250/250" />
    orsoImage.setAttribute('alt', 'orsetto puccioso') // <img src="https://placebear.com/250/250" alt="orsetto puccioso" />
    orsoImage.classList.add('circle') // <img class="circle" src="https://placebear.com/250/250" alt="orsetto puccioso" />

    // prima di venire appeso, assegniamo un ascoltatore di evento "mouseenter" a ogni orsobollino
    orsoImage.addEventListener('mouseenter', function () {
      orsoImage.style.transform = 'scale(1.25)'
    })
    // e ripristiniamo la dimensione normale al mouseleave
    orsoImage.addEventListener('mouseleave', function () {
      orsoImage.style.transform = 'scale(1)'
    })

    // cerco il parent
    const section = document.getElementById('bears')
    section.appendChild(orsoImage)
  })

  // appendiamo il bottone nel DOM: ho bisogno di recuperare il suo elemento "padre", "contenitore"
  const parent = document.getElementById('btn-container') // recupero la section
  parent.appendChild(newButton) // ora l'elemento viene fisicamente appeso nel DOM dentro la section
  numberOfVioletButtons++
}
