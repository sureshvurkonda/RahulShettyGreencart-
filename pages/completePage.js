import { backtoHome } from "../pom/checkoutCompletepage";
import checkOutCompletepage from checkOutCompletepage
import BasePage from "./basePage"
class complete extends BasePage{
    constructor(page){
        super(page);
    }
    async complete(){
        await super.waitAndClick(backtoHome);
    }
}