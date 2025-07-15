import {
   addToCart, cart_Btn,
   filterDropDown, logoTitle,
   productList, productTitle,
   productImg, burgerMenu,
   items, logout, about, restApp,
   cartIcon, container, twitter, facebook, linkedin, footerText,
   sigIn, twitterLink, facebookLink, linkedinLink, logOutBtn,dropDown


} from "../pom/products_page";
import BasePage from "./basePage"
import fs from 'fs'

const testData = JSON.parse(fs.readFileSync('data/user.json'))

class products extends BasePage {
   constructor(page) {
      super(page);
   }
   async addtocart() {
      await super.waitAndClick(addToCart);
      await super.waitAndClick(cart_Btn);
   }

   // async productLists(){
   //    const productss =  await super.getCount(await productList);
   //    //console.log(await productss);
   // }
   async productImages() {
      await super.isElementVisible(await productImg, testData.notVisibleText);
   }
   async productTitle() {
      await super.isElementVisible(await productTitle, testData.notVisibleText);
   }
   async productBugerMenu() {
      await super.isElementVisible(await burgerMenu, testData.notVisibleText);
      await super.waitAndClick(await burgerMenu);
   }
   async productAllItems() {
      await super.isElementVisible(await items, testData.notVisibleText);
   }

   async productAbout() {
      await super.isElementVisible(await about, testData.notVisibleText);
   }

   async productLogout() {
      await super.isElementVisible(await logout, testData.notVisibleText);
   }

   async productRestAppState() {
      await super.isElementVisible(await restApp, testData.notVisibleText);
   }

   async productCartIcon() {
      await super.isElementVisible(await cartIcon, testData.notVisibleText);
   }
   async productContainer() {
      await super.isElementVisible(await container, testData.notVisibleText);
   }

   async productTwitter() {
      await super.isElementVisible(await twitter, testData.notVisibleText);
   }
   async productFacebook() {
      await super.isElementVisible(await facebook, testData.notVisibleText);
   }
   async productLinkedin() {
      await super.isElementVisible(await linkedin, testData.notVisibleText);
   }
   async productFooterText() {
      await super.isElementVisible(await footerText, testData.notVisibleText);
   }

   async productAboutClick() {
      //await super.waitAndClick(await burgerMenu);
      await super.waitAndClick(about);
      await super.waitForPageLoad();
      await super.isElementVisible(await sigIn, testData.notVisibleText);
      await super.PreviousPTabs();

   }

   async twitterLogoClick() {
      const newPage = await this.navigatePage(twitterLink);
      return newPage.url();
   }
   async facebookLogoClick() {
      const newPage = await this.navigatePage(facebookLink);
      return newPage.url();
   }
   async linkedinLogoClick() {
      const newPage = await this.navigatePage(linkedinLink);
      return newPage.url();
   }
   async logOutClick() {
      await super.waitAndClick(burgerMenu);
      await super.waitAndClick(logOutBtn);
   }
   async filterDropDown() {
      let count = await super.getCount(filterDropDown);
      console.log(await count);
      for (let i = 0; i < count; i++) {
         const drop = await super.getNthValue(filterDropDown, await i);
         console.log(drop);
         //  if (await super.include(drop,'Price (low to high)')) {
         //    console.log(`yesss`);
         //    console.log(drop);
         //    await super.waitAndClick(filterDropDown);
         //  }
         // await super.equals(drop,'Price (low to high)');
         // console.log(`yesss`);
      }
   }
   async productDropDown(){
         await super.selectValueFromDropdown(dropDown,"lohi");
   }


}

export default products


// async saucelabsPage() {
//    await super.waitForPageLoad();
//    await super.isElementVisible(await sigIn, testData.notVisibleText);
// }



//    async getProductTitle(){
//     await super.textContent(await logoTitle);
//     await super.isElementVisible(logoTitle, testData.notVisibleText);

//    }
//    async getProductUrl(){
//     await super.getUrl();
//     }
// async filterDropDown() {
//     let count = await super.getCount(filterDropDown);
//     //console.log(await count);
//     for (let i = 0; i < count; i++) {
//         const drop = await super.getNthValue(filterDropDown, await i);
//         //console.log(drop);
//         if(drop=='Price (low to high)'){
//             await super.selectValueFromDropdown(drop)
//         }
//     }
// }