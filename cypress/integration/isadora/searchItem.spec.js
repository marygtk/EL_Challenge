describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Login isadora', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url} = testValues.isadora;
            cy.visit(url)
            cy.searchItems(search);
        })
    })
});
