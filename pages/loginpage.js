import BasePage from "./basePage";
import { userName, password, login_Btn, logo } from "../pom/Login_page";
import fs from 'fs';
import { base_url, title } from "../config";
const testData = JSON.parse(fs.readFileSync('data/user.json'))
class LoginPage extends BasePage {
   constructor(page) {
      super(page);
   }

   async loginPageLogo() {
      await super.textContent(logo);
      await super.isElementVisible(logo, testData.notVisibleText);
   }
   async openApp() {
      await super.open(base_url);
      await super.getTitle(title)
   }
   async loginAsStandardUser() {
      await super.waitAndFill(userName, testData.standard_user);
      await super.waitAndFill(password, testData.password);
      await super.waitAndClick(login_Btn);
   }
   async verifyUserNameField() {
      await super.isElementVisible(userName, testData.inputBox);
   }
   async verifyPasswordField() {
      await super.isElementVisible(password, testData.inputBox);
   }
   async verifyLoginButton() {
      await super.isElementEnabled(login_Btn, testData.errorMessage);
   }
   async loginAsProblemUser() {
      await super.waitAndFill(userName, testData.problem_user);
      await super.waitAndFill(userName, testData.password);
      await super.waitAndClick(login_Btn);
   }
   async loginAsPerformanceUser() {
      await super.waitAndFill(userName, testData.performance_glitch_user);
      await super.waitAndFill(userName, testData.password);
      await super.waitAndClick(login_Btn);
   }
   async loginAsLockedUser() {
      await super.waitAndFill(userName, testData.locked_out_user);
      await super.waitAndFill(userName, testData.password);
      await super.waitAndClick(login_Btn);
   }
}
export default LoginPage