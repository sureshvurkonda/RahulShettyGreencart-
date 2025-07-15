import { base_url, title } from '../config'
import { productPageUrl, productPageTitle} from '../config'
import { twitterURl,facebookURl,linkedinURl} from '../config'
import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
test.describe.parallel(
	'@smoke: Login as a standard user to verify the products page and logout from the application',
	() => {
		test('Login to App as a standard user', async ({
			loginPage,
			productPage
		}) => {
			await test.step('Open the APP and check logo', async () => {
				await loginPage.openApp()
				await loginPage.loginPageLogo()
				await expect(await loginPage.getTitle()).toBe(title)
				await expect(await loginPage.getUrl()).toContain(base_url)
			})
			await test.step(
				`Verify username and password fields are visible on login page`,
				async () => {
					await loginPage.verifyUserNameField();
					await loginPage.verifyPasswordField();
				}
			)
			await test.step('Verify LoginButton is Enabled Or Not ', async () => {
				await loginPage.verifyLoginButton();
			})

			await test.step('Login as a standard user', async () => {
				await loginPage.loginAsStandardUser();
			})


			await test.step('In Product Page Selecting the drop Down Option ', async () => {
				//await productPage.filterDropDown();
				await productPage.productDropDown();
			})

			await test.step('User is on the Landing/Products page. Verify the Landing page logo and URL', async () => {
				expect(await productPage.getUrl()).toBe(productPageUrl);
				expect(await productPage.getTitle()).toBe(productPageTitle);
			})
			await test.step('Verify the PRODUCTS title and peek image visible on the home page', async () => {
				await productPage.productBugerMenu();
			})

			await test.step('Verify all the options Burger menu item, ALL ITEMS; ABOUT; LOGOUT AND RESET APP STATE are visible on inventory sidebar links on left side of the page', async () => {
				await productPage.productAllItems();
				await productPage.productAbout();
				await productPage.productLogout();
				await productPage.productRestAppState();
			})
			await test.step('Verify the PRODUCTS title and peek image visible on the home page', async () => {
				await productPage.productCartIcon();
				await productPage.productContainer();
			})

			await test.step('Verify the footer text and swag bot footer is visible', async () => {
				await productPage.productTwitter();
				await productPage.productFacebook();
				await productPage.productLinkedin();
				await productPage.productFooterText();
			})

			await test.step('Click on “About” navbar link from the “inventory sidebar panel” and check whether user is navigated to saucelabs page', async () => {
				await productPage.productAboutClick();
			})

			await test.step('Click on Twitter social link and verify user is navigated to Twitter page', async () => {
				const twitterUrl = await productPage.twitterLogoClick(); // Get the Twitter page URL
				expect(twitterUrl).toBe(twitterURl); // Assert the URL
			  });

			  await test.step('Click on Facebook social link and verify user is navigated to Facebook page', async () => {
				const facebookUrl = await productPage.facebookLogoClick(); // Get the facebook page URL
				expect(facebookUrl).toBe(facebookURl); // Assert the URL
			  });

			  await test.step('Click on Linkedin social link and verify user is navigated to Linkedin page', async () => {
				const linkedinUrl = await productPage.linkedinLogoClick(); // Get the facebook page URL
				expect(linkedinUrl).toBe(linkedinURl); // Assert the URL
			  });


			  await test.step('User logout from the application and verify the login page',async()=>{
				await productPage.logOutClick();
			  })






			// await test.step('Click on Twitter social link and verify user is navigated to Twitter page', async () => {
			// 	await productPage.twitterLogoClick();
			// 	expect(await productPage.getUrl()).toBe('https://x.com/saucelabs');
			// })
			


		})
	})