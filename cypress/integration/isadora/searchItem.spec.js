describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Login isadora', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url,addItems} = testValues.isadora;
            cy.visit(url)
            cy.searchItems(search);
            // cy.addItems(addItems);
        })
    })
});
