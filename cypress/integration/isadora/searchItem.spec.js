describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Search Items', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url,addItems} = testValues.isadora;
            cy.visit(url)
            cy.searchItems(search);
            // cy.addItems(addItems);
        })
    })
});
