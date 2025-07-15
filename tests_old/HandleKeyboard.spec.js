const{test,expect}=require('@playwright/test');

test('Handle KeyBoard Actions',async ({page}) => {
    await page.goto('https://gotranscript.com/text-compare');
    await page.waitForLoadState()
    await page.locator("//textarea[@name='text1']").fill("Hello suresh")
    await page.keyboard.press('Control+A');//to select text
    await page.keyboard.press('Control+C');//to copy text
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V');//to paste text
    await page.waitForTimeout(5000)
})