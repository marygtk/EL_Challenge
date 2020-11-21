describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Login AutomationPractice', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {login,url} = testValues.automationPractice;
            cy.visit(url)
            cy.login(login);
        })
    })
});
