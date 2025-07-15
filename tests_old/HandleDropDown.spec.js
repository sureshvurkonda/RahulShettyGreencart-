const { test, expect } = require('@playwright/test');


test('Handle DropDown ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const dropDownOption = await page.locator('#dropdown-class-example');
     //await await page.locator('#dropdown-class-example').selectOption({label:'Option2'});
    const dropDownCount = await dropDownOption.count();
    console.log(dropDownCount);
    for (let i = 0; i < dropDownCount; i++) {
        const options = await dropDownOption.nth(i).innerText();
        console.log(options)
        if (options ==='Option1') {
            await dropDownOption.selectOption({label:'Option1'});
        }
    }



    // const dropDownOption = await page.locator("//select[contains(@id,'dropdown')]//option");
    // const dropDownCount = await dropDownOption.count();
    // for(let option of dropDownCount){
    //         let value = await option.textContent();
    //         console.log(value)
    //         if(value.includes('Option2')){
    //             await page.waitForSelector("option[value='option2']");
    //             await page.selectOption("option[value='option2']",value)
    //         }
    // }

    await page.waitForTimeout(5000);
})