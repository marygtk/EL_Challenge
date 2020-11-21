Cypress.Commands.add("likeItems", (like) => {
    const{click,hover}=like;
    cy.xpath(`${hover}`).trigger('mouseover');
    cy.xpath(`${click}`).click();
});
