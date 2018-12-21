const root =document.getElementById('root');
const arrayPokemon = POKEMON.pokemon;

const lista = (data) => {
  let string = '';
  data.forEach((arrayPokemon) => {
    const carta = `
      <div class = "list"></div>
      ${arrayPokemon.name}
      <img class= "imagen" src=${arrayPokemon.img}> 
      `;
    string += carta;
  });
  root.innerHTML = string;
};

  
lista(arrayPokemon);// invocar a la funcion 

//listaData(POKEMON.pokemon);

//console.log (arrayPokemon);
// // TABLA DE POKEMON c/u para entender la DATA console.table(POKEMON.pokemon[0]); 


// // LLamo primero por ID, la lista de opciones que tengo que esta dentro de un select
// const opciones = document.getElementById('opcionesTipo');
// // Al escuchar el Click me haga algo, con el E qe es el objetivo
// opciones.addEventListener('click',(e) => {

// console.log(prueba.consultarTipo(e.target.value));
// // Llamo al mensaje por su id, para que se inserte en el HTML
//   document.getElementById('mensaje').innerHTML = prueba.consultarTipo(e.target.value)
// });


// const datos = POKEMON.pokemon[0]; // este es vulvasaur
// const pruebavalorDos =  `
//   <div class="POKEMON">
//    <h2 class="id">
//      ${datos.id}
//    </h2>
//    <p class="location">${datos.name}</p>
//    <img class= "imagen" src=${datos.img}>
//   </div>`;

// // eslint-disable-next-line no-unused-vars
// const pruebavalor = Object.entries(datos);