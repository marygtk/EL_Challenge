describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('interface.json').as("testValues")
    })

    it('Login dexter', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {login,url} = testValues.dexter;
            cy.visit(url)
            cy.login(login);
        })
    })
});
