const noteList = [
  "Page 1 Note 1", "Page 1 Note 2",
  "Page 2 Note 1", "Page 2 Note 2",
  "Page 3 Note 1", "Page 3 Note 2",
  ];

describe('Test "Add Note" button', () => {
  test('Test adding a note to an empty page.', async () => {
    await page.goto('http://localhost:3000');
    await page.type('input', noteList[0]);
    await page.keyboard.press('Enter');
    const output = await page.evaluate(() =>
      document.querySelector('li span').innerText);
    expect(output).toMatch(noteList[0]);
  });
});

describe('Test "Delete Note" button', () => {
  test('Test deleting a note from a page.', async () => {
    await page.goto('http://localhost:3000');
    await page.type('input', noteList[0]);
    await page.keyboard.press('Enter');
    await page.type('input', noteList[1]);
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    const output = await page.evaluate(() =>
      document.querySelector('li span').innerText);
    expect(output).toMatch(noteList[1]);
  });
});

describe('Test "Move Note" button', () => {
  test('Test moving a note from page ONE to Page TWO.', async () => {
    await page.goto('http://localhost:3000');
    await page.type('input', noteList[0]);
    await page.keyboard.press('Enter');
    page.on('dialog', async dialog => {
      await dialog.accept('TWO');
    });
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.click('#TWO');
    const output = await page.evaluate(() =>
      document.querySelector('li span').innerText);
    expect(output).toMatch(noteList[0]);
  });
});

describe('Test "Change Page" button', () => {
  test('Test change from page ONE to Page FOUR.', async () => {
    await page.goto('http://localhost:3000');
    await page.click('#FOUR');
    const output = await page.evaluate(() =>
      document.querySelector('#FOUR').disabled);
    expect(output).toBeTruthy();
  });
});
