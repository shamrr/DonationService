import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";


export default class App{
    #DonateForm
    #DonateList

    constructor(){
        this.state = {
            donates: [],
            totalAmount: 0,
        }
        this.#DonateForm = new DonateForm(this.state.totalAmount, this.#createNewDonate.bind(this));
        this.#DonateList = new DonateList(this.state.donates);   
    }

    #createNewDonate(newDonate){
        this.state.donates.push(newDonate);
        this.state.totalAmount += newDonate.amount;
        this.#DonateList.updateDonates(this.state.donates);
        this.#DonateForm.updateTotalAmount(this.state.totalAmount);
    }
    run(){
        const donateFormHTML = this.#DonateForm.render();
        const donateListHTML = this.#DonateList.render();
        document.body.append(
            donateFormHTML,
            donateListHTML
        );
    }
    
}
