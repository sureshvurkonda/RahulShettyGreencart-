import { checkOut, continueShopping } from "../pom/yourCart";
import BasePage from "./basePage";




class cart extends BasePage{
    constructor(page){
        super(page);
    }
    async carDetails(){
        await super.waitAndClick(checkOut);
        await super.waitAndClick(continueShopping);
    }
}