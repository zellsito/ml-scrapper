//Dependencias
const puppeteer = require('puppeteer');

const obtenerLinks = () => {
  const getLink = (publicacion) => {
    return publicacion.getElementsByClassName("ui-search-link")[0].href
  }

  const todasLasPublicaciones = document.getElementsByClassName("ui-search-layout__item");

  return Array.from(todasLasPublicaciones).map(publicacion => 
    getLink(publicacion)
  ); 
  //document.getElementsByClassName("andes-pagination__page-count")[0];

  //window.__PRELOADED_STATE__.initialState.results.map(element => element.permalink);

}


async function getApartamentLink (url) {
  //crear navegador
  browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    devtools: true,
    args: ['--start-maximized' ],
  });

  //nueva pestaña
  //const page = await browser.newPage();
  const page = (await browser.pages())[0];

  //Configurar la resolucion
  await page.setViewport({ 
    width: 1920, 
    height: 1080,
    deviceScaleFactor: 1,
  });

  //ir a url
  await page.goto(url);
  
  const resultado = await page.evaluate(obtenerLinks);

  console.log(resultado);


}

const getPageNumberUrl = (n) => {
  return `https://inmuebles.mercadolibre.com.ar/casas/venta/bsas-gba-oeste/tres-de-febrero/_Desde_${(48*n + 1)}_NoIndex_True`;
}






const url = "https://inmuebles.mercadolibre.com.ar/casas/venta/bsas-gba-oeste/tres-de-febrero/";
getApartamentLink(url);
