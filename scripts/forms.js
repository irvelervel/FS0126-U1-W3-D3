// il comportamento in automatico dei form durante la loro fase di invio è la ricerca di una
// pagina esterna da contattare -> provoca il REFRESH del browser (e conseguente perdita dei valori inseriti)
// noi, da sviluppatori moderni, siamo chiamati in carica per AGGIRARE questo comportamento di default!

// la si aggira PREVENENDO questo comportamento di default e inserendo la NOSTRA logica per l'invio!
// per farlo, dobbiamo (OGNI VOLTA che facciamo un form) intervenire sul suo evento di SUBMIT
// l'invio del form può avvenire tramite button, tramite tasto ENTER etc. noi gestiremo TUTTE queste
// situazioni in un colpo solo manipolando l'evento di SUBMIT del form!

// recupero un riferimento del form
const form = document.getElementById('main-form')
// intervengo (e sovrascrivo) il suo evento di submit
form.addEventListener('submit', function (e) {
  // per prima cosa, dobbiamo FERMARE il comportamento di default che prevede il refresh della pagina
  console.log('OGGETTO EVENTO', e)
  e.preventDefault() // prevengo il comportamento di default
  // questa riga va SEMPRE MESSA in cima alla funzione OGNI VOLTA che lavorerete con un form!
  // ora che siamo a "bocce ferme", possiamo raccogliere i dati del form

  // ora RECUPERIAMO I DATI DEL FORM, steps:
  // 1) recuperiamo innanzitutto dei RIFERIMENTI a TUTTI I CAMPI INPUT
  const firstNameInput = document.getElementById('firstName') // <input type="text" id="firstName" />
  const lastNameInput = document.getElementById('lastName')
  const ageInput = document.getElementById('age')
  const emailInput = document.getElementById('email')

  // 2) da questi riferimenti, io leggo per ciascun campo il suo "value". value sarà SEMPRE una stringa!
  const nome = firstNameInput.value // 'Stefano'
  const cognome = lastNameInput.value // 'Casasola'
  const eta = ageInput.value
  const email = emailInput.value

  //   3) ora ci fate quello che volete! noi per adesso facciamo un console.log()
  console.log(`
            UTENTE SALVATO! Ecco i dati:
            Nome: ${nome}
            Cognome: ${cognome}
            Età: ${eta}
            Email: ${email}
    `)
  alert('UTENTE SALVATO CON SUCCESSO!')
  //   ora svuotiamo il form altrimenti l'utente non capirà che l'operazione è andata a buon fine
  // a) MANOVALANZA BECERA
  //   firstNameInput.value = ''
  //   lastNameInput.value = ''
  //   ageInput.value = ''
  //   emailInput.value = ''

  // b) MANIERA FURBONA
  form.reset()
})
