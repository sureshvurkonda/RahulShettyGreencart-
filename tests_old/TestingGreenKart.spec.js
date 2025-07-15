const { test, expect } = require('@playwright/test');

test('Handle Green KArt ', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.locator('.search-keyword').fill("Ca");
    await page.waitForTimeout(5000);
    await page.locator('.search-button').click();
    await page.waitForTimeout(5000);
    const Products = await page.locator('.products .product');

    let product = [];
    let productPrices = [];
    let productQuantity = [];
    //await page.waitForTimeout(5000);
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

    await page.waitForTimeout(5000)
    await page.locator("img[alt='Cart']").click();
    const cartItems = await page.locator("//div[@class='cart-preview active']//li");
    const noOfCartItems = await cartItems.count();
    console.log("No Of Items In the Cart: ", await noOfCartItems)
    let itemNames = [];
    for (let i = 0; i < noOfCartItems; i++) {
        const element = await cartItems.nth(i).locator("//p[@class='product-name']").innerText();
        console.log(await element);
        itemNames.push(await element);

    }
    console.log(`items [ ${await itemNames} ]`)
        
    // const table = await page.locator("//tbody");
    // let tableArry = [];
    await page.waitForTimeout(5000);
    // const table = await page.locator("//table");
    // let headers = []; // Define headers manually if not available in the table
    // let tableData = [];




    const tableRows = await page.locator("//table[@class='productTable']//tbody//tr"); // Adjust the locator based on the actual table structure
    let tableArray = [];  // Initialize as an empty array
    
    const rowCount = await tableRows.count();
    console.log("Row count:", rowCount);  // Log the number of rows
    
    // Iterate through each row
    for (let i = 0; i < rowCount; i++) {
        const columns = await tableRows.nth(i).locator('td');  // Locate <td> elements in each row
        const columnCount = await columns.count();
    
        let rowArray = []; // Array to store the values for the current row
    
        // Iterate through each column in the current row
        for (let j = 0; j < columnCount; j++) {
            const columnText = await columns.nth(j).innerText();  // Get the text from the column
            console.log(`Row ${i + 1}, Column ${j + 1} text:`, columnText);  // Log each column text
            rowArray.push(columnText);  // Push the column text to the current row array
        }
    
        tableArray.push(rowArray);  // Push the row array to the 2D tableArray
    }
    
    console.log('Final Table Array:', tableArray);  // Output the entire table as a 2D array

    // Extract the headers if present in the table
    // const headerCells = await table.locator("thead tr th");
    // for (let i = 0; i < await headerCells.count(); i++) {
    //     const headerText = await headerCells.nth(i).innerText();
    //     headers.push(headerText);
    // }

    // Loop through each row of the table body (skipping the header)
    // const rows = await table.locator("tbody tr");

    // for (let i = 1; i < await rows.count(); i++) {
    //     let rowData = {};
    //     const cells = await rows.nth(i).locator("td");
    //     for (let j = 1; j < await cells.count(); j++) {
    //         const cellText = await cells.nth(j).innerText();
    //         rowData[headers[j]]= cellText;
    //     } 
    //     tableData.push(rowData);
    // }

    // console.log(tableData)


    // const table = await page.locator("//table");
    // let tableData = [];

    
    // const rows = await table.locator("tbody tr");

    // for (let i = 0; i < await rows.count(); i++) {
    //     let rowData = {};
    //     const cells = await rows.nth(i).locator("td");

    //     
    //     for (let j = 0; j < await cells.count(); j++) {
    //         const cellText = await cells.nth(j).innerText();
    //         rowData[`Column${j}`] = cellText;
    //     }

    //     tableData.push(rowData);
    // }

    // console.log(tableData);
   


    await page.waitForTimeout(5000);
    await page.close();
})