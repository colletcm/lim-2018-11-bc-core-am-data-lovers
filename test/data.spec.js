require('../src/data.js');

const testAllPokemon = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'spawn_time': '07:00',
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }],
  'next_evolution': [{
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'candy': 'Bulbasaur Candy',
  'egg': 'Not in Eggs',
  'spawn_chance': 0.017,
  'avg_spawns': 1.7,
  'spawn_time': '11:30',
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }, {
    'num': '002',
    'name': 'Ivysaur'
  }]
}, {
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'candy': 'Charmander Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.253,
  'avg_spawns': 25.3,
  'spawn_time': '08:45',
  'multipliers': [1.65],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'next_evolution': [{
    'num': '005',
    'name': 'Charmeleon'
  }, {
    'num': '006',
    'name': 'Charizard'
  }]
}, {
  'id': 5,
  'num': '005',
  'name': 'Charmeleon',
  'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
  'type': [
    'Fire'
  ],
  'height': '1.09 m',
  'weight': '19.0 kg',
  'candy': 'Charmander Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.012,
  'avg_spawns': 1.2,
  'spawn_time': '19:00',
  'multipliers': [1.79],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'prev_evolution': [{
    'num': '004',
    'name': 'Charmander'
  }],
  'next_evolution': [{
    'num': '006',
    'name': 'Charizard'
  }]
}];

const testAllPokemon2 = [{
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'egg': '2 km',
}, {
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'egg': '2 km',
}];

const testAllPokemon3 = [{
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}, {
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}, {
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ]
}];
const testAllPokemon8 = [{
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ]
}, {
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ]
}, {
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ]
}, {
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ]
}, {
  'num': '005',
  'name': 'Charmeleon',
  'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
  'type': [
    'Fire'
  ]
}];

const testAllPokemon4 = [{
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ]
}, {
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ]
}, {
  'num': '005',
  'name': 'Charmeleon',
  'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
  'type': [
    'Fire'
  ]
}, {
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ]
}, {
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ]
}];
const testAllPokemon5 = [{
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ]
}, {
  'num': '005',
  'name': 'Charmeleon',
  'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
  'type': [
    'Fire'
  ]
}];
const testAllPokemon6 = [{
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ]
}, {
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ]
}, {
  'num': '005',
  'name': 'Charmeleon',
  'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
  'type': [
    'Fire'
  ]
}, {
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ] 
}, {
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ]
}];

const testAllPokemon7 = 2.6490066225165565;

describe('dataPokemon', () => {
  it('deberia ser un objeto', () => {
    expect(typeof dataPokemon).toBe('object');
  });
  describe('dataPokemon.filtradoKm', () => {
    it('deberia ser una funcion de km', () => {
      expect(typeof dataPokemon.filtradoKm).toBe('function');
    });
    it('deberia filtrarme por 2 km', () => {
      expect(dataPokemon.filtradoKm(testAllPokemon, '2 km')).toEqual(testAllPokemon2);
    });
  });
  describe('dataPokemon.filtradoDebilidades', () => {
    it('deberia ser una funcion de Debilidades', () => {
      expect(typeof dataPokemon.filtradoDebilidades).toBe('function');
    });
    it('deberia filtrarme por Debilidades', () => {
      expect(dataPokemon.filtradoDebilidades(testAllPokemon, 'Fire')).toEqual(testAllPokemon3);
    });
  });
  describe('dataPokemon.filtradoTipos', () => {
    it('deberia ser una funcion de Tipos', () => {
      expect(typeof dataPokemon.filtradoTipos).toBe('function');
    });
    it('deberia filtrarme por Tipos', () => {
      expect(dataPokemon.filtradoTipos(testAllPokemon, 'Fire')).toEqual(testAllPokemon5);
    });
  });
  describe('dataPokemon.ordenarAlfabeticamente', () => {
    it('deberia ser una funcion de Ordenar', () => {
      expect(typeof dataPokemon.ordenarAlfabeticamente).toBe('function');
    });
    it('deberia filtrarme por Ordenar por número', () => {
      expect(dataPokemon.ordenarAlfabeticamente(testAllPokemon, 'ordernarnumero')).toEqual(testAllPokemon8);
    });
    it('deberia filtrarme por Ordenar de A-Z', () => {
      expect(dataPokemon.ordenarAlfabeticamente(testAllPokemon, 'ascendente')).toEqual(testAllPokemon4);
    });
    it('deberia filtrarme por Ordenar de Z-A', () => {
      expect(dataPokemon.ordenarAlfabeticamente(testAllPokemon, 'descendente')).toEqual(testAllPokemon6);
    });
  });
  describe('dataPokemon.filtradoDeCaramelos', () => {
    it('deberia ser una funcion de filtrar porcentaje de Evolucion con caramelos', () => {
      expect(typeof dataPokemon.filtradoDeCaramelos).toBe('function');
    });
    it('deberia sacar el porcentaje de candy en base a los 151 pokémon', () => {
      expect(dataPokemon.filtradoDeCaramelos(testAllPokemon)).toEqual(testAllPokemon7);
    });
  });
});
