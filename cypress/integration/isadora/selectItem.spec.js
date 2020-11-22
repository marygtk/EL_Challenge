describe('Select Items', () => {

    beforeEach(()=>{
        cy.fixture('interface.json').as("testValues")
    });

    it('Search Items', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url,addItems,selectItem} = testValues.isadora;
            cy.visit(url)
            cy.searchItems(search);
            cy.SelectItem(selectItem);
        })
    });
});
