const body = document.getElementById('body');
const paragraph = document.getElementById('text-paragraph');
const button = document.getElementById('button');
const input = document.querySelector('#input');

const text = 'Denne teksten vises først';
const text2 = 'Noe annet';

paragraph.textContent = 'Ny tekst';
function changeText() {
  paragraph.textContent = 'Ny tekst gjennom funksjon';
  // paragraph.classList.toggle('paragraph-color');

  body.classList.toggle('body-dark');
}

function changeTextInput(event) {
  console.log(event)
  const text = event.target.value;
  if (event.key === 'Enter') {
    paragraph.textContent = text;
  }
  //  console.log('Change');
}

input.addEventListener('keyup', changeTextInput);
button.addEventListener('click', changeText);
