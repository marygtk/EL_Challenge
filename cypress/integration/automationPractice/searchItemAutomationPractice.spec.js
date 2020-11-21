describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Search Printed', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url} = testValues.automationPractice;
            cy.visit(url)
            cy.searchItems(search);
        })
    })
});
