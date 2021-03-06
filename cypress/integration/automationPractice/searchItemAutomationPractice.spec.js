describe('Search and select item', () => {
    let local = null;
    beforeEach(()=>{
        cy.fixture('interface.json').as("testValues")
    })

    it('Search Printed', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url} = testValues.automationPractice;
            cy.visit(url)
            cy.searchItems(search);
            cy.location().should((loc) => {
                local = loc.toString();
            });
        });
    });

    it('Select Item', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {selectItem} = testValues.automationPractice;
            cy.SelectItem(selectItem);
            cy.locationExpectNotEqual(local);
        });
    });

});
