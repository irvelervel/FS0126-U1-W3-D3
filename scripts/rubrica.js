// per intervenire con il form, la prima cosa da fare è STOPPARE il comportamento di default
// del browser e impedire il refresh della pagina al SUBMIT del form

const formSubmitFunction = function (e) {
  // qual è la prima cosa da fare? STOPPARE il comportamento di default!
  e.preventDefault() // il browser non si aggiornerà
  // bene! ora recupero gli input del form e ne leggerò le proprietà .value
  const firstNameInput = document.getElementById('firstname') // input firstName
  const lastNameInput = document.getElementById('lastname') // input lastName
  const phoneInput = document.getElementById('phone') // input phone
  // ora che ho gli input, posso LEGGERNE le proprietà .value
  const nome = firstNameInput.value
  const cognome = lastNameInput.value
  const telefono = phoneInput.value

  console.log(`Dati salvati: ${nome} ${cognome} ${telefono}`)
}

// recupero un riferimento DEL FORM
const form = document.getElementById('new-contact-form')
form.addEventListener('submit', formSubmitFunction)
// le tonde dopo formSubmitFunction NON CI VANNO -> perchè altrimenti quella funzione verrebbe
// eseguita AUTOMATICAMENTE all'avvio della pagina (perchè è un ESECUZIONE di funzione!)
// quindi non mettete le tonde -> "collegate" formSubmitFunction all'evento submit del form
