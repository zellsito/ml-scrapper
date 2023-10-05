const puppeteer = require('puppeteer');



async function main () {
  const url = "https://listado.mercadolibre.com.ar/3ds#D[A:3ds]";
  const opts = {
    headless: false,
  };

  browser = await puppeteer.launch(opts);

  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto(url);

  await page.evaluate(() => {
    const getLink = (publicacion) => {
      return publicacion
        .getElementsByClassName("ui-row-card__image-link")[0]
        .href;
    }

    
    
    const todasLasPublicaciones = document.getElementsByClassName("ui-search-row__item");
    console.log(todasLasPublicaciones);
    /*
    Array.from(todasLasPublicaciones).map(publicacion => {
      return getLink(publicacion);
    }); 
*/
    /*const elements = document.getElementsByClassName('example');
    const result = [];
  
    document.title = 'New Title';
  
    for (let i = 0; i < elements.length; i++) {
      result.push(elements[i].textContent);
    }
  
    return JSON.stringify(result);*/
  });

  await page.evaluate(() => {
    console.log('hola');
  });

  //const element = await page.waitForSelector('.ui-search-layout');
  /*const element = await page.$('.ui-search-layout');

  console.log(element);
/*

  await publicaciones2.evaluate((asd) => {
    console.log(asd);
  })


/*

  console.log(page);

  const publicaciones = await page.evaluate(() => {

    const todasLasPublicaciones = document.getElementsByClassName("ui-search-row__item");
    todasLasPublicaciones.forEach(publicacion => {
      console.log(getLink(publicacion));
    });
    /*return Array.from(todasLasPublicaciones).map(publicacion => {
      return getLink(publicacion);
    }); */
  

  //console.log(publicaciones2);

/*
  const search = "nintendo 3ds";


  const todasLasPublicaciones = document.getElementsByClassName("ui-search-row__item");

  //esto me funciono
  todasLasPublicaciones.forEach(publicacion => {
    console.log(getLink(publicacion));
  });

  //esto no me funciono


  //es lo mismo que esto
  let array = [];
  todasLasPublicaciones.forEach(publicacion => {
    array.push(getLink(publicacion));
  });
  console.log(array);
*/
}

main();

//funcion que mermita marcar como favorito y te avise si otra persona pregunta en la publicacion
