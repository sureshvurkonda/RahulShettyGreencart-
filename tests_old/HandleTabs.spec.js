const {test , expect} = require('@playwright/test');
test('Handle Tabs ', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const[childTabs] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click("//fieldset//following-sibling::a[@target='_blank']")
    ])
    console.log(`Switching to Child Tabs............`)
    childTabs.bringToFront();
    console.log(`Child Tabs Title :${await childTabs.title()}`);
    console.log(`Switching to Parent Tabs............`)
    await page.bringToFront();
    
    console.log(`Child Tabs Title :${await page.title()}`);  
})