const { test, expect } = require('@playwright/test');

test('Handle Multiple File Uploads', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles([
        'tests\\uploadFiles\\SureshVurkonda (1).pdf',
        'tests\\uploadFiles\\SureshVurkonda.pdf'
    ])

    //Asserations
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('SureshVurkonda (1).pdf');
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('SureshVurkonda.pdf');
   await page.waitForTimeout(5000);

    // Removing the Files
    await page.locator('#filesToUpload').setInputFiles([]);

    //Asseration
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
    await page.waitForTimeout(2000);
    await page.close();
})


test('Handle File', async ({ page }) => {
    await page.goto('https://www.foundit.in//upload');
    //1st way
    await page.locator('i.mqfihd-upload').click();
    await page.locator('#file-upload').setInputFiles('tests\\uploadFiles\\SureshVurkonda (1).pdf');
    await page.waitForTimeout(5000);
    await page.close();
})


test.only('Handle WithOut Input Tag',async ({page}) => {
    await page.goto('https://easyupload.io/');
    await page.locator('button.dz-button').click();
    const [fileChooser] = await Promise.all([
        // It waits for the file chooser event
        page.waitForEvent('filechooser'),
        // Trigger file chooser by clicking the upload button
        page.click('.dz-button')
      ]);
      await fileChooser.setFiles('tests/uploadFiles/SureshVurkonda (1).pdf');
    await page.waitForTimeout(3000);
})