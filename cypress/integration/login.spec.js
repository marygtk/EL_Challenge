describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Login', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {login,url } = testValues.adidas;
            cy.login(login,url)
        })
    })
});
