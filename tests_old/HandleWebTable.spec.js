const { test, expect } = require('@playwright/test');

test('Handle Web Tables', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const tableRows = await page.locator('table.table-display tbody tr');
    const tableRowCount = await tableRows.count();
    console.log(tableRowCount)
    for (let i = 0; i < tableRowCount; i++) {
        const rowColoumns = await tableRows.nth(i).locator('td');
        const columsCount = await rowColoumns.count();
        // console.log(await coloumnCount.count());
        for(let j =0;j<columsCount;j++){
            const coloumnText = await rowColoumns.nth(j).innerText();
            //console.log(coloumnText) 
            if (coloumnText.includes('Master Selenium Automation in simple Python Language')) {
                const price = await rowColoumns.nth(j+1).innerText();

                console.log(price)
    
            }
        }
    }
})