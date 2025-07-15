const { test, expect } = require('@playwright/test');
test(" Handle Playwright ", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#name').fill('Suresh');
    await page.click('#alertbtn');

    page.on('dialog' ,async dialog =>{

        console.log(dialog.message());
        await dialog.accept();
    })


    await page.waitForTimeout(5000)
    await page.close();
})