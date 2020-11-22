Cypress.Commands.add("locationExpect", (hashExpect) => {
    cy.location().should((loc) => {
        expect(`${loc.toString()}`).to.eq(`${hashExpect}`)
    });
});

Cypress.Commands.add("addItemsExpect", (itemsAccount,addItem) => {
    const{cartAccountItems}=addItem;

    cy.xpath(cartAccountItems).then(($span) => {
        const number = $span.text();
        expect(`${number.trim()}`).to.eq(`${itemsAccount}`)
    })
});

Cypress.Commands.add("deleteItemExpect", (itemsAccount,deleteItems) => {
    const {clicksToDelete,cartAccountItems} = deleteItems;
    cy.xpath(cartAccountItems).then(($span) => {
        const number = $span.text();
        expect(`${number.trim()}`).to.eq(`${itemsAccount - clicksToDelete.length}`)
    })
});

Cypress.Commands.add("locationExpectNotEqual", (local) => {
    cy.location().should((loc) => {
        expect(`${loc.toString()}`).to.not.equal(`${local}`)
    });
});
