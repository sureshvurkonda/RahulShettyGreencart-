const{test,expect} = require('@playwright/test');
test('Handle Screen Scrooling',async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // //Scrolling down.
    // await page.evaluate(()=>{
    //     window.scrollBy(0,1000);
    // })

    // //scrollUp
    // await page.evaluate(()=>{
    //     window.scrollBy(0,-800);
    // })

    // //Scroll to Bottom to page
    // await page.evaluate(()=>{
    //     window.scrollBy(0,document.body.scrollHeight);
    // })

    //Scroll to specific element 
    await page.evaluate(async()=>{
        const hideTextBox =document.querySelector('#show-textbox');
        hideTextBox.scrollIntoView({behavior: 'smooth', block: 'center'});
    })


   
        const showTextBox = page.locator('#hide-textbox');
        await showTextBox.scrollIntoViewIfNeeded()
        await showTextBox.click();

    await page.waitForTimeout(5000);
    await page.close();
})