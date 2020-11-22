Cypress.Commands.add("searchItems", (search) => {
    const {iconSearch,inputSearch,inputValue,sendForm,expectUrl}=search;
    cy.xpath(`${iconSearch}`).click();
    cy.xpath(`${inputSearch}`).type(inputValue);
    cy.xpath(sendForm).click();
    cy.locationExpect(expectUrl);
});

Cypress.Commands.add("SelectItem", (selectItem) => {
    const {item,numbersItem}=selectItem;
    numbersItem.forEach(element => {
        cy.xpath(`${item}${element}`).click();
    });
});

Cypress.Commands.add("addItem", (addItems,selectItem) => {
    const {item,numbersItem}=selectItem;
    const {clickOnItems}=addItems;

    numbersItem.forEach(element => {
        cy.xpath(`${item}${element}`).click();
        clickOnItems.forEach(clicks =>{
            cy.xpath(clicks).click();
        });
        cy.go("back")
    });
});

Cypress.Commands.add("deleteItem", (deleteItems) => {
    const {cart, clicksToDelete,item,closeModal} = deleteItems;
    cy.xpath(cart).click();
    clicksToDelete.forEach(element => {
        cy.xpath(`${item}${element.deleteIcon}`).click();closeModal;
        if (element.closeModal) {
            cy.xpath(element.closeModal).click();
        }
        if(element.confirmDelete){
            cy.xpath(element.confirmDelete).click();
        }
    });

});







