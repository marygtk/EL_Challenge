describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Like items', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url,like} = testValues.isadora;
            cy.visit(url)
            cy.searchItems(search);
            
        })
    });

    it('Like',()=>{
        cy.get('@testValues').then((testValues)=>{
            const {like} = testValues.isadora;
            cy.likeItems(like);
        })
    });
    
});
