describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('interface.json').as("testValues")
    })

    it('Login isadora', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {login,url} = testValues.isadora;
            cy.visit(url)
            cy.xpath('//*[@id="header"]/div[1]/div[2]/div[2]/div/div[2]/a').trigger('mouseover')
            cy.login(login);
        })
    })
});
