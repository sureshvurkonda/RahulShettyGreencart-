const { test, expect } = require('@playwright/test');


test('Handle Green Kart', async ({ page }) => {
    test.slow();
    test.setTimeout(60000);
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.waitForLoadState();
    await page.locator('input.search-keyword').fill('Ca');
    await page.waitForTimeout(3000);
    await page.locator('button.search-button').click();
    // Stroing the Products which contains 'Ca'.
    const products = await page.locator("//div[@class='product']");
    for (let i = 0; i < await products.count(); i++) {
        const productName = await products.nth(i).textContent();
        console.log(productName);
        await expect(productName).toContain('Ca');
        await products.nth(i).locator("//button[text()='ADD TO CART']").click();
    }
     // stoing the no of items in a cart.
    const cartValues = await page.locator("(//tr//td//strong)[1]").innerText();
    // converting the string to number .
    const number = Number(await cartValues);
    console.log(`Number of Items in a cart:${number}`);


    // clickig on the cart log 
    await page.locator("//img[@alt='Cart']").click();

    //Stroing the  products which have added to cart.  
    const cartItems = await page.locator("//div[@class='cart-preview active']//li");
    const noOfCartItems = await cartItems.count();
    //if no of items in a cart is equal to no.of products which have added to cart.
    await expect(number).toEqual(await noOfCartItems);
    await page.waitForTimeout(5000);

    //Then proceed the cart.
    await page.locator("//button[text()='PROCEED TO CHECKOUT']").click();
    await page.waitForTimeout(5000);

     // stroing the total prices if each products based an quantity.
    const totalPrice = await page.locator('//tbody/tr/td[5]//p');
    const totalPriceCount = await totalPrice.count();
    await page.waitForTimeout(3000);
    console.log(`Total Price Count is :${totalPriceCount}`)

      //ittratting the loop to access the each product price. 
    let totalSum = 0;
    for (let i = 0; i < totalPriceCount; i++) {
        // getting the inner text of each product value.
        const valueOfProduct = totalPrice.nth(i).innerText();
        //console.log(await valueOfProduct);
        // converting each product value in to a number.
        const priceOfProduct = Number(await valueOfProduct);

        totalSum = priceOfProduct + totalSum;
        //console.log(priceOfProduct);
    }
    console.log(`Sum of Total Price is :${totalSum}`)

    //Stroing the Total amount .
    const total_Amount = await page.locator("//span[@class='totAmt']");
    const total_AmountText = await total_Amount.innerText();
    //console.log(await total_AmountText)
    const totalPriceNumber = Number(total_AmountText);
     // if total amt equal to  sum of products amt .
    await expect(totalSum).toEqual(totalPriceNumber);

    // Applying the promocode .
    await page.locator('.promoCode').fill("rahulshettyacademy");
    await page.locator('.promoBtn').click();
    await page.waitForTimeout(5000);

    
    //stroing the discount percentage .
    const discount = await page.locator('.discountPerc');
    
    const discountText = await discount.innerText();
    //console.log(discountText);//10%
    // we removing the % symbol from the discount.
    const discountNumber = await Number(discountText.replace('%', ''));// remove the % symbol.
    console.log('number conversion ', await discountNumber)
    // discount formula applying (sumAmt*discount percantage)/100.
    const formula = (totalSum * discountNumber) / 100;
    // sumAmt - afterdiscountAmount = actual amount or Final amount.
    const formulaFinalPrice = totalSum - formula;

    console.log(await formulaFinalPrice)
    //stroing the after discount amt .
    const finalAmount = await page.locator('.discountAmt');
    const finalAmountText = await finalAmount.textContent();
    console.log(await finalAmountText);
    const totalAfterDiscount = await Number(finalAmountText);
    console.log(`After converting the Total After Discount : ${totalAfterDiscount}`);
    //if after discount amt equal to final amount .
    await expect(formulaFinalPrice).toEqual(totalAfterDiscount);

    // then Place a order
    await page.locator("//button[text()='Place Order']").click();


    //await page.waitForTimeout(5000)


    // stroing the drop down elements.
    const countryDropDown = await page.locator('//select');
    console.log(await countryDropDown.count())
   // await page.locator('//select').selectOption({value:'India'});
     // Based on the drop down elements . itterating the for loop .
    for (let i = 0; i < await countryDropDown.count(); i++) {
        const countryName = await countryDropDown.nth(i).innerText();
        console.log(await countryName);
        if (countryName.includes('India')) {
            const selectOption = await countryDropDown.nth(i).selectOption({value:'India'});
            // if it equal to india then asseration tobe boolean condition.
            await expect(selectOption).toBeTruthy();
        }
    }
     // clicking the terms and conditions check box .
    await page.locator("//input[@type='checkbox']").check();
    // checking weather the check box is checked or not.
    await expect(page.locator("//input[@type='checkbox']")).toBeTruthy();
    //Then click on proceed.
    await page.locator("//button[text()='Proceed']").click();
    

    await page.waitForTimeout(5000);
    await page.close();

})