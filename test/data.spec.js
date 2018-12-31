require('../src/data.js');

describe('dataPokemon', () => {
  it('deberia ser un objeto', () => {
    expect(typeof dataPokemon).toBe('object');
  });
  describe('dataPokemon.filtradoKm', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataPokemon.filtradoKm).toBe('function');
    });
  });
});
