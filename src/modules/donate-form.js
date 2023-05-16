export class DonateForm{
    #donateForm
    #totalAmountHTML
    #createNewDonate

    constructor(totalAmount, createNewDonate){
        this.totalAmount = totalAmount;
        this.#createNewDonate = createNewDonate;
    }

    updateTotalAmount(newAmount){
        this.#totalAmountHTML.innerText = `${newAmount}$`;
    }
    
    #renderDonateInput(){
        const donateLabel = document.createElement('label');
        donateLabel.className = 'donate-form__input-label';
        donateLabel.innerText = 'Введите сумму в $';

        const donateInput = document.createElement('input');
        donateInput.className = 'donate-form__donate-input';
        donateInput.name = 'amount';
        donateInput.type = 'number';
        donateInput.max = '100';
        donateInput.min = '1';
        donateInput.required = '';

        donateLabel.append(donateInput);

        return donateLabel;
    }

    #renderDonateButton(){
        const donateButton = document.createElement('button');
        donateButton.className = 'donate-form__submit-button';
        donateButton.type = 'submit';
        donateButton.innerText = 'Задонатить';
        
        return donateButton;
    }

    #createDonateSubmit(event){
        event.preventDefault();
        const newDonateValue = Number(event.target.amount.value);
        const newDonate = {
            date: new Date(),
            amount: newDonateValue,
        };
        this.#createNewDonate(newDonate);
        event.target.amount.value = '';
    }


    render(){
        this.#donateForm = document.createElement('form');
        this.#donateForm.className = 'donate-form';
        this.#donateForm.addEventListener('submit', this.#createDonateSubmit.bind(this));

        this.#totalAmountHTML = document.createElement('h1');
        this.#totalAmountHTML.id = 'total-amount';
        this.updateTotalAmount(this.totalAmount);

        this.#donateForm.append(this.#totalAmountHTML, this.#renderDonateInput(), this.#renderDonateButton());
        return this.#donateForm;
    }
}
