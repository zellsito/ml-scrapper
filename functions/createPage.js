module.exports = async (browser) => {
  //nueva pestaña
  const page = (await browser.pages())[0];

  //Configurar la resolucion
  await page.setViewport({ 
    width: 1920, 
    height: 1080,
    deviceScaleFactor: 1,
  });

  return page;
}