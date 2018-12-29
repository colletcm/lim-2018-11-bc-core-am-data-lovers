const pokemonDataCopy = Object.assign(POKEMON.pokemon);
const botones = document.getElementById('botones');
const allPokemon = document.getElementById('allPokemon');
const optionType = document.getElementById('opcionesTipo');
const resultadoTipo = document.getElementById('resultadoTipo');
const optionEgg = document.getElementById('opcionesKm');
const resultadoKm = document.getElementById('resultadoKm');

optionType.addEventListener('change', () => { //Llamando a la variable optionEgg, para hacerle click es CHANGE / Creando una funcion anonima
    console.log(optionType.value); // Creo una console.log para ver si funciona mi select , y luego le doy un valor para jalar el value de mis opciones
});

// optionEgg.addEventListener('change', () => {
//     const optionEggResult = [];
//     for (let i = 0; i < pokemonDataCopy.length; i++) {
//         if ("2km" === pokemonDataCopy[i].egg);
//     }
//     return optionEggResult
// });

// console.log(optionEggResult);

const filterDataEgg = (data,optionEgg) => {
    const newArraNum = pokemonDataCopy.filter( (ele) => {
        return ele.egg.
    })
}

const completeList = (data) => {
    let string = '';
    data.forEach((pokemonDataCopy) => {
        const carta = `
        <div class="card-link">
         <article class="blog-card">
          <div class="detalles">
           <h1 class = "numero">${pokemonDataCopy.num}</h1>
           <h2 class = "list"> ${pokemonDataCopy.name} </h2>
           <h3><img class= "imagen" src=${pokemonDataCopy.img}></h3>
           </div>
          </article>
        </div>
          `;
        string += carta;
    });
    allPokemon.innerHTML = string;
};


completeList(pokemonDataCopy)// invocar a la funcion 

