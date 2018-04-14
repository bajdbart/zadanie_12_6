var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
  }

var flag = "https://restcountries.eu/data/col.svg"

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {

    var country = $('<li>').text(item.name);
    country.appendTo(countriesList);

    var photo = $('<p></p>');
    var code = item.alpha3Code.toLowerCase() ; //zmiana na male litery
    var flag = 'https://restcountries.eu/data/'+ code  + '.svg'; //adres zdjecia flagi
    photo.html('<img class="photo" src="'+ flag +'"/>');
    photo.appendTo(countriesList);

    var capital = $('<p></p>').html("<span class=\"property\">Capital: </span> " + item.capital);
    capital.appendTo(countriesList);

    var population = $('<p></p>').html("<span class=\"property\">Population: </span> " + item.population);
    population.appendTo(countriesList);

    var area = $('<p></p>').html("<span class=\"property\">Land area: </span> " + item.area + " km <SUP>2</SUP>" );
    area.appendTo(countriesList);

    var currencies = $('<p class=\"currencies\"></p>').html("<span class=\"property\">Currency: </span> " + item.currencies);
    currencies.appendTo(countriesList);
  });

   //WARUNEK NA ISTNIENIE NAPISU: "LIST OF FOUND COUNTRIES"
   var list = $('li');
   var listBefore = $('body').find('.beforelisttext');
   if (list.length > 2 && (listBefore.length == 0)) {
      countriesList.before('<p class=\"beforelisttext\">List of found countries</p>');
   }
}
