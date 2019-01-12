// llamando a la Data y a todos los select
const allPokemon = POKEMON.pokemon;
const resultAllPokemon = document.getElementById('allPokemon');
const resultCandy = document.getElementById('screen-news-div');
const optionWeak = document.getElementById('option-weak');
const optionType = document.getElementById('option-type');
const optionEgg = document.getElementById('option-egg');
const optionSort = document.getElementById('option-sort');

// Primera Pantalla
const mainMenu = document.getElementById('main-menu');
mainMenu.addEventListener('click', () => {
  document.getElementById('main').style.display = 'block';
  document.getElementById('screen-pokedex').style.display = 'none';
  document.getElementById('screen-sort').style.display = 'none';
  document.getElementById('screen-egg').style.display = 'none';
  document.getElementById('screen-weak').style.display = 'none';
  document.getElementById('screen-type').style.display = 'none';
  document.getElementById('screen-news').style.display = 'none';
  document.getElementById('allPokemon').style.display = 'none';
});

// Segunda Pantalla
const mainPokedex = document.getElementById('pokedex-menu');
mainPokedex.addEventListener('click', () => {
  document.getElementById('main').style.display = 'none';
  document.getElementById('screen-pokedex').style.display = 'block';
  document.getElementById('screen-sort').style.display = 'block';
  document.getElementById('screen-egg').style.display = 'none';
  document.getElementById('screen-weak').style.display = 'none';
  document.getElementById('screen-type').style.display = 'none';
  document.getElementById('screen-news').style.display = 'none';
  document.getElementById('allPokemon').style.display = 'block';
});

// Tercera Pantalla
const mainEgg = document.getElementById('egg-menu');
mainEgg.addEventListener('click', () => {
  document.getElementById('introduction').style.display = 'none';
  document.getElementById('screen-pokedex').style.display = 'none';
  document.getElementById('screen-sort').style.display = 'none';
  document.getElementById('screen-egg').style.display = 'block';
  document.getElementById('screen-weak').style.display = 'none';
  document.getElementById('screen-type').style.display = 'none';
  document.getElementById('screen-news').style.display = 'none';
});

// Cuarta Pantalla
const mainWeak = document.getElementById('weak-menu');
mainWeak.addEventListener('click', () => {
  document.getElementById('main').style.display = 'none';
  document.getElementById('screen-pokedex').style.display = 'none';
  document.getElementById('screen-sort').style.display = 'none';
  document.getElementById('screen-egg').style.display = 'none';
  document.getElementById('screen-weak').style.display = 'block';
  document.getElementById('screen-type').style.display = 'none';
  document.getElementById('screen-news').style.display = 'none';
});

// Quinta Pantalla
const mainType = document.getElementById('type-menu');
mainType.addEventListener('click', () => {
  document.getElementById('main').style.display = 'none';
  document.getElementById('screen-pokedex').style.display = 'none';
  document.getElementById('screen-sort').style.display = 'none';
  document.getElementById('screen-egg').style.display = 'none';
  document.getElementById('screen-weak').style.display = 'none';
  document.getElementById('screen-type').style.display = 'block';
  document.getElementById('screen-news').style.display = 'none';
});

// Sexta Pantalla
const mainNews = document.getElementById('news-menu');
mainNews.addEventListener('click', () => {
  document.getElementById('main').style.display = 'none';
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
  resultAllPokemon.innerHTML = pintadoAllData;
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
optionSort.addEventListener('change', () => {
  completeList(dataPokemon.ordenarAlfabeticamente(allPokemon, optionSort.value));
});

// INSERTAR TODA LA DATA DE CARAMELOS
const resultadoCandy = dataPokemon.filtradoDeCaramelos(allPokemon);
resultCandy.innerHTML = resultadoCandy.toFixed(0) + '%' ;