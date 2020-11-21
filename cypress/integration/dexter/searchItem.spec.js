describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Search Adidas', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url} = testValues.dexter;
            cy.visit(url)
            cy.searchItems(search);
        })
    })
});
