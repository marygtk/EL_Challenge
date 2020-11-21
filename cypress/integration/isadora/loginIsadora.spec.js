describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Login', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {login,url} = testValues.dexter;
            cy.visit(url)
            // cy.xpath('//*[@id="header"]/div[1]/div[2]/div[2]/div/div[2]/a').trigger('mouseover')
            cy.login(login);
        })
    })
});
