describe('Search a random item in a cart', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Select Item', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url} = testValues.dexter;
            cy.visit(url)
            cy.searchItems(search)
            
        })
    })
});
