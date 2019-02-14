const noteList = [
  "Page 1 Note 1",
  "Page 1 Note 2",
  "Page 1 Note 3"
  ];

describe('Test UI buttons in the form', () => {

  beforeEach(async () => {
    await page.goto('http://localhost:3000');
    await page.type('input', noteList[0]);
    await page.keyboard.press('Enter');
  });

  describe('Test "Add" note button', () => {
    test('Test adding a note to an empty page.', async () => {
      const output = await page.evaluate(() =>
        document.querySelector('#item0 span').innerText);
      expect(output).toMatch(noteList[0]);
    });
  });

  describe('Test "Delete" note button', () => {
    test('Test deleting a note from a page.', async () => {
      await page.type('input', noteList[1]);
      await page.keyboard.press('Enter');
      await page.click('#item0 .delete');
      const output = await page.evaluate(() =>
        document.querySelector('#item0 span').innerText);
      expect(output).toMatch(noteList[1]);
    });
  });

  describe('Test "Move" note button', () => {
    test('Test moving a note from page ONE to Page TWO.', async () => {
      page.once('dialog', async dialog => {
        await dialog.accept('TWO');
      });
      await page.click('#item0 .move');
      await page.click('#TWO');
      const output = await page.evaluate(() =>
        document.querySelector('#item0 span').innerText);
      expect(output).toMatch(noteList[0]);
    });
  });

  describe('Test move note "Up" button', () => {
    test('Test deleting a note from a page.', async () => {
      await page.type('input', noteList[1]);
      await page.keyboard.press('Enter');
      await page.type('input', noteList[2]);
      await page.keyboard.press('Enter');
      await page.click('#item2 .up');
      const output = await page.evaluate(() =>
        document.querySelector('#item1 span').innerText);
      expect(output).toMatch(noteList[2]);
    });
  });

  describe('Test move note "Down" button', () => {
    test('Test deleting a note from a page.', async () => {
      await page.type('input', noteList[1]);
      await page.keyboard.press('Enter');
      await page.type('input', noteList[2]);
      await page.keyboard.press('Enter');
      await page.click('#item0 .down');
      const output = await page.evaluate(() =>
        document.querySelector('#item1 span').innerText);
      expect(output).toMatch(noteList[0]);
    });
  });

  describe('Test choose "Page Number" buttons', () => {
    test('Test change from page ONE to Page FOUR.', async () => {
      await page.click('#FOUR');
      const output = await page.evaluate(() =>
        document.querySelector('#FOUR').disabled);
      expect(output).toBeTruthy();
    });
  });

  describe('Test "Edit" note button', () => {
    test('Test deleting a note from a page.', async () => {
      page.once('dialog', async dialog => {
        await dialog.accept('Note has been edited');
      });
      await page.click('#item0 .edit');
      const output = await page.evaluate(() =>
        document.querySelector('#item0 span').innerText);
      expect(output).toMatch('Note has been edited');
    });
  });

});
