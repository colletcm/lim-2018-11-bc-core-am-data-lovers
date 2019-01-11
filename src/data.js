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
  const ordenarAscendente = data.sort((element1, element2) => {
    if (element1.name > element2.name) {
      return 1;
    } else {
      return -1;
    }
  });

  if (ordenarPor === 'ascendente') {
    return ordenarAscendente;
  } else {
    return ordenarAscendente.reverse();
  }
};

// Contar Caramelos 
const filtradoDeCaramelos = (data, numeroElegido) => {
  const copyData = [];
  for (let i = 0; i < data.length; i++) {
    copyData.push(Object.assign({}, {
      name: data[i].name, candyCount: data[i].candy_count
    }));
  }
  let resultadoDeCaramelos = copyData.filter(copyData => (copyData.candyCount <= 400));
  resultadoDeCaramelos = copyData.filter((evolucionPokemon) => {
    return evolucionPokemon.candyCount === numeroElegido;
  });
  return resultadoDeCaramelos;
};


window.dataPokemon = {
  filtradoKm,
  filtradoTipos,
  filtradoDebilidades,
  filtradoDeCaramelos,
  ordenarAlfabeticamente
};
