Cypress.Commands.add("login", (login) => {

    login.xpachClickSearch.forEach(xpath => {
        return(
            cy.xpath(xpath).click()
        )
    });

    cy.xpath(login.xpathInputEmail).type(login.email);
    cy.xpath(login.xpathInputPassword).type(login.password);
    cy.xpath(login.xpathClick).click();
    cy.location().should((loc) => {
        console.log(loc)
        expect(`${loc.pathname}`).to.eq(`/${login.hashExpect}`)
    });
});
