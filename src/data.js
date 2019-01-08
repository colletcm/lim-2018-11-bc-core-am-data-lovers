// FILTRADO POR KM
const filtradoKm = (data, distance) => {
  let resultadoFiltradoKm = [];
  const copyData = [];
  for (let i = 0; i < data.length; i++) {
    copyData.push(Object.assign({}, {
      name: data[i].name, num: data[i].num, egg: data[i].egg, type: data[i].type, img: data[i].img
    }));
  }
  resultadoFiltradoKm = copyData.filter((objPokemon) => {
    return objPokemon.egg === distance;
  });
  console.log(resultadoFiltradoKm);
  return resultadoFiltradoKm;
};

// FILTRADO POR TIPO
const filtradoTipos = (data, type) => {
  let resultadoFiltradoTipo = [];
  const copyData = [];
  for (let i = 0; i < data.length; i++) {
    copyData.push(Object.assign({}, {
      name: data[i].name, num: data[i].num, type: data[i].type, img: data[i].img
    }));
  }
  resultadoFiltradoTipo = copyData.filter((objPokemon) => {
    return objPokemon.type.includes(type) === true;
  });
  return resultadoFiltradoTipo;
};

// FILTRADO POR DEBILIDADES
const filtradoDebilidades = (data, weaknesses) => {
  let resultadoFiltradoDebilidades = [];
  const copyData = [];
  for (let i = 0; i < data.length; i++) {
    copyData.push(Object.assign({}, {
      name: data[i].name, num: data[i].num, weaknesses: data[i].weaknesses, type: data[i].type, img: data[i].img
    }));
  }
  resultadoFiltradoDebilidades = copyData.filter((objPokemon) => {
    return objPokemon.weaknesses.includes(weaknesses) === true;
  });
  return resultadoFiltradoDebilidades;
};

// FILTRADO DE A-Z Z-A
const ordenarAlfabeticamente = (data, ordenarPor) => {
  const ordenarAscendente = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  if (ordenarPor === 'ascendente') {
    return ordenarAscendente;
  } else {
    return ordenarAscendente.reverse();
  }
};

window.dataPokemon = {
  filtradoKm,
  filtradoTipos,
  filtradoDebilidades,
  ordenarAlfabeticamente
};
