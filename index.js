//Dependencias
const puppeteer = require('puppeteer');

async function getApartamentData (url) {
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

  const obtenerLinks = () => {
    const getLink = (publicacion) => {
      return publicacion.getElementsByClassName("ui-search-link")[0].href
    }
  
    const todasLasPublicaciones = document.getElementsByClassName("ui-search-layout__item");
  
    return Array.from(todasLasPublicaciones).map(publicacion => 
      getLink(publicacion)
    ); 
  }

  //espera
  //await page.waitForTimeout(4000);
  
  //const components = await page.evaluate(obtenerLinks);
/*
  const retorno = {
    price: components.price.price.value,
    currency_symbol: components.price.price.currency_symbol,
    title: components.header.title,
    description: components.description?.content,
  }
*/
  //console.log(components);

  const links = await page.evaluate(obtenerLinks);

  links.map((link) => {
    console.log(link);
  })

  //console.log(components);

  return links;



}

const getPageNumberUrl = (n) => {
  return `https://inmuebles.mercadolibre.com.ar/casas/venta/bsas-gba-oeste/tres-de-febrero/_Desde_${(48*n + 1)}_NoIndex_True`;
}


const url = "https://inmuebles.mercadolibre.com.ar/casas/venta/bsas-gba-oeste/tres-de-febrero/";

const url2 = "https://casa.mercadolibre.com.ar/MLA-1116650263-casa-5-amb-impecable-ciudad-jardin-_JM#position=1&search_layout=grid&type=item&tracking_id=35f614db-9157-4a75-971b-a0a5a859e338";
//getApartamentLink(url);
getApartamentData(url);
