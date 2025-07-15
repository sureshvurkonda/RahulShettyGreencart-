// In this Class All Methods(Inbuilt) Will be Stored To use in Pom.
import { expect, selectors } from '@playwright/test'
class BasePage {
	constructor(page) {
		this.page = page
	}
	async open(url) {
		return await this.page.goto(url)
	}
	async getCount(selector){
		return await this.page.locator(selector).count()
	}
async getNthValue(selector,count){
	const textValue = await this.page.locator(selector)
   const optionvalue =  await textValue.nth(count).textContent();
   return optionvalue
}
	async getTitle() {
		return await this.page.title()
	}
	async waitForTimeout(){
		return await this.page.waitForTimeout(10000);
	}
	// async arrayLocator(selector){
	// 	const elements = await this.page.locator(selector).count();
	// 	return elements;
	// }

	async pause() {
		return await this.page.pause()
	}

	async getUrl() {
		return this.page.url()
	}

	async wait() {
		return this.page.waitForTimeout(10000)
	}

	async waitForPageLoad() {
		return await this.page.waitForLoadState('domcontentloaded')
	}

	async waitAndClick(selector) {
		return await this.page.click(selector)
	}

	async waitAndHardClick(selector) {
		return await this.page.$eval(selector, element => element.click())
	}

	async waitAndFill(selector, text) {
		return await this.page.fill(selector, text)
	}

	async keyPress(selector, key) {
		return await this.page.press(selector, key)
	}

	async takeScreenShot() {
		return expect(await this.page.screenshot()).toMatchSnapshot(
			'MyScreenShot.png'
		)
	}
	async textContent(selector, text) {
		const textValue = await this.page.textContent(selector)
		return textValue;
	}

	async verifyElementText(selector, text) {
		const textValue = await this.page.textContent(selector)
		return expect(textValue.trim()).toBe(text) 
	}

	async verifyElementContainsText(selector, text) {
		const locatorText = await this.page.locator(selector)
		return await expect(locatorText).toContainText(text)
	}

	async verifyJSElementValue(selector, text) {
		const textValue = await this.page.$eval(selector, element => element.value)
		return expect(textValue.trim()).toBe(text)
	}

	async selectValueFromDropdown(selector, text) {
		const dropdown = await this.page.locator(selector)
		return await dropdown.selectOption({ value: text })
	}

	async verifyElementAttribute(selector, attribute, value) {
		const textValue = await this.page.getAttribute(selector, attribute)
		return expect(textValue.trim()).toBe(value)
	}

	async getFirstElementFromTheList(selector) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const firstItem = await rows.nth(0).textContent()
			return firstItem
		}
	}

	async getLastElementFromTheList(selector) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const lastItem = await rows.nth(count).textContent()
			return lastItem
		}
	}

	async clickAllElements(selector) {
		const rows = await this.page.locator(selector)
		const count = 2
		for (let i = 0; i < count; ++i) {
			await rows.nth(i).click()
		}
	}
 
	async clickAllLinksInNewTabs(selector) {
		const rows = this.page.locator(selector)
		const count = rows.count()
		for (i in range(count)) {
			await rows.nth(i).click((modifiers = ['Control', 'Shift']))
		}
	}
	async PreviousPTabs(){
		// const[childTabs] = await Promise.all([
		// 	await this.page.click(selector)
		// ])
		// await childTabs.waitForLoadState();
		await this.page.goBack();
		//console.log(`Child Tabs Title :${await this.page.title()}`); 
	}
	async navigatePage(selector) {
		const [newPage] = await Promise.all([
		  this.page.waitForEvent('popup'), // Wait for the new page to open
		  this.page.click(selector) // Click the specified link (e.g., Twitter icon)
		]);
		await newPage.waitForLoadState(); // Wait for the new page to fully load
		return newPage;
	  }

	async isElementVisible(selector, errorMessage) {
		const element = this.page.locator(selector)
		try {
			const isVisible = await element.isVisible()
			expect(isVisible).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementNotVisible(selector) {
		const element = this.page.locator(selector)
		return expect(element).toBeHidden
	}

	async isElementEnabled(selector, errorMessage) {
		const element = this.page.locator(selector)
		try {
			const isEnabled = await element.isEnabled()
			expect(isEnabled).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementChecked(selector, errorMessage) {
		const element = this.page.locator(selector)
		try {
			const isChecked = await element.isChecked()
			expect(isChecked).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}
	async include(text1,text2){
		if (text1 === text2) {
			return true;	
		}else {
			return false;
		}
	}
}
export default BasePage