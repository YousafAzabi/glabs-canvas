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
  await page.click('#item1 .move');
  await page.click('#FOUR');
  await addNote(page, noteList[2]);
  await addNote(page, noteList[3]);
  await page.focus('#item2 span');
  await page.click('#item2 .up');
  await addNote(page, noteList[4]);
  await page.click('#item3 .delete');

  //await browser.close();
})();

const addNote = async (page, message) => {
  await page.type('input', message);
  await page.keyboard.press('Enter');
}
