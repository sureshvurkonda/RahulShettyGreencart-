import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/loginpage';
import products from '../pages/productPage';
const test = fixture.extend({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	productPage: async ({ page }, use) => {
		await use(new products(page))
	},
})
export default test
