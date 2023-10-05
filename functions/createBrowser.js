const puppeteer = require('puppeteer');

module.exports = async () => {
  return await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    devtools: true,
    args: ['--start-maximized' ],
  });
}