const allPokemon = POKEMON.pokemon;
const resultadoAllPokemon = document.getElementById('allPokemon');
const optionType = document.getElementById('opcionesTipo');
const optionEgg = document.getElementById('opcionesKm');
const optionAsc = document.getElementById('opcionesOrdenar');
// const botones = document.getElementById('botones');
// const inicio = document.getElementById('inicio');
// const pokedex = document.getElementById('pokedex');
// const debilidades = document.getElementById('debilidades');
// const huevos = document.getElementById('huevos');
// const generalSelector = document.getElementById('generalselector').style = 'display:none';

// const ventana = () => {
//   document.getElementById('generalselector').style = 'display:block';
// };
// pokedex.addEventListener('click', ventana); 

// TODA LA DATA PINTADA
const completeList = (data) => {
  let pintadoAllData = '';
  data.forEach((pokemonDataCopy) => {
    const carta = `
     <div class="card-link">
      <article class="blog-card">
       <div class="detalles">
         <h1 class = "numero">${pokemonDataCopy.num}</h1>
         <h2 class = "list"> ${pokemonDataCopy.name} </h2>
         <h3><img class= "imagen" src=${pokemonDataCopy.img}></h3>
         <h4 class = "type">${pokemonDataCopy.type}</h4>
       </div>
     </article>
     </div>
    `;
    pintadoAllData += carta;
  });
  resultadoAllPokemon.innerHTML = pintadoAllData;
};

// FILTRANDO POR KM
optionEgg.addEventListener('change', () => {
  const valueOptionEgg = optionEgg.value;
  const functionFilter = dataPokemon.filtradoKm(allPokemon, valueOptionEgg);
  completeList(functionFilter);
});

// FILTRADO POR DEBILIDADES
optionType.addEventListener('change', () => {
  const valueOptionWeaknesses = optionType.value;
  const functionFilterWeaknesses = dataPokemon.filtradoDebilidades(allPokemon, valueOptionWeaknesses);
  completeList(functionFilterWeaknesses);
});

// FILTRADO DE A-Z Z-A
optionAsc.addEventListener('change', () => {
  completeList(dataPokemon.ordenarAlfabeticamente(allPokemon, optionAsc.value));
});
