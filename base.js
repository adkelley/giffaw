// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
//http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC

const apiKey = "api_key=dc6zaTOxFJmzC";
const search = "search?q=";
const giphyURL = "http://api.giphy.com/v1/gifs/";
const trending = "trending?"


function renderTopTrendingGifs() {
  $("img").remove();
  $.get(giphyURL+trending+apiKey, render);
}
  
function renderSearchedGifs(searchTerms) {
  var termsString = searchTerms.replace(/\s+/g, '+');
  $("img").remove();
  $.get(giphyURL+search+termsString+"&"+apiKey, render);
}

function initSearchListener() {
  $("input[type='text']").on("change", function() {
    renderSearchedGifs($(this).val());
    //console.log($(this).val());
  });
}
  
function render(responseData) {                                                                                                                                             
  var children = responseData.data;                                                                                                                                
  children.forEach(function(item,i) {                                                                                                                                       
    var url = item.images.fixed_height.url;                                                                                                                                     //console.log(url);
    $("body").append("<img src=" + url + ">"); // mind the single vs. double quotes!                                                                                      
  });                                                                                                                                                                       
}      

$(document).ready(function(){
  //render(mockData);
  renderTopTrendingGifs();
  initSearchListener();
  //console.log("here's your data:", mockData)
})
