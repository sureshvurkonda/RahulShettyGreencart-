const { test, expect } = require('@playwright/test');

test("Handle Auto Suggestion Box ", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("input[id='autocomplete']").fill("In");
    await page.waitForTimeout(5000);
    // TO stop get the focus we use "ctrl+Shift+p" and then Stop the focus use rendering.
    const countrys = await page.locator("//ul[contains(@class,'ui-widget')]//li");
    const contryListCount = await countrys.count();
    console.log(contryListCount);
    for (let i = 0; i < contryListCount; i++) {
        const countryOption = await countrys.nth(i).innerText();
        console.log(countryOption);
        if (countryOption === 'India') {
            await countrys.nth(i).click();
            await page.waitForTimeout(5000);
            console.log("Sucessfully Clicked ");
            break;
        }
    }
    await page.waitForTimeout(5000);
    await page.close();
})