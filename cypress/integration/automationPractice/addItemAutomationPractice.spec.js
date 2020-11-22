describe('Search and select item', () => {

    beforeEach(()=>{
        cy.fixture('interface.json').as("testValues")
    })

    it('Search Printed', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url} = testValues.automationPractice;
            cy.visit(url)
            cy.searchItems(search);
        })
    });

    it('Add Items', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {selectItem,addItems} = testValues.automationPractice;
            cy.addItem(addItems,selectItem);
            const itemsLength =selectItem.numbersItem.length;
            cy.addItemsExpect(itemsLength,addItems)
            //Delete items 
            const {deleteItems} = testValues.automationPractice;
            cy.deleteItem(deleteItems);
            cy.wait(2200);
            cy.deleteItemExpect(itemsLength,deleteItems)
        })
    });

});
