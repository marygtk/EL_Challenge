Cypress.Commands.add("searchItems", (search,callback) => {
    const {item,iconSearch,inputSearch,inputValue,numbersItem,sendForm}=search;
    cy.xpath(`${iconSearch}`).click();
    cy.xpath(`${inputSearch}`).type(inputValue);
    cy.xpath(sendForm).click();
    numbersItem.forEach(element => {
        cy.xpath(`${item}[${element}]`).click();
        //  cy.go('back')
    });
});
