const puppeteer = require('puppeteer');
const sources = require('puppeteer/DeviceDescriptors');
const iPhone = sources['iPhone X'];

describe('Test', () => {
  it('should display "google" text on page', async () => {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    //await page.emulate(iPhone);
    await page.goto('http://www.google.com', {waitUntil: 'networkidle2'});
    await page.screenshot({path: 'screenshots/geovation.png'});
    await expect(page.url()).toMatch('https://www.google.com/?gws_rd=ssl');
    await browser.close();
  });
});
