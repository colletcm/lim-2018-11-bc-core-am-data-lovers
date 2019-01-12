const allPokemon = POKEMON.pokemon;
const resultadoAllPokemon = document.getElementById('allPokemon');
const optionWeak = document.getElementById('opcionesTipoDebilidades');
const optionType = document.getElementById('opcionesTipo');
const optionEgg = document.getElementById('opcionesKm');
const optionAsc = document.getElementById('opcionesOrdenar');

const mainMenu = document.getElementById('main-menu');
mainMenu.addEventListener('click', () => {
  document.getElementById('main-screen').style.display = 'block';
  document.getElementById('screen-pokedex').style.display = 'none';
  document.getElementById('screen-sort').style.display = 'none';
  document.getElementById('screen-egg').style.display = 'none';
  document.getElementById('screen-weak').style.display = 'none';
  document.getElementById('screen-type').style.display = 'none';
  document.getElementById('screen-news').style.display = 'none';
});


const mainPokedex = document.getElementById('pokedex-menu');
mainPokedex.addEventListener('click', () => {
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('screen-pokedex').style.display = 'block';
  document.getElementById('opcionesOrdenar').style.display = 'block';
  document.getElementById('screen-egg').style.display = 'none';
  document.getElementById('screen-weak').style.display = 'none';
  document.getElementById('screen-type').style.display = 'none';
  document.getElementById('screen-news').style.display = 'none';
});

const mainEgg = document.getElementById('egg-menu');
mainEgg.addEventListener('click', () => {
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('screen-pokedex').style.display = 'none';
  document.getElementById('screen-sort').style.display = 'none';
  document.getElementById('screen-egg').style.display = 'block';
  document.getElementById('screen-weak').style.display = 'none';
  document.getElementById('screen-type').style.display = 'none';
  document.getElementById('screen-news').style.display = 'none';
});

const mainWeak = document.getElementById('weak-menu');
mainWeak.addEventListener('click', () => {
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('screen-pokedex').style.display = 'none';
  document.getElementById('screen-sort').style.display = 'none';
  document.getElementById('screen-egg').style.display = 'none';
  document.getElementById('screen-weak').style.display = 'block';
  document.getElementById('screen-type').style.display = 'none';
  document.getElementById('screen-news').style.display = 'none';
});

const mainType = document.getElementById('type-menu');
mainType.addEventListener('click', () => {
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('screen-pokedex').style.display = 'none';
  document.getElementById('screen-sort').style.display = 'none';
  document.getElementById('screen-egg').style.display = 'none';
  document.getElementById('screen-weak').style.display = 'none';
  document.getElementById('screen-type').style.display = 'block';
  document.getElementById('screen-news').style.display = 'none';
});

const mainNews = document.getElementById('news-menu');
mainNews.addEventListener('click', () => {
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('screen-pokedex').style.display = 'none';
  document.getElementById('screen-sort').style.display = 'none';
  document.getElementById('screen-egg').style.display = 'none';
  document.getElementById('screen-weak').style.display = 'none';
  document.getElementById('screen-type').style.display = 'none';
  document.getElementById('screen-news').style.display = 'block';
});

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
optionWeak.addEventListener('change', () => {
  const valueOptionWeaknesses = optionWeak.value;
  const functionFilterWeaknesses = dataPokemon.filtradoDebilidades(allPokemon, valueOptionWeaknesses);
  completeList(functionFilterWeaknesses);
});

// FILTRADO POR TIPO
optionType.addEventListener('change', () => {
  const valueOptionType = optionType.value;
  const functionFilterType = dataPokemon.filtradoTipos(allPokemon, valueOptionType);
  completeList(functionFilterType);
});

// FILTRADO DE A-Z Z-A
optionAsc.addEventListener('change', () => {
  completeList(dataPokemon.ordenarAlfabeticamente(allPokemon, optionAsc.value));
});

// INSERTAR TODA LA DATA DE CARAMELOS
const resultadoCandy = dataPokemon.filtradoDeCaramelos(allPokemon);
completeList(resultadoCandy);
// resultadoAllPokemon.innerHTML = resultadoCandy;