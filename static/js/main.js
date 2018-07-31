
SEARCH_URLS = ["https://google.com/search?q=","https://bing.com/search?q=","https://search.yahoo.com/search?q="];
GOOGLE_SEARCH_URL = "https://google.com/search?q=";

function search(){
  var searchText = document.getElementById("search-text").value;
  var searchUrl = SEARCH_URLS[Math.floor(Math.random()*SEARCH_URLS.length)];
  window.location.href = searchUrl + encodeURI(searchText);
  return false;
}

function imFeelingLucky(){
  var searchText = document.getElementById("search-text").value;
  window.location.href = GOOGLE_SEARCH_URL + encodeURI(searchText);
  return false;
}
