const getLinks = require('../functions/getLinks');
const sleep = require('../functions/sleep');
const createPage = require('../functions/createPage');

module.exports = async (browser) => {
  const page = await createPage(browser);
  const url = "https://inmuebles.mercadolibre.com.ar/casas/venta/bsas-gba-oeste/tres-de-febrero/";
  await page.goto(url);
  const links = await page.evaluate(getLinks);
  //aca va la logica de las paginas

  let items = [];
  let i = 0;
  //for (let i = 0; i<links.length; i++) {
  for (link of links){
    await page.goto(link);
    const components = await page.evaluate(() => window.__PRELOADED_STATE__.initialState.components);
    const item = {
      link: link,
      title: components.header.title,
      currency_symbol: components.price.price.currency_symbol,
      price: components.price.price.value,
      description: components.description?.content,
    };
    items.push(item);
    console.log(`${i} ${item.title} - ${item.currency_symbol} ${item.price}`);
    i++;
    await sleep(3000);
  }
  console.log('asd');
}

/*
todas las motos de ciertos modelos cuyo precio sea al menos 10% menor a la cotizacion contra robo de un seguro

avisar si alguien pregunta en mis publicaciones favoritas (conectar con la api de ML y obtener mis favoritos)

avisar si hay una nueva publicacion de un determinado criterio (por ejemplo, una 3ds new menor a 100k

*/