import { cancle_Btn, continue_Btn, firstName, lastName, pinCode } from "../pom/checkOutInformation";
import checkOutInformation from checkOutInformation;
import BasePage from "./basePage";
class Information extends BasePage{
    constructor(page){
        super(page);
    }
  async cartInformation(){
    await super.waitAndFill(firstName,'suresh');
    await super.waitAndFill(lastName,'vurkonda');
    await super.waitAndFill(pinCode,500084);
    await super.waitAndClick(continue_Btn);
    await super.waitAndClick(cancle_Btn);
  }

}