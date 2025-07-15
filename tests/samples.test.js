const { test, expect } = require('@playwright/test');


test('Handlle twitter icon ',async({page})=>{
await page.goto('https://www.saucedemo.com/inventory.html');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.click('#login-button');
const [newPage] = await Promise.all([
    page.waitForEvent('popup'), // Wait for the new page to open
    page.click('.social_twitter a'), // Click the Twitter icon
  ]);
  
  // Wait for the new page to load
  await newPage.waitForLoadState();
  
  // Get the URL of the new page and assert it
  const twitterURL = newPage.url();
  console.log(twitterURL);
  await expect(twitterURL).toBe('https://x.com/saucelabs');
})