const createBrowser = require('./functions/createBrowser');
const alquileres = require('./scrappers/alquileres');

(async () => {
  const browser = await createBrowser();
  const data = alquileres(browser);

})();
