import 'fslightbox';

/**
 * 
fsLightboxInstances['first-lightbox'].open(0);
fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');
 */

/*import Swal from 'sweetalert2';
import { suma, saludo } from './operaciones';
document.write(`<h1>${suma(1, 2)}</h1>`);
document.write(`<h1>${suma(10, 22)}</h1>`)

console.log(suma(1, 2))
console.log(saludo);
/*
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  });
*//*
let timerInterval
Swal.fire({
  title: 'Francisco Bañuelos Valadez',
  html: 'I will close in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below *//*
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

Swal.fire({
    title: 'Francisco',
    text: 'Bañuelos Valadez',
    imageUrl: 'https://avatars.githubusercontent.com/u/68131657?s=400&u=4de7349a57746a427f6d4eb39a4eed539036bdf3&v=4',
    imageWidth: 400,
    imageHeight: 320,
    imageAlt: 'Custom image',
  })
  */
  /*
Swal.fire({
    title: 'Submit your Github username',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
        //
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      })
    }
  })
/*
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
  */