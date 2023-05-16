export class DonateList{
    #donatesContainer
    #donatesContainerTitle
    #donateItemsContaner
    #donates

    constructor(donates){
        this.#donates = donates;
    }

    updateDonates(updatedDonates){
        this.#donateItemsContaner.innerHTML = '';
        this.#renderDonateItem(this.#donateItemsContaner);
    }

    #renderDonateItem(container){
        this.#donates.forEach((donateItem) => {
            const donateItemHTML = document.createElement('div');
            donateItemHTML.className = 'donate-item';
            const creationTime = donateItem.date;
            donateItemHTML.innerHTML = `${creationTime} - <b>${donateItem.amount}$</b>`;
            container.append(donateItemHTML);
        });
    }

    render(){
        this.#donatesContainer = document.createElement('div');
        this.#donatesContainer.className = 'donates-container';

        this.#donatesContainerTitle = document.createElement('h2');
        this.#donatesContainerTitle.className = 'donates-container__title';
        this.#donatesContainerTitle.innerText = 'Список донатов';

        this.#donateItemsContaner = document.createElement('div');
        this.#donateItemsContaner.className = 'donates-container__donates';

        this.#donatesContainer.append(this.#donatesContainerTitle, this.#donateItemsContaner);
        this.#renderDonateItem(this.#donateItemsContaner);
        return this.#donatesContainer;
    }
} 
