const { test, expect } = require('@playwright/test');

test('GreenKart', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.waitForLoadState();

    // Total  Number of Products. 
    const numberOfProducts = await page.$$('div.product');
    console.log(`Number Products in a page :${numberOfProducts.length}`);

    // Searching for Products and click
    await page.locator("//input[@class='search-keyword']").fill('ca');
    await page.waitForTimeout(5000);
    await page.locator('button.search-button').click();

    //After clicking number of products displaying and add to cart 
    await page.waitForTimeout(5000);
    const products = await page.locator("//div[@class='product']");
     
    console.log(`Number Products After Search : ${await products.count()}`);
    //const addCart = await page.locator("//button[text()='ADD TO CART']");

    //await page.waitForTimeout(5000);

    // await expect(products).toContainText('ca');
    for (let i = 0; i < await products.count(); i++) {
        const productName = await products.nth(i).textContent();
        console.log(productName);
        await expect(productName).toContain('Ca');
        await products.nth(i).locator("//button[text()='ADD TO CART']").click();

       // await page.locator("//div[@class='product-action']//button").click();
        // if (productName.includes('Ca')) {
        //     await products.locator('button:has-text("ADD TO CART")').first().click();
        //     //await page.locator("//div[@class='product-action']//button").click();
        //     console.log("As per criteria result matched.............");
        // } else {
        //     console.log("As per criteria  Not result matched.............");
        // }
    }
   






    await page.waitForTimeout(5000);

    // const addToCart = await page.$$("//div[@class='product-action']//button");
    // console.log(addToCart.length)

    // for (let value of addToCart) {
    //     await value.click();
    // }

    const nofItems = await page.locator('(//tr//td//strong)[1]');
    await page.locator("[alt='Cart']").click();

    await page.waitForTimeout(5000);
    await page.close();

})