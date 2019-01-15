const sources = require('puppeteer/DeviceDescriptors');
const iPhone = sources['iPhone X'];

describe('Google', () => {
  beforeAll(async () => {
    await page.emulate(iPhone);
    await page.goto('http://www.google.com');
    await page.type('.gLFyf', 'geovation');
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await page.click('.srg a');
    await page.screenshot({path: 'geovation.png'});
  });

  it('should display "google" text on page', async () => {
    await expect(page.url()).toMatch('https://geovation.uk/');
  });
});
