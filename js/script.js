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
  if(resp) {
      resp.forEach(function(item) {

      var country = $('<li>').text(item.name);
      country.appendTo(countriesList);
  
      var photo = $('<p></p>');
      var code = item.alpha3Code.toLowerCase() ;
      var flag = 'https://restcountries.eu/data/'+ code  + '.svg'; // URL to flag img
      var img = document.createElement('IMG');
      img.classList.add('photo');
      img.setAttribute('src', flag);
      photo.html(img).appendTo(countriesList);
  
      var capital = $('<p></p>').html("<span>Capital: </span> " + item.capital);
      capital.appendTo(countriesList);
  
      var population = $('<p></p>').html("<span>Population: </span> " + item.population);
      population.appendTo(countriesList);
  
      var area = $('<p></p>').html("<span>Land area: </span> " + item.area + " km <SUP>2</SUP>" );
      area.appendTo(countriesList);
  
      var currencies = $('<p></p>')
      currencies.addClass('currencies');
      currencies.html("<span>Currency: </span> " + item.currencies).appendTo(countriesList);
    });
  
    $('#countries').find('span').addClass('property');

     //TEXT: "LIST OF FOUND COUNTRIES"
     var list = $('li');
     var listBefore = $('body').find('.beforelisttext');
     if (list.length > 2 && (listBefore.length == 0)) {
        countriesList.before('<p class=\"beforelisttext\">List of found countries</p>');
     }
  }
}
