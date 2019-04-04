const pokemonPage = require('./pages/elements_page');

var url = 'https://www.pokemon.com/us/pokedex/';

describe('Search by pokemon', () => {
    it('Search by Bulbasaur', () => {
      pokemonPage.go_page(url);
      pokemonPage.searchFor('Bulbasaur');
      pokemonPage.searchClick();
      pokemonPage.PokemonClick();
      expect(browser.getCurrentUrl())
       .toBe('https://www.pokemon.com/us/pokedex/bulbasaur');
    });
  });