const { test, expect } = require('@playwright/test');

test('Handle Green KArt ', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.locator('.search-keyword').fill("Ca");
    await page.waitForTimeout(5000);
    await page.locator('.search-button').click();
    //await page.waitForTimeout(5000);
    const Products = await page.locator('.products .product');

    let product = [];
    let productPrices = [];
    let productQuantity = [];
    await page.waitForTimeout(5000);
    for (let i = 0; i < await Products.count(); i++) {
        const productText = await Products.nth(i).locator("h4.product-name").innerText();
        const productPrice = await Products.nth(i).locator(".product-price").innerText();
        const productQuantitys = await Products.nth(i).locator("input.quantity").getAttribute('value');

        //console.log(await productText);
        product.push(productText);
        productPrices.push(productPrice);
        productQuantity.push(productQuantitys);

        if (productText.includes('Ca')) {
            await Products.nth(i).locator("//button[text()='ADD TO CART']").click();
        }
        else {
            console.log(`Not Mached The Product${productText}`);
        }

    }
    console.log(`Product Names [ ${product} ]`);
    console.log(`Product Price [ ${productPrices} ]`);
    console.log(`product Quantity   [ ${productQuantity} ]`);

    //await page.waitForTimeout(5000)
    await page.locator("img[alt='Cart']").click();

    const cartItems = await page.locator("//div[@class='cart-preview active']//li");
    const cartItemsCount = await cartItems.count();

    console.log(cartItemsCount);
    let itemNames = [];
    let itemPrices = [];
    let itemQtys = [];
    //Number conversion Price
    let iprices = [];

    //await page.waitForTimeout(5000)
    for (let j = 0; j < await cartItemsCount; j++) {
        const itemName = await cartItems.nth(j).locator("//p[@class='product-name']").innerText();
        //console.log(await itemName);

        const itemPrice = await cartItems.nth(j).locator("//div//p[@class='product-price']").innerText();
        const iprice = Number(itemPrice);
        iprices.push(iprice);

        const itemQty = await cartItems.nth(j).locator("//div//p[@class='quantity']").innerText();
        //Removing "No." 
        const itemQtyremove = itemQty.replace('No.', " ").trim();
        itemNames.push(itemName);
        itemPrices.push(itemPrice);
        itemQtys.push(itemQtyremove);
    }
    console.log(`Item  Names [ ${itemNames} ]`);
    console.log(`Item Price [ ${itemPrices} ]`);
    console.log(`Item Quantity   [ ${itemQtys} ]`);
    console.log(`After converting to integer  price is[${iprices}] `);
    //Comparing both arrays
    await expect(product).toStrictEqual(itemNames);
    await expect(productQuantity).toStrictEqual(itemQtys);
    await expect(productPrices).toStrictEqual(itemPrices);



    //     /* No.of items */
    //     // stoing the no of items in a cart.
    //     const cartValues = await page.locator("(//tr//td//strong)[1]").innerText();
    //     // converting the string to number .
    //     const number = Number(await cartValues);
    //     console.log(`Number of Items in a cart:${number}`);


    //     // clickig on the cart log 
    //     await page.locator("//img[@alt='Cart']").click();

    //     //Stroing the  products which have added to cart.  
    //     //const cartItems = await page.locator("//div[@class='cart-preview active']//li");
    //    // const noOfCartItems = await cartItems.count();
    //     //if no of items in a cart is equal to no.of products which have added to cart.
    //     await expect(number).toEqual(await cartItemsCount);
    //     await page.waitForTimeout(5000);




    await page.locator("//button[text()='PROCEED TO CHECKOUT']").click();

    const Table = await page.locator("//tbody//tr");
    await page.waitForTimeout(5000);
    const tableCount = await Table.count();
    let productNames = [];
    let productQuantitys = [];
    let productsPrices = [];
    let productTotals = [];
    let totalSum = 0;
    //console.log("products ",await productNameCount);
    for (let i = 0; i < tableCount; i++) {
        const pName = await Table.nth(i).locator("//td[2]").innerText();
        productNames.push(pName);
        //console.log("product Name ", pName);

        const pQuantiry = await Table.nth(i).locator("//td[3]").innerText();
        productQuantitys.push(pQuantiry);
        //console.log("product quntys ", pQuantiry);


        const pPrice = await Table.nth(i).locator("//td[4]").innerText();
        productsPrices.push(pPrice);
       // console.log("product price ", pPrice);

        await page.waitForTimeout(5000);
        const tPrice = await Table.nth(i).locator("//td[5]").innerText();
        productsPrices.push(tPrice);
        //console.log("product tPrice ", tPrice);

        const tpriceNumber = Number(tPrice);
        productTotals.push(tpriceNumber);
        totalSum = tpriceNumber + totalSum;
    }

    console.log(`Name of Products in the Table [ ${productNames} ]`);
    console.log(`Quantitys of Products in the Table [ ${productQuantitys} ]`);
    console.log(`Prices of Products in the Table [ ${productsPrices} ]`);
    console.log(`Total Prices of Products in the Table [ ${productTotals} ]`);
    console.log(`Total Prices of Products in the Table  into a  total sum of Number[ ${totalSum} ]`);

    //comparision of two Arrays 
    await expect(productNames).toEqual(itemNames);
    await expect(productQuantitys).toEqual(itemQtys);
    await page.waitForTimeout(3000);
   // await expect(productsPrices).toEqual(itemPrices);



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
        //console.log(await countryName);
        if (countryName.includes('India')) {
            const selectOption = await countryDropDown.nth(i).selectOption({ value: 'India' });
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