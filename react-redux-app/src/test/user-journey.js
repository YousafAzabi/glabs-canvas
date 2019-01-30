// This code launches chrome browser for the user to see the functionality of the website
//It is similar to a test but not implementing any testing frame work.

const puppeteer = require('puppeteer');

( async() => {
  let times = 8;
  const noteList = [
    "Note 1 in Page ONE",
    "Note 2 in Page ONE. It will be moved to Page FOUR",
    "Note 3 in Page FOUR.",
    "Note 4 in Page FOUR. It will be moved up",
    "Note 5 in Page FOUR. It will be deleted"
    ];
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  page.on('dialog', async dialog => {
    await dialog.accept('FOUR');
  });
  await addNote(page, noteList[0]);
  await addNote(page, noteList[1]);
  await tabKeyPress(page, 7);
  await page.click('#FOUR');
  await addNote(page, noteList[2]);
  await addNote(page, noteList[3]);
  await tabKeyPress(page, 12);
  await page.keyboard.press('Enter');
  await addNote(page, noteList[4]);
  await tabKeyPress(page, 14);

  //await browser.close();
})();

const addNote = async (page, message) => {
  await page.type('input', message);
  await page.keyboard.press('Enter');
}

const tabKeyPress = async (page, number) => {
  for(let i = 0; i < number; i++){
    await page.keyboard.press('Tab');
  }
  await page.keyboard.press('Enter');
}
