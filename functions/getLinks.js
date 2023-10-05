module.exports = () => {
  const todasLasPublicaciones = document.getElementsByClassName("ui-search-layout__item");
  return Array.from(todasLasPublicaciones).map(publicacion => 
    publicacion.getElementsByClassName("ui-search-link")[0].href
  ); 
}
