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

window.dataPokemon = {
  filtradoKm,
  filtradoDebilidades
};

// FILTRADO DE A-Z Z-A