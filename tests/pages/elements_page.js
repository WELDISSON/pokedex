var PokemonPage = function(){
    var search = element(by.css('#search'));
    var searchInput = element(by.css('#searchInput'));
    var pokemon = element(by.css('body > div.container.pokedex > section.section.pokedex-results.overflow-visible > ul > li > figure > a > img'));

    this.go_page = async function(url){
        await browser.get(url);
    };

    this.searchFor = async function(element){
        await searchInput.sendKeys(element);
    };

    this.searchClick = async function(){
        await search.click();
    };

    this.PokemonClick = async function(){
        await pokemon.click();
        
    };
    
    this.result = async function(){
        await browser.getCurrentUrl();
    };

};

module.exports = new PokemonPage();