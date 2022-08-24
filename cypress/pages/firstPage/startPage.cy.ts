import startPageSelectors from './startPageSelectors.cy';

class ShowPage {
    firstShowPage(){
        cy.wait(2000);
        cy.get(startPageSelectors.checkLogo).should('be.visible');
    }
}

export const showPage = new ShowPage();