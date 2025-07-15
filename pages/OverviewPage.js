import { cancle_btn, finish_btn } from "../pom/cart_Overview";
import cart_Overview from cart_Overview
import BasePage from "./basePage"
class overview extends BasePage{
    constructor(page){
        super(page);
    }
    async cartOverview(){
        await super.waitAndClick(finish_btn);
        await super.waitAndClick(cancle_btn);
    }
    
}