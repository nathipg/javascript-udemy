const puppetter = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text = generateText('Pissuti', 24);
  expect(text).toBe('Pissuti (24 years old)');
});

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Pissuti', 24);
  expect(text).toBe('Pissuti (24 years old)');
});

test('should create an element with text and correct class', async () => {
  const browser = await puppetter.launch({
    headless: true,
    // slowMo: 80,
    // args: ['--window-size=1920,1080'],
  });

  const page = await browser.newPage();
  await page.goto(
    'file:///C:/Users/nathipg/github/javascript-udemy/testing/index.html'
  );

  await page.click('input#name');
  await page.type('input#name', 'Pissuti');

  await page.click('input#age');
  await page.type('input#age', '24');

  await page.click('#btnAddUser');

  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Pissuti (24 years old)');
}, 10000);
