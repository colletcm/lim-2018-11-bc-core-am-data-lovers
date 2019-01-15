// FILTRADO POR KM
const filterKm = (data, distance) => {
  let resultFilterKm = [];
  const copyData = [];
  for (let i = 0; i < data.length; i++) {
    copyData.push(Object.assign({}, {
      name: data[i].name, num: data[i].num, egg: data[i].egg, type: data[i].type, img: data[i].img
    }));
  }
  resultFilterKm = copyData.filter((objPokemon) => {
    return objPokemon.egg === distance;
  });
  return resultFilterKm;
};

// FILTRADO POR TIPO
const filterTypes = (data, type) => {
  let resultFilterType = [];
  const copyData = [];
  for (let i = 0; i < data.length; i++) {
    copyData.push(Object.assign({}, {
      name: data[i].name, num: data[i].num, type: data[i].type, img: data[i].img
    }));
  }
  resultFilterType = copyData.filter((objPokemon) => {
    return objPokemon.type.includes(type) === true;
  });
  return resultFilterType;
};

// FILTRADO POR DEBILIDADES
const filterWeaknesses = (data, weaknesses) => {
  let resultfilterWeaknesses = [];
  const copyData = [];
  for (let i = 0; i < data.length; i++) {
    copyData.push(Object.assign({}, {
      name: data[i].name, num: data[i].num, weaknesses: data[i].weaknesses, type: data[i].type, img: data[i].img
    }));
  }
  resultfilterWeaknesses = copyData.filter((objPokemon) => {
    return objPokemon.weaknesses.includes(weaknesses) === true;
  });
  return resultfilterWeaknesses;
};

// FILTRADO DE A-Z Z-A
const sortOrder = (data, sortFor) => {
  const copyData = [];
  for (let i = 0; i < data.length; i++) {
    copyData.push(Object.assign({}, {
      name: data[i].name, num: data[i].num, type: data[i].type, img: data[i].img
    }));
  }

  if (sortFor === 'order-number') {
    return copyData;
  } 

  const sortAscending = copyData.sort((element1, element2) => {
    if (element1.name > element2.name) {
      return 1;
    } else {
      return -1;
    }
  });


  if (sortFor === 'order-options') {
    return data;
  } else if (sortFor === 'ascending') {
    return sortAscending;
  } else {
    return sortAscending.reverse();
  }
};

// Contar Caramelos 
const filterCandy = (data) => {
  let pokemonCandyEvo = data.filter((pokemon) => {
    return pokemon.hasOwnProperty('candy_count');
  });
  // aca faltan hacer el calculo en base a los numeros
  let percentageCandy = (pokemonCandyEvo.length) / 151 * 100;
  return percentageCandy;
};

window.dataPokemon = {
  filterKm,
  filterTypes,
  filterWeaknesses,
  filterCandy,
  sortOrder
};
